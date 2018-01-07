     angular.module('battleshipsApp')
             .controller('battleController', battleController);
     
     battleController.$inject = ['$scope'];
                                  
      function battleController ($scope){
        const vm = this;

         vm.headings = {
              mheading:"A '100 days of coding' project",
              subheading: "Battleships: HMS Shoot them all"
            };

        vm.playSound = function(){
          const audio = new Audio('./sounds/beach.wav');
          audio.play();
        };

        vm.showImage = function(){
          vm.show = true;
        }
      }