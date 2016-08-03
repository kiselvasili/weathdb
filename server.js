/**
 * Created by Vasili Kisel on 7/20/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./server/database');
var User = require('./server/app/models/user'); // get the mongoose model


var port = process.env.PORT || 8080;

var jwt = require('jwt-simple');


app.set('port', port);
app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());


allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);


// demo Route (GET http://localhost:8080)
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});


mongoose.connect(config.database);


require('./server/app/config/passport')(passport);

// bundle our routes
var apiRoutes = express.Router();

// create a new user account (POST http://localhost:8080/api/signup)
apiRoutes.post('/signup', function (req, res) {
    if (!req.body.name || !req.body.password || !req.body.nickname) {
        res.json({success: false, msg: 'Please pass name, password and nickname.'});
    } else {
        var newUser = new User({
            name: req.body.name,
            password: req.body.password,
            nickname: req.body.nickname
        });

        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});


apiRoutes.post('/authenticate', function (req, res) {
    //console.log(req);
    console.log('tratata');
    User.findOne({
        nickname: req.body.nickname
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    //console.log('tratata');
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});


apiRoutes.get('/memberinfo', passport.authenticate('jwt', {session: false}), function (req, res) {
    var token = getToken(req.headers);
    //console.log(token);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findOne({
            name: decoded.name
        }, function (err, user) {
            if (err) throw err;

            if (!user) {
                return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
});


apiRoutes.post('/addingdata', function (req, res) {
    console.log(req.body.id);
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.update({
            nickname: decoded.nickname
        }, {$push: {cities: req.body.id}}, {upsert: true},
            function (err) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                console.log("Successfully added");
                return res.json({success:true,msg:'Succesfully added'});
            }
        });
    }

});
apiRoutes.post('/deletedata',function(req,res){
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.update({
            nickname: decoded.nickname
        },
            { $pull: { cities : req.body.id } },
            function(err){
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    console.log("Successfully deleted");
                    return res.json({success:true,msg:'Succesfully deleted'});
                }
            }
        )
    }
});


apiRoutes.get('/getListCities',function(req, res){
    var token = getToken(req.headers);
    console.log(token);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        console.log(decoded.name);
        User.findOne({
            nickname:decoded.nickname
        }, function(err,user){
            if (err) throw err;
            if (!user) {
                return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
                res.json({success: true, citiesCollection: user.cities});
            }
        })
    }
});


getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


// connect the api routes under /api/*
app.use('/api', apiRoutes);


// Start the server
app.listen(port);
console.log('Pentagon launched the server: http://localhost:' + port);
