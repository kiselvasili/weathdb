/**
 * Created by Vasili Kisel on 7/29/2016.
 */
main
.factory('getCitiesCollectionSvc',function($http,API_ENDPOINT,AuthService){
    return{
        getCitieslist:function(){
            return $http({
                method:'GET',
                url:API_ENDPOINT.url+'/getListCities',
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