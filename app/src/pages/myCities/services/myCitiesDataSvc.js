/**
 * Created by Vasili Kisel on 7/30/2016.
 */
export default function myCitiesDataSvc($http, API_ENDPOINT) {
    return {
        getmyCitiesData: function (id) {
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url + '/myCitiesGroup',
                data: {
                    id: id
                }
            }).then(function (res) {
                console.log(res);
                return res.data.cityInfo;
            });
        }
    }
}