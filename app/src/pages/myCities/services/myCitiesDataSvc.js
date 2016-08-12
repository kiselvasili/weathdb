/**
 * Created by Vasili Kisel on 7/30/2016.
 */
main
.factory('myCitiesDataSvc',
    function($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER,API_ENDPOINT){
        return{
            getmyCitiesData:function(id){
                return $http({
                    method:'POST',
                    url:API_ENDPOINT.url+'/myCitiesGroup',
                    data:{
                        id:id,
                    }
                }).then(function (res) {
                    console.log(res);
                    return res.data.cityInfo;
                });
            }
        }
});