/**
 * Created by Vasili Kisel on 5/4/2016.
 */
angular.module('weatherapp')
    .controller('SearchCityCtrl',
        function ($q, $scope, $state,SearchCityForCoordSvc, SearchCitySvc,$rootScope,addCitiesSvc,deleteCitiesSvc,AuthService,getCitiesCollectionSvc,TempCitySvc) {
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
            navigator.geolocation.getCurrentPosition((a) => {
                vm.lat= a.coords.latitude;
                vm.lon=a.coords.longitude;
                SearchCityForCoordSvc.getCeoLocCity(vm.lat,vm.lon)
                    .then(function(res){
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
                        vm.cityId=res.id;
                        console.log(vm.cityId);
                        TempCitySvc.getFullData(vm.cityId)
                            .then(function(res){
                                vm.listTemp = res.list;
                                var infToDay = res.list.slice(0, 8);
                                console.log(infToDay);
                                vm.xew = infToDay.map(x=>(Math.round((x.main.temp - 273)*100)/100));
                                vm.yew = infToDay.map(function (x) {
                                    if (x.rain === undefined) {
                                        return 0;
                                    }
                                    else {
                                        if (x.rain['3h'] === undefined) {
                                            return 0;
                                        }
                                        else {
                                            return x.rain['3h'];
                                        }
                                    }
                                });
                                vm.label = infToDay.map(x=>`${(new Date(x.dt * 1000)).getHours()}:00`);


                                $(function () {
                                    $('#containerDiogram').highcharts({
                                        chart: {
                                            zoomType: 'xy'
                                        },
                                        title: {
                                            text: ``
                                        },
                                        /* subtitle: {
                                         text: 'Source: WorldClimate.com'
                                         },*/
                                        xAxis: [{
                                            categories: vm.label,
                                            crosshair: true
                                        }],
                                        yAxis: [{ // Primary yAxis
                                            labels: {
                                                format: '{value}°C',
                                                style: {
                                                    color: Highcharts.getOptions().colors[1]
                                                }
                                            },
                                            title: {
                                                text: 'Temperature',
                                                style: {
                                                    color: Highcharts.getOptions().colors[1]
                                                }
                                            }
                                        }, { // Secondary yAxis
                                            title: {
                                                text: 'Rainfall',
                                                style: {
                                                    color: Highcharts.getOptions().colors[0]
                                                }
                                            },
                                            labels: {
                                                format: '{value} mm',
                                                style: {
                                                    color: Highcharts.getOptions().colors[0]
                                                }
                                            },
                                            opposite: true
                                        }],
                                        tooltip: {
                                            shared: true
                                        },
                                        legend: {
                                            layout: 'vertical',
                                            align: 'left',
                                            x: 120,
                                            verticalAlign: 'top',
                                            y: 100,
                                            floating: true,
                                            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                                        },
                                        series: [{
                                            name: 'Rainfall',
                                            type: 'column',
                                            yAxis: 1,
                                            data: vm.yew,
                                            tooltip: {
                                                valueSuffix: ' mm'
                                            }

                                        }, {
                                            name: 'Temperature',
                                            type: 'spline',
                                            data: vm.xew,
                                            tooltip: {
                                                valueSuffix: '°C'
                                            }
                                        }],

                                        exporting: { enabled: false },

                                        credits: { enabled: false }

                                    });
                                });


                            })
                    })
            });




        }
    );