var Album = (function () {
    function Album() {
    }
    return Album;
})();
var albums = [];
angular.module('store').controller('StoreController', function ($scope, $http) {
    $scope.products = [];
    $scope.addProduct = function (i) {
        var album = albums[i];
        var count = 1;
        for (var p = 0; p < $scope.products.length; ++p) {
            var product = $scope.products[p];
            if (product === album) {
                count = product.Count + 1;
                break;
            }
        }
        album.Count = count;
        // Deze push zorgt ervoor dat de productlist gekoppeld wordt aan de album list (referentie)
        // Aanpassing van een object in de ene lijst zorgt dus automatisch voor een aanpassing in het object in de andere lijst.
        // Allleen als count= dan bestaat er nog geen object in de products, dan moet die worden toegevoegd met push 
        if (count === 1) {
            $scope.products.push(album);
        }
    };
    $scope.totalPrice = function () {
        var totalPrice = 0;
        for (var i = 0; i < $scope.products.length; i++) {
            totalPrice += $scope.products[i].Price * $scope.products[i].Count;
        }
        return totalPrice;
    };
});
//# sourceMappingURL=StoreController.js.map