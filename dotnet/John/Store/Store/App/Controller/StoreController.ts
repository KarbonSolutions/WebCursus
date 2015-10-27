var albums = [];

angular.module('store').controller('StoreController',
    function ($scope, $http) {

        $scope.products = [];

        $scope.addProduct = function (i) {
            $scope.products.push({
                title: albums[i].Title,
                artist: albums[i].Artist,
                price: albums[i].Price,
                releaseDate: new Date(albums[i].ReleaseDate),
            });

        };

        $scope.totalPrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < $scope.products.length; i++) {
                totalPrice += $scope.products[i].price;
            }
            return totalPrice;
        };

    });
