angular
    .module("yoyoApp")
    .controller("MainController",  MainController)

    function MainController($scope, $http){
        $scope.view = {};
        $http.get('https://cors-anywhere.herokuapp.com/https://afternoon-atoll-18846.herokuapp.com/yoyo').then(function(data) {
            console.log(data.data)
             $scope.view.yoyos = data.data;
        })
        $scope.toggleVideo = function() {
            this.yoyo.videoToggle = !this.yoyo.videoToggle;
        }
    }
