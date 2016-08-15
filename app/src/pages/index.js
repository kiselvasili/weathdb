import angular from 'angular';

import SearchCityForCoordSvc from './main/services/SearchCityForCoordSvc';
import SearchCitySvc from './main/services/SearchCitySvc';
import AddCitiesSvc from './main/services/addCitiesSvc';
import DeleteCitiesSvc from './main/services/deleteCitiesSvc';
import GetCitiesCollectionSvc from './main/services/getCitiesCollectionSvc';
import myCitiesDataSvc from './myCities/services/myCitiesDataSvc';
import OtherParamCitySvc from './temptocity/services/OtherParamCitySvc';
import TempCitySvc from './temptocity/services/TempCitySvc';

import loginCtrl from './login/controllers/loginCtrl';
import myCitiesCtrl from './myCities/controllers/myCitiesCtrl';
import registerCtrl from './register/controllers/registerCtrl';
import TempCityCtrl from './temptocity/controllers/TempCityCtrl';


export default angular.module('weatherapp.pages', [])
    .factory('SearchCityForCoordSvc', SearchCityForCoordSvc)
    .factory('SearchCitySvc', SearchCitySvc)
    .factory('AddCitiesSvc', AddCitiesSvc)
    .factory('DeleteCitiesSvc', DeleteCitiesSvc)
    .factory('GetCitiesCollectionSvc', GetCitiesCollectionSvc)
    .factory('myCitiesDataSvc', myCitiesDataSvc)
    .factory('OtherParamCitySvc', OtherParamCitySvc)
    .factory('TempCitySvc', TempCitySvc)

    .controller('loginCtrl', loginCtrl)
    .controller('myCitiesCtrl', myCitiesCtrl)
    .controller('registerCtrl', registerCtrl)
    .controller('TempCityCtrl', TempCityCtrl)

    .name;