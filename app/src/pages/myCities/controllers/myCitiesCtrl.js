/**
 * Created by Vasili Kisel on 7/19/2016.
 */
export default /*@ngInject*/ function myCitiesCtrl($rootScope, $scope, AuthService, SearchCitySvc, $state,GetCitiesCollectionSvc,myCitiesDataSvc,AddCitiesSvc, DeleteCitiesSvc) {
    var vm = this;

    GetCitiesCollectionSvc.getCitieslist()
        .then(function (results) {
            console.log(results.citiesCollection);
            vm.citiesCollection = results.citiesCollection;
            console.log(vm.citiesCollection.join(','));

            myCitiesDataSvc.getmyCitiesData(vm.citiesCollection.join(','))
                .then(function (result) {
                    console.log(result.list);
                    vm.list = result.list;
                    console.log(vm.list);
                });


            $scope.addCityUser = function (id) {
                //console.log(id);
                AddCitiesSvc.addCitiesUser(id);
                vm.citiesCollection.push(id);
                console.log(vm.citiesCollection);
            };

            $scope.deleteCityUser = function (id) {
                DeleteCitiesSvc.deleteCitiesUser(id);
                vm.citiesCollection = vm.citiesCollection.filter(x=>x !== id);
                //console.log(vm.citiesCollection);
            };


        });

    vm.wow = 'wi-night-clear';
}