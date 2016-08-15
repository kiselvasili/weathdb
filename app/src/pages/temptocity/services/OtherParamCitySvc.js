/**
 * Created by Vasili Kisel on 6/9/2016.
 */
export default /*@ngInject*/ function OtherParamCitySvc($http, API_ENDPOINT) {
    return {
        getOtherParams: function (cityId) {
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url + '/findCityById',
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