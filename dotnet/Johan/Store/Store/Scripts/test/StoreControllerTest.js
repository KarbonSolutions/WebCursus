describe('StoreController', function () {
    beforeEach(angular.mock.module('store'));
    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    it('test', function () {
        var $scope = {};
        var controller = $controller('StoreController', { $scope: $scope });
        $scope.albums = [{
                Title: 'test',
                Artist: 'test',
                Price: 12.95,
                ReleaseDate: new Date()
            }];
        $scope.addProduct(0);
        expect($scope.products[0]).toBe($scope.albums[0]);
        expect($scope.products.length).toBe($scope.albums.length);
    });
    it('sortProducts', function () {
        var $scope = {};
        var controller = $controller('StoreController', { $scope: $scope });
        $scope.products = [
            {
                Title: 'fgsdasd'
            },
            {
                Title: 'asd'
            },
            {
                Title: 'dfsdf'
            }
        ];
        $scope.sortProducts();
        expect($scope.products).toEqual([
            {
                Title: 'asd'
            },
            {
                Title: 'dfsdf'
            },
            {
                Title: 'fgsdasd'
            }
        ]);
    });
});
//# sourceMappingURL=StoreControllerTest.js.map