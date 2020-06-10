/*
 * app.routes.js
 * Router configuration of app.
 * In this file we're importing controller submodules.
 */
import angular from 'angular';
import router from 'angular-ui-router';

import rootTemplate from 'app.template.html';

import HomeModule from 'home/home.module';
import DetailModule from 'detail/detail.module';
import AddModule from 'add/add.module';
import EditModule from 'edit/edit.module';
var Routes = angular.module('app.routes',
    [router, HomeModule.name, DetailModule.name, AddModule.name, EditModule.name]);

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state({
        name: 'app',
        abstract: true,
        template: rootTemplate
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })

    $urlRouterProvider.otherwise('home');
}

Routes.config(routeConfig);

export default Routes;
