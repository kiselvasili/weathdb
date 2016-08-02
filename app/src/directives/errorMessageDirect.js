/**
 * Created by Vasili Kisel on 8/2/2016.
 */
main
    .directive('errorMessageDirect',function(){
        return{
            restrict:'E',
            templateUrl: 'src/templateDirective/errorMsgCard.html'
        }
    });