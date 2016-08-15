/**
 * Created by Vasili Kisel on 6/1/2016.
 */
export default /*@ngInject*/ function TempCitySvc($http, API_ENDPOINT) {
    return {
        getFullData: function (cityId) {
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url + '/findExtraPropCityById',
                data: {
                    id: cityId
                }
            }).then(function (res) {
                console.log(res);
                return res.data.cityInfo;
            })
        }
    }
}
