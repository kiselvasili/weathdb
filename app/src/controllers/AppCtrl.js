/**
 * Created by Vasili Kisel on 7/26/2016.
 */
export default /*@ngInject*/ function AppCtrl($q, $rootScope, $scope, AuthService, API_ENDPOINT, $http, $state) {
    console.log(AuthService.isAuthenticated());
    $rootScope.signout = function () {
        console.log('signout');
        AuthService.logout();
        $state.go('login');
    };
};