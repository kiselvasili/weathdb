/**
 * Created by Vasili Kisel on 7/29/2016.
 */
export default /*@ngInject*/ function AddCitiesSvc($http, API_ENDPOINT, AuthService) {
    return {
        addCitiesUser: function (id) {
            return $http({
                method: 'POST',
                url: API_ENDPOINT.url + '/addingdata',
                data: {
                    id: id
                },
                headers: {
                    Authorization: AuthService.token()
                }
            }).then(function (res) {
                console.log(res);
                return res.data;
            })
        }
    }
}