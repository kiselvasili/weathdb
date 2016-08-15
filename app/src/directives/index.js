import angular from 'angular';

import addDeleteButtonDirect from './addDeleteButtonDirect';
import chartDirect from './chartDirect';
import errorMessageDirect from './errorMessageDirect';
import geoLocWeathDirect from './geoLocWeathDirect';
import searchOutputDirect from './searchOutputDirect';

export default angular.module('weatherapp.directives', [])
    .directive('addDeleteButtonDirect', addDeleteButtonDirect)
    .directive('chartDirect', chartDirect)
    .directive('errorMessageDirect', errorMessageDirect)
    .directive('geoLocWeathDirect', geoLocWeathDirect)
    .directive('searchOutputDirect', searchOutputDirect)
    .name;