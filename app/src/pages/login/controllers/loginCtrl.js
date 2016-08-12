/**
 * Created by Vasili Kisel on 7/19/2016.
 */
main.controller('loginCtrl', function ($scope, AuthService, $state) {

    var vm=this;
    $scope.login = function () {
        //console.log($scope.user);
        AuthService.login($scope.user).then(function (msg) {
            $state.go('main');
        },function(errMsg){
            vm.errMsg=errMsg;
            console.log(errMsg);
            $scope.user.nickname='';
            $scope.user.password='';
        });
        //console.log(t);
    };


});