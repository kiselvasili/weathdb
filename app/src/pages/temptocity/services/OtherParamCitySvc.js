/**
 * Created by Vasili Kisel on 6/9/2016.
 */
angular.module('weatherapp')
.factory('OtherParamCitySvc',function($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER,API_ENDPOINT){
    return{
        getOtherParams:function(cityId){
            console.log(cityId)
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url+'/findCityById',
                data:{
                    id:cityId
                }
            }).then(function(res){
                console.log(res);
                console.log('Hello111');
                return res.data.cityInfo;
            })

        }
    }
})