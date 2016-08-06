/**
 * Created by Vasili Kisel on 5/4/2016.
 */
angular.module('weatherapp')
    .factory('SearchCitySvc',
        function ($http,API_OPEN_WEATHER) {
            console.log('Hello2');
            return {
                getCityData: function (city) {
                    return $http({
                        method: 'GET',
                        url: API_OPEN_WEATHER.url+'/data/2.5/find',
                        params: {
                            q: city,
                            type: 'like',
                            appid: 'feda7a0cb389cbaef6476c12d19e46bd'
                        }
                    })
                        .then(function (res) {
                            console.log(res);
                            console.log('Hello3');
                            return res.data;


                        })
                }


            }

        }
    );