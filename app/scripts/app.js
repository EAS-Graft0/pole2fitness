'use strict';

/**
 * @ngdoc overview
 * @name pole2fitnessApp
 * @description
 * # pole2fitnessApp
 *
 * Main module of the application.
 */
angular
  .module('pole2fitnessApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/classes.html',
        controller: 'ClassesCtrl',
        controllerAs: 'classes'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/classes', {
        templateUrl: 'views/classes.html',
        controller: 'ClassesCtrl',
        controllerAs: 'classes'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'FaqsCtrl',
        controllerAs: 'faqs'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
        controllerAs: 'location'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/classes'
      });
  });
