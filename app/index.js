import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularLoadingBar from 'angular-loading-bar';

import 'font-awesome/css/font-awesome.css';
import 'angular-loading-bar/build/loading-bar.min.css';

import './styles/styles.css';
import './styles/buttons.css';
import './styles/header.css';
import './styles/common.css';
import './styles/placeholders.css';
import './styles/content-item.css';
import './styles/media.css';

import appPages from './src/pages';
import appDirectives from './src/directives';

import app from './src/app';
import appRoutes from './src/app.routes';

import AuthService from './src/services/AuthService.js';

import AppCtrl from './src/controllers/AppCtrl';
import SearchCityCtrl from './src/pages/main/controllers/SearchCityCtrl';


export default angular.module('weatherapp', [uiRouter, angularLoadingBar, appPages, appDirectives])
    .run(app)
    .config(appRoutes)
    .constant('API_ENDPOINT', {
        url: '//warm-waters-45108.herokuapp.com/api' // '//localhost:5000/api'
    })
    .factory('AuthService', AuthService)
    .controller('AppCtrl', AppCtrl)
    .controller('SearchCityCtrl', SearchCityCtrl)
    //.directive('addDeleteButtonDirect', addDeleteButtonDirect)
    .name;
