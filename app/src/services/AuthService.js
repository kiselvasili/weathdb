/**
 * Created by Vasili Kisel on 7/22/2016.
 */
main
    .service('AuthService', function ($q, $http, API_ENDPOINT,$rootScope) {
        var LOCAL_TOKEN_KEY = 'yourTokenKey';
        var isAuthenticated = false;
        var authToken;
        //var API_ENDPOINT='http://localhost:8080/api';
console.log('срабол юс сервис')

        function loadUserCredentials() {
            console.log('сработал loadUserCredentials');
            console.log(isAuthenticated);
            var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
            if (token) {
                useCredentials(token);
            }
        }


        function storeUserCredentials(token) {
            window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
            useCredentials(token);
        }


        function useCredentials(token) {
            isAuthenticated = true;
            console.log('isAuthenticated '+isAuthenticated);
            authToken = token;
            //$http.defaults.headers.common.Authorization = authToken;
        }


        function destroyUserCredentials() {
            authToken = undefined;
            isAuthenticated = false;
            //$http.defaults.headers.common.Authorization = undefined;
            window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        }


        var register = function (user) {
            return $q(function (resolve, reject) {
                $http({
                    method: 'POST',
                    url: API_ENDPOINT.url + '/signup',
                    data: user
                })
                    .then(function (result) {
                        if (result.data.success) {
                            resolve(result.data.msg);
                        } else {
                            reject(result.data.msg);
                        }
                    });
            });
        };


        var login = function (user) {
            //console.log(user);
            return $q(function (resolve, reject) {
                $http({
                    method: 'POST',
                    url: API_ENDPOINT.url + '/authenticate',
                    data: user
                })
                    .then(function (result) {
                        console.log('error here!!');
                        console.log(result);
                        if (result.data.success) {

                            storeUserCredentials(result.data.token);
                            resolve(result.data.msg);
                        }
                        else {
                            console.log('err!!!');
                            reject(result.data.msg);
                        }
                    })
            });
        };


        var logout = function () {
            destroyUserCredentials();
        };

        loadUserCredentials();


        return {
            login: login,
            register: register,
            logout: logout,
            isAuthenticated: function () {
                return isAuthenticated;
            },
            token:function(){
                return authToken;
            }
        };

    });