/**
 * Created by Vasili Kisel on 5/4/2016.
 */
angular.module('weatherapp')
    .factory('SearchCitySvc',
        function ($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER) {
            console.log('Hello2');
            return {
                getCityData: function (city) {
                    return $http({
                        method: 'GET',
                        url: API_OPEN_WEATHER.url+'/data/2.5/find',
                        params: {
                            q: city,
                            type: 'like',
                            appid: APPID_OPEN_WEATHER.appid
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