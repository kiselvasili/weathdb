/**
 * Created by Vasili Kisel on 7/30/2016.
 */
main
.factory('myCitiesDataSvc',
    function($http){
        return{
            getmyCitiesData:function(id){
                return $http({
                    method:'GET',
                    url:'http://api.openweathermap.org/data/2.5/group',
                    params:{
                        id:id,
                        appid: 'feda7a0cb389cbaef6476c12d19e46bd'
                    }
                }).then(function (res) {
                    console.log(res);
                    return res.data;
                });
            }
        }
});