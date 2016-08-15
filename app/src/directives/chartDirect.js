/**
 * Created by Vasili Kisel on 8/8/2016.
 */
export default ()=> {
    return {
        restrict: 'E',
        scope: {obj: '='},

        link: (scope, element, attribute)=> {
            console.log(scope);
            scope.$watch('obj', (newVal)=> {
                if (newVal) {
                    console.log(scope.obj);
                    var infToDay = scope.obj.list.slice(0, 8);

                    var xew = infToDay.map(x=>(Math.round((x.main.temp - 273) * 100) / 100));
                    var yew = infToDay.map((x)=> {
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
                    var label = infToDay.map(x=>`${(new Date(x.dt * 1000)).getHours()}:00`);

                    Highcharts.chart(element[0], {
                            chart: {
                                zoomType: 'xy'
                            },
                            title: {
                                text: ``
                            },

                            xAxis: [{
                                categories: label,
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
                                data: yew,
                                tooltip: {
                                    valueSuffix: ' mm'
                                }

                            }, {
                                name: 'Temperature',
                                type: 'spline',
                                data: xew,
                                tooltip: {
                                    valueSuffix: '°C'
                                }
                            }],

                            exporting: {enabled: false},

                            credits: {enabled: false}

                        });
                    //});
                }
            });
        }
    }
}