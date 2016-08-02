/**
 * Created by Vasili Kisel on 5/4/2016.
 */
angular.module('weatherapp')
    .controller('SearchCityCtrl',
        function ($q, $scope, $state, SearchCitySvc,$rootScope,addCitiesSvc,deleteCitiesSvc,AuthService,getCitiesCollectionSvc) {
            console.log('searchCityCtrl');
            var vm = this;
            $scope.search = function () {
                var city = $scope.searchTerm;

                SearchCitySvc.getCityData(city)
                    .then(function (results) {
                        vm.count = results.count===0 ? true : false;
                        vm.cities = results.list;
                    });
                if(AuthService.isAuthenticated()){
                    getCitiesCollectionSvc.getCitieslist()
                        .then(function(results){
                            console.log(results.citiesCollection);
                            vm.citiesCollection=results.citiesCollection;
                        });

                    $scope.addCityUser=function(id){
                        console.log(id);
                        addCitiesSvc.addCitiesUser(id);
                        vm.citiesCollection.push(id);
                        console.log(vm.citiesCollection);
                    };

                    $scope.deleteCityUser=function(id){
                        deleteCitiesSvc.deleteCitiesUser(id);
                        vm.citiesCollection=vm.citiesCollection.filter(x=>x!==id);
                        console.log(vm.citiesCollection);
                    };


                }




            };



        }
    );