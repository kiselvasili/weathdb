/**
 * Created by Vasili Kisel on 5/23/2016.
 */
export default /*@ngInject*/ function TempCityCtrl($state, $stateParams, TempCitySvc, OtherParamCitySvc) {
    var vm = this;
    TempCitySvc.getFullData($stateParams.cityId)
        .then(function (res) {
            vm.obj = res;
        });

    OtherParamCitySvc.getOtherParams($stateParams.cityId)
        .then(function (res) {
            vm.otherParams = res;
            var sunrise = new Date(res.sys.sunrise * 1000);
            vm.sunriseHours = sunrise.getHours();
            vm.sunriseMinutes = sunrise.getMinutes();
            var sunset = new Date(res.sys.sunset * 1000);
            vm.sunsetHours = sunset.getHours();
            vm.sunsetMinutes = sunset.getMinutes();
            console.log('other params');
            console.log(vm.otherParams);
        });
}