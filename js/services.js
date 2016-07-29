angular.module('yoyoApp')
.factory("yoyoService", function() {
    var yoyos = [];
    return {
      addYoyo: function(yoyo) {
          yoyos.push({name: yoyo.name, price: yoyo.price, difficulty: yoyo.difficulty, rating: yoyo.rating, image: yoyo.imageUrl, edit: false, edited: "", type: yoyo.type, video: yoyo.video})
          return yoyos;
      },
      getYoyos: function() {
          return yoyos;
      }
    }
  });
