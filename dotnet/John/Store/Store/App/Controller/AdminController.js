(function () {
    angular
        .module('store')
        .controller('AdminController', function ($scope, $http) {
        $scope.products = [];
        $scope.title = "";
        $scope.artist = "";
        $scope.price = "";
        $scope.releaseDate = "";
        $scope.addAlbum = function () {
            alert('test');
            $http.post('Admin/Create', {
                Title: $scope.title,
                Artist: $scope.artist,
                Price: $scope.price,
                ReleaseDate: $scope.releaseDate
            }).success(function (data) {
                console.log(data);
            }).error(function (data) {
                console.log(data);
            });
            //$scope.products.push({
            //    title: albums[i].Title,
            //    artist: albums[i].Artist,
            //    price: albums[i].Price,
            //    releaseDate: new Date(albums[i].ReleaseDate),
            //});
        };
    });
})();
