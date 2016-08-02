/**
 * Created by Vasili Kisel on 7/30/2016.
 */
main
.factory('deleteCitiesSvc',
    function($http,API_ENDPOINT,AuthService){
        return{
            deleteCitiesUser:function(id){
                console.log('deleteSvc');
                return $http({
                    method:'POST',
                    url:API_ENDPOINT.url+'/deletedata',
                    data:{
                        id:id
                    },
                    headers:{
                        Authorization:AuthService.token()
                    }
                }).then(function(res){
                    console.log(res);
                    return res.data;
                })
            }
        }
});