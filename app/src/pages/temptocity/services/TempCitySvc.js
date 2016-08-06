/**
 * Created by Vasili Kisel on 6/1/2016.
 */
angular.module('weatherapp')
.factory('TempCitySvc', function ($http) {
    console.log('Hello5');
    return {
        getFullData : function(cityId){
            return $http({
                method: 'GET',
                url: '//api.openweathermap.org/data/2.5/forecast',
                params:{
                    id:cityId,
                    appid:'feda7a0cb389cbaef6476c12d19e46bd'
                }
            }).then(function(res){
                console.log(res);
                console.log('Hello11');
                return res.data;
            })
        }
    }

});