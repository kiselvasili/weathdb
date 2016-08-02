/**
 * Created by Vasili Kisel on 5/4/2016.
 */
var main = angular.module('weatherapp', ['ui.router','angular-loading-bar'])
    .run(function ($rootScope, $state, AuthService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState, fromStateParams) {
            console.log('state status: '+AuthService.isAuthenticated())
            $rootScope.stateStatus=AuthService.isAuthenticated();
            console.log('run');
            //console.log(toState);
            if (!AuthService.isAuthenticated()) {
                if (!toState.data.noLogin) {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        })
    });

main.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/Search');
    //console.log('config');
    /*$httpProvider.defaults.useXDomain = true;
     delete $httpProvider.defaults.headers.common['X-Requested-With'];*/

    $stateProvider
        .state('main', {
            url: '/Search',
            templateUrl: 'src/pages/main/templates/searchCity.html',
            controller: 'SearchCityCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'src/pages/login/templates/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })
        .state('myCities', {
            url: '/myCities',
            templateUrl: 'src/pages/myCities/templates/myCities.html',
            controller: 'myCitiesCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': false
            }
        })
        .state('register', {
            utl: '/register',
            templateUrl: 'src/pages/register/templates/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })

});
