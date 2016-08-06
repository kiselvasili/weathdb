angular.module('weatherapp')
    .factory('ExampleSvc', function ($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER) {
        console.log('Hello5');
        return {
            getFullData : function(cityId){
                return $http({
                    method: 'GET',
                    url: API_OPEN_WEATHER.url+'/data/2.5/find',
                    params:{
                        id:cityId,
                        appid:APPID_OPEN_WEATHER.appid
                    }
                })
            }
        }

    })