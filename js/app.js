var app = angular.module('usersApp', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/edit', {templateUrl: "/partials/edit.html"})
    });

app.controller('usersController', function ($scope) {

    $scope.users = [
        {'name': 'Yuri', 'surname': 'Tymochko'},
        {'name': 'Steve', 'surname': 'Rogers'},
        {'name': 'Tony', 'surname': 'Stark'}
    ];
    
    $scope.addUser = function () {
        $scope.users.push($scope.user);
        $scope.user = null;
    };

    $scope.current = {};

    $scope.editUser = function (user) {
        $scope.current = user;
    };

    $scope.delUser = function () {
        $scope.users.splice($scope.user, 1);
    };

    $scope.saveUser = function () {
        $scope.current = $scope.user;
        $scope.user = null;
    }

});
