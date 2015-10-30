describe('StoreController', function () {
    beforeEach(function () {
        angular.mock.module('store');
    });
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
                ReleaseDate: new Date(),
                Count: 0
            }];
        $scope.addProduct(0);
        expect($scope.products[0]).toBe($scope.albums[0]);
        expect($scope.products.length).toBe($scope.albums.length);
    });
    it('sortProduct', function () {
        //        var $scope: { albums?: Array<Album>, products?: Array<Album>, addProduct?(i: number) } = {};
        var $scope = {};
        var controller = $controller('StoreController', { $scope: $scope });
        $scope.products = [
            { Title: 'zabc' },
            { Title: 'pbcd' },
            { Title: 'bcd' }
        ];
        $scope.sortProducts();
        expect($scope.products).toEqual([
            { Title: 'bcd' },
            { Title: 'pbcd' },
            { Title: 'zabc' }
        ]);
    });
});
//# sourceMappingURL=StoreControllerTest.js.map