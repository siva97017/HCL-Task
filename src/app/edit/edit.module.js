import angular from "angular";
import template from './edit.template.html';
import controller from './edit.ctrl';

var module = angular.module('app.edit', []);

routeConfig.$inject = ["$stateProvider"];

function routeConfig($stateProvider) {
    $stateProvider.state({
        name: 'app.edit',
        url: '/edit/:id',
        template,
        controller,
        controllerAs: 'editCtrl'
    });
}

module.config(routeConfig);

export default module;
