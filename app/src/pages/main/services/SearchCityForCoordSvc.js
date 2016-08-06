/**
 * Created by Vasili Kisel on 8/6/2016.
 */
main
    .factory('SearchCityForCoordSvc',
        function($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER){
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
                            appid: APPID_OPEN_WEATHER.appid
                        }
                    })
                        .then(function(res){
                            console.log(res);
                            return res.data;
                        })
                }
            }

    });