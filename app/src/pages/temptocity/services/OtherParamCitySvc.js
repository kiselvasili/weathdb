/**
 * Created by Vasili Kisel on 6/9/2016.
 */
angular.module('weatherapp')
.factory('OtherParamCitySvc',function($http,API_OPEN_WEATHER){
    return{
        getOtherParams:function(cityId){
            return $http({
                method: 'GET',
                url: API_OPEN_WEATHER.url+'/data/2.5/weather',
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