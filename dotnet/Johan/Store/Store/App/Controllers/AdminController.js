angular.module('store').controller('AdminController', function ($scope, $http) {
    $scope.title = '';
    $scope.artist = '';
    $scope.price = 0;
    $scope.releaseDate = new Date();
    $scope.addAlbum = function () {
        var obj = {
            Title: $scope.title,
            Artist: $scope.artist,
            Price: $scope.price,
            ReleaseDate: $scope.releaseDate
        };
        console.log(obj);
        $http.post('Create', obj).success(function (data) {
            console.log(data);
        }).error(function (data) {
            console.log(data);
        });
    };
});
//# sourceMappingURL=AdminController.js.map