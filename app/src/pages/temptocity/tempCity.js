/**
 * Created by Vasili Kisel on 5/23/2016.
 */
angular.module('weatherapp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('TempToOneCity', {
                url: '/:cityId/cityweather',
                templateUrl: 'src/pages/temptocity/templates/temptocity.html',
                controller: 'TempCityCtrl',
                controllerAs: 'vm',
                data: {
                    'noLogin': true
                }
                /*controller: function($stateParams){
                 console.log($stateParams)
                 console.log('Hello9')
                 }*/
            })
    });