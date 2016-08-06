/**
 * Created by Vasili Kisel on 7/30/2016.
 */
main
.factory('myCitiesDataSvc',
    function($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER){
        return{
            getmyCitiesData:function(id){
                return $http({
                    method:'GET',
                    url:API_OPEN_WEATHER.url+'/data/2.5/group',
                    params:{
                        id:id,
                        appid: APPID_OPEN_WEATHER.appid
                    }
                }).then(function (res) {
                    console.log(res);
                    return res.data;
                });
            }
        }
});