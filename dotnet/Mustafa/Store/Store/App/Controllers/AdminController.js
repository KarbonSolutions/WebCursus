angular.module('store').controller('AdminController', function ($scope, $http) {
    $scope.addAlbum = function () {
        $http.post('Create', {
            Title: $scope.title,
            Artist: $scope.artist,
            Price: $scope.price,
            ReleaseDate: $scope.releaseDate
        }).success(function (data) {
            console.log(data);
        }).error(function (data) {
            console.log('Error : ' + data);
        });
    };
});
//# sourceMappingURL=AdminController.js.map