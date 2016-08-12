/**
 * Created by Vasili Kisel on 5/4/2016.
 */
angular.module('weatherapp')
    .factory('SearchCitySvc',
        function ($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER,API_ENDPOINT) {
            console.log('Hello2');
            return {
                getCityData: function (city) {
                    return $http({
                        method: 'POST',
                        url: API_ENDPOINT.url+'/findCityByName',
                        data: {
                            city: city
                        }
                    })
                        .then(function (res) {
                            console.log(res);
                            console.log('Hello3');
                            return res.data.cityInfo;


                        })
                }


            }

        }
    );