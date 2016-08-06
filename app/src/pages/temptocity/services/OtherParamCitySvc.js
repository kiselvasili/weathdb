/**
 * Created by Vasili Kisel on 6/9/2016.
 */
angular.module('weatherapp')
.factory('OtherParamCitySvc',function($http){
    return{
        getOtherParams:function(cityId){
            return $http({
                method: 'GET',
                url: '//api.openweathermap.org/data/2.5/weather',
                params:{
                    id:cityId,
                    appid:'feda7a0cb389cbaef6476c12d19e46bd'
                }
            }).then(function(res){
                console.log(res);
                console.log('Hello111');
                return res.data;
            })

        }
    }
})