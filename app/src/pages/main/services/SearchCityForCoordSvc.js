/**
 * Created by Vasili Kisel on 8/6/2016.
 */
main
    .factory('SearchCityForCoordSvc',
        function($http,API_OPEN_WEATHER){
            return {
                getCeoLocCity:function(lat,lon){
                    console.log(lat);
                    console.log(lon);
                    return $http({
                        method: 'GET',
                        url: API_OPEN_WEATHER.url+'/data/2.5/weather',
                        params: {
                            lat: lat,
                            lon: lon,
                            appid: 'feda7a0cb389cbaef6476c12d19e46bd'
                        }
                    })
                        .then(function(res){
                            console.log(res);
                            return res.data;
                        })
                }
            }

    });