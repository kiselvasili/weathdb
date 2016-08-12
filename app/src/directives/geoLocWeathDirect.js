/**
 * Created by Vasili Kisel on 8/6/2016.
 */
main
    .directive('geoLocWeathDirect',()=>{
        return{
            restrict:'E',
            templateUrl:'src/templateDirective/geoLocWeathCard.html'
        }
    });