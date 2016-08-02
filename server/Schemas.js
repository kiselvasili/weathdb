/**
 * Created by Vasili Kisel on 7/21/2016.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('Flight',{
    number:Number,
    origin:String,
    destination:String
});