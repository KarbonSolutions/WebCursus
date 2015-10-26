
angular.module('store').controller('AdminController',
    function ($scope, $http) {

        $scope.products = [];

        $scope.addAlbum = function () {
            alert('test')
            //$scope.products.push({
            //    title: albums[i].Title,
            //    artist: albums[i].Artist,
            //    price: albums[i].Price,
            //    releaseDate: new Date(albums[i].ReleaseDate),
            //});

        };

    });
