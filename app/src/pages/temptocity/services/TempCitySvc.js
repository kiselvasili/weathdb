/**
 * Created by Vasili Kisel on 6/1/2016.
 */
angular.module('weatherapp')
.factory('TempCitySvc', function ($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER) {
    console.log('Hello5');
    return {
        getFullData : function(cityId){
            return $http({
                method: 'GET',
                url: API_OPEN_WEATHER.url+'/data/2.5/forecast',
                params:{
                    id:cityId,
                    appid:APPID_OPEN_WEATHER.appid
                }
            }).then(function(res){
                console.log(res);
                console.log('Hello11');
                return res.data;
            })
        }
    }

});