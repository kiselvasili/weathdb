/**
 * Created by Vasili Kisel on 5/4/2016.
 */
export default function SearchCityCtrl($q, $scope, $state, SearchCityForCoordSvc, SearchCitySvc, $rootScope, AddCitiesSvc, DeleteCitiesSvc, AuthService, GetCitiesCollectionSvc, TempCitySvc) {
    var vm = this;

    vm.search = function () {
        var city = vm.searchTerm;

        if (vm.searchTerm) {
            vm.msgErr = false;
            SearchCitySvc.getCityData(city)
                .then(function (results) {
                    console.log(results);
                    vm.count = results.count === 0 ? true : false;
                    vm.cities = results.list;
                });
            if (AuthService.isAuthenticated()) {
                GetCitiesCollectionSvc.getCitieslist()
                    .then(function (results) {
                        console.log(results.citiesCollection);
                        vm.citiesCollection = results.citiesCollection;
                    });

                $scope.addCityUser = function (id) {
                    console.log(id);
                    AddCitiesSvc.addCitiesUser(id);
                    vm.citiesCollection.push(id);
                    console.log(vm.citiesCollection);
                };

                $scope.deleteCityUser = function (id) {
                    DeleteCitiesSvc.deleteCitiesUser(id);
                    vm.citiesCollection = vm.citiesCollection.filter(x=>x !== id);
                    console.log(vm.citiesCollection);
                };
            }
        }
        else {
            vm.msgErr = true;
        }

    };

    $scope.geolocation = function () {
        navigator.geolocation.getCurrentPosition((a) => {
            vm.lat = a.coords.latitude;
            vm.lon = a.coords.longitude;
            SearchCityForCoordSvc.getCeoLocCity(vm.lat, vm.lon)
                .then(function (res) {
                    console.log(res);
                    vm.otherParams = res;
                    var sunrise = new Date(res.sys.sunrise * 1000);
                    vm.sunriseHours = sunrise.getHours();
                    vm.sunriseMinutes = sunrise.getMinutes();
                    var sunset = new Date(res.sys.sunset * 1000);
                    vm.sunsetHours = sunset.getHours();
                    vm.sunsetMinutes = sunset.getMinutes();
                    console.log('other params');
                    console.log(vm.otherParams);
                    vm.cityId = res.id;
                    console.log(vm.cityId);
                    TempCitySvc.getFullData(vm.cityId)
                        .then(function (res) {
                            vm.obj = res;
                        })
                })
        });
    };
};