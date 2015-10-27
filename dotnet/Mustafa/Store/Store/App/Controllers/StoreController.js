var albums = [];
angular.module('store').controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.addProduct = function (i) {
        $scope.products.push(albums[i]);
    };
});
//# sourceMappingURL=StoreController.js.map