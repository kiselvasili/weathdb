/**
 * Created by Vasili Kisel on 5/4/2016.
 */
export default  function SearchCitySvc($http, API_ENDPOINT) {
    return {
        getCityData: function (city) {
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url + '/findCityByName',
                data: {
                    city: city
                }
            })
                .then(function (res) {
                    console.log(res);
                    return res.data.cityInfo;


                })
        }


    }

}