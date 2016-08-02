angular.module('weatherapp')
    .factory('ExampleSvc', function ($http) {
        console.log('Hello5');
        return {
            getFullData : function(cityId){
                return $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/find',
                    params:{
                        id:cityId,
                        appid:'feda7a0cb389cbaef6476c12d19e46bd'
                    }
                })
            }
        }

    })