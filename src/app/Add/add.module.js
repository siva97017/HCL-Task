import angular from "angular";
import template from './add.template.html';
import controller from './add.ctrl';

var module = angular.module('app.add', []);

routeConfig.$inject = ["$stateProvider"];

function routeConfig($stateProvider) {
    $stateProvider.state({
        name: 'app.add',
        url: '/add',
        template,
        controller,
        controllerAs: 'addCtrl'
    });
}

module.config(routeConfig);

export default module;
