/**
 * Created by Vasili Kisel on 6/4/2016.
 */
angular.module('weatherapp')
.config(function($stateProvider){
    $stateProvider
    .state('main.extraTemp',{
        url: '/',
        templateUrl: 'src/pages/extratemptocity/templates/extraTempCity.html'
/*        ,
        controller: 'ExtraTempCityCtrl',
        controllerAs: 'vm'*/
    })
});