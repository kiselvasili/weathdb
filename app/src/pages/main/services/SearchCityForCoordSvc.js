/**
 * Created by Vasili Kisel on 8/6/2016.
 */
main
    .factory('SearchCityForCoordSvc',
        function($http,API_OPEN_WEATHER,APPID_OPEN_WEATHER,API_ENDPOINT){
            return {
                getCeoLocCity:function(lat,lon){
                    console.log(lat);
                    console.log(lon);
                    return $http({
                        method: 'POST',
                        url: API_ENDPOINT.url+'/findCityByCoord',
                        data: {
                            lat: lat,
                            lon: lon
                        }
                    })
                        .then(function(res){
                            console.log(res);
                            return res.data.cityInfo;
                        })
                }
            }

    });