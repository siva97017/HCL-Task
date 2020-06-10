import angular from "angular";
import template from './detail.template.html';
import controller from './detail.ctrl';

var module = angular.module('app.detail', []);

routeConfig.$inject = ["$stateProvider"];

function routeConfig($stateProvider) {
    $stateProvider.state({
        name: 'app.detail',
        url: '/detail/:id',
        template,
        controller,
        controllerAs: 'detailCtrl'
    });
    $stateProvider.state({
        name: 'app.detail.id',
        url: '/:id',
        template,
        controller,
        controllerAs: 'detailCtrl'
    });
}

module.config(routeConfig);

export default module;
