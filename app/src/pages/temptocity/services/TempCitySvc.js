/**
 * Created by Vasili Kisel on 6/1/2016.
 */
angular.module('weatherapp')
.factory('TempCitySvc', function ($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER,API_ENDPOINT) {
    console.log('Hello5');
    return {
        getFullData : function(cityId){
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url+'/findExtraPropCityById',
                data:{
                    id:cityId
                }
            }).then(function(res){
                console.log(res);
                console.log('Hello11');
                return res.data.cityInfo;
            })
        }
    }

});