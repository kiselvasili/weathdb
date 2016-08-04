/**
 * Created by Vasili Kisel on 5/23/2016.
 */
angular.module('weatherapp')
    .controller('TempCityCtrl', function ($state, $stateParams, TempCitySvc, OtherParamCitySvc) {
        var vm = this;
        TempCitySvc.getFullData($stateParams.cityId)
            .then(function (res) {
                console.log(res);
                vm.listTemp = res.list;
                console.log('hello55');
                console.log(res.list);
                vm.myCity=res.city.name;
                var infToDay = res.list.slice(0, 8);
                // var infToDay = res.list;
                console.log(res.list[1]);
                vm.xew = infToDay.map(x=>(Math.round((x.main.temp - 273)*100)/100));     //x.main.temp - 273
                //vm.yew = infToDay.map(x=>x.rain === undefined ? 0 : x.rain['3h'] === undefined ? 0 : x.rain['3h']);
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
                vm.sunrise = new Date()
                //console.log(vm.xew);
                console.log(vm.yew);
                console.log(vm.xew);


                /*var barData = {
                    labels: vm.label,
                    datasets: [{
                        label: "2000",
                        type: "line",
                        yAxesGroup: "1",
                        fillColor: "rgba(39, 110, 255,0.2)",
                        strokeColor: "rgba(39, 110, 255,1)",
                        pointColor: "rgba(220,220,220,1)",
                        //pointStrokeColor: "#fff",
                        //pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: vm.xew,
                        title:'2000'
                    }, {
                        label: "2010",
                        type: "bar",
                        yAxesGroup: "2",
                        fillColor: "rgba(204, 90, 3,0.2)",
                        strokeColor: "rgba(204, 90, 3,1)",
                        pointColor: "rgba(220,20,220,1)",
                        //pointStrokeColor: "#fff",
                        //pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: vm.yew,
                        title:'2010'
                    }],
                    yAxes: [{
                        name: "1",
                        scalePositionLeft: false,
                        scaleFontColor: "rgba(39, 110, 255,0.8)"
                    }, {
                        name: "2",
                        scalePositionLeft: true,
                        scaleFontColor: "rgba(204, 90, 3,0.8)"
                    }]
                };*/


               /* var income = document.getElementById("bar").getContext("2d");
                new Chart(income).Line(barData);*/




            //    ----------------------------------------------------------


                $(function () {
                    $('#container').highcharts({
                        chart: {
                            zoomType: 'xy'
                        },
                        title: {
                            text: `Temperature and Rainfall in ${vm.myCity}`
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


            //    ----------------------------------------------------------



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

    });