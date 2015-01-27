'use strict';
var app = angular.module('weatherApp');

app.controller('weatherCtrl', function($scope, weather) {
	$scope.weather = weather;
});