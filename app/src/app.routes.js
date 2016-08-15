
export default function appRouting($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;

    $urlRouterProvider.otherwise('/Search');

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
        .state('TempToOneCity', {
            url: '/:cityId/cityweather',
            templateUrl: 'src/pages/temptocity/templates/temptocity.html',
            controller: 'TempCityCtrl',
            controllerAs: 'vm',
            data: {
                'noLogin': true
            }
        });
}