
export default /*@ngInject*/ function appRouting($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    //cfpLoadingBarProvider.color = '#3100dd';

    $urlRouterProvider.otherwise('/Search');

    $stateProvider
        .state('main', {
            url: '/Search',
            template: require('./pages/main/templates/searchCity.html'),
            controller: 'SearchCityCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })
        .state('login', {
            url: '/login',
            template: require('./pages/login/templates/login.html'),
            controller: 'loginCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })
        .state('myCities', {
            url: '/myCities',
            template: require('./pages/myCities/templates/myCities.html'),
            controller: 'myCitiesCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': false
            }
        })
        .state('register', {
            utl: '/register',
            template: require('./pages/register/templates/register.html'),
            controller: 'registerCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        })
        .state('TempToOneCity', {
            url: '/:cityId/cityweather',
            template: require('./pages/temptocity/templates/temptocity.html'),
            controller: 'TempCityCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        });
}