var Album = (function () {
    function Album() {
    }
    return Album;
})();
;
angular
    .module('store')
    .controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.albums = [];
    $http.post('/Home/ListAlbums', {}).success(function (data) {
        //console.log(data);
        $scope.albums = data;
    });
    $scope.addProduct = function (i) {
        var album = $scope.albums[i];
        var count = 1;
        for (var p = 0; p < $scope.products.length; ++p) {
            var product = $scope.products[p];
            if (product === album) {
                count = product.Count + 1;
                break;
            }
        }
        ;
        if (count === 1) {
            $scope.products.push(album);
        }
        ;
        album.Count = count;
    };
    $scope.sortProducts = function () {
        var products = $scope.products;
        products = products.sort(function (a, b) {
            return a.Title.localeCompare(b.Title);
        });
    };
});
//# sourceMappingURL=StoreController.js.map