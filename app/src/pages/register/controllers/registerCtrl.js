/**
 * Created by Vasili Kisel on 7/24/2016.
 */
main
    .controller('registerCtrl', function ($scope, AuthService, $state) {
        //var registerCtrl=this;
        var vm=this;
        $scope.register = function () {
            console.log($scope.user);
            AuthService.register($scope.user)
                .then(function (msg) {
                    console.log(msg);
                    $state.go('login');
                }).catch(function(errMsg){
                console.log(errMsg);
                vm.errMsg=errMsg.data.msg;
                    $scope.user.nickname='';
                    $scope.user.password='';
                    $scope.user.name='';

            });
        };

    });