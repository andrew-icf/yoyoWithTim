angular
    .module("yoyoApp")
    .controller("MainController",  MainController)

    function MainController($scope){
        $scope.view = {};
        $scope.view.yoyos = yoyoData;
        $scope.toggleVideo = function() {
            this.yoyo.videoToggle = !this.yoyo.videoToggle;
        }
    }
