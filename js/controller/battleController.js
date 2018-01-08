     angular.module('battleshipsApp')
             .controller('battleController', battleController);
     
     battleController.$inject = ['$scope', '$timeout'];
                                  
      function battleController ($scope, $setTimeout){
        const vm = this;

         vm.headings = {
              mheading:"A '100 days of coding' project",
              subheading: "Battleships: HMS Shoot them all"
            };

      vm.showImage = false;

      vm.hitTaken = function(){
        vm.showImage = true;
        $setTimeout(function() {
         vm.showImage = false
        }, 1000);

        
      }
      

        vm.playSound = function(){
          const audio = new Audio('./sounds/beach.wav');
          audio.play();
        };

    
    }