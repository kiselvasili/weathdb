/**
 * Created by Vasili Kisel on 7/19/2016.
 */
export default function loginCtrl($scope, AuthService, $state) {

    var vm = this;
    $scope.login = function () {
        AuthService.login($scope.user).then(function (msg) {
            $state.go('main');
        }, function (errMsg) {
            vm.errMsg = errMsg;
            console.log(errMsg);
            $scope.user.nickname = '';
            $scope.user.password = '';
        });
    };
}

