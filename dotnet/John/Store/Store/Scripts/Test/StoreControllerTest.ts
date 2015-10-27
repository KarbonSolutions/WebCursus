describe('StoreController', function () {
    beforeEach(function () {
        angular.mock.module('store');
    });

    var $controller;
    
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('test', function () {
        var $scope: any = {};
        var controller = $controller('StoreController', { $scope: $scope });

        $scope.albums = [{
            Title: 'test',
            Artist: 'test',
            Price: 12.95,
            ReleaseDate: new Date()
        }];

        $scope.AddProduct(0);
        expect($scope.products[0]).toBe($scope.albums[0]);
        expect($scope.products.length).toBe($scope.albums.lenght);
        //expect(true).toBe(true);

    });
});