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
        expect(true).toBe(true);
    });
});
//# sourceMappingURL=StoreControllerTest.js.map