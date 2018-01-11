     angular.module('battleshipsApp')
             .controller('battleController', battleController);
     
     battleController.$inject = ['$scope', '$timeout'];
                                  
      function battleController ($scope, $setTimeout){

         
       const vm = this;
      
       vm.clickCounter = 0;
       vm.counter = 64;
       vm.misses = 0;
       vm.hits = 0;

       const target = angular.isDefined('shootAble');
       console.log("target:", target);

         vm.headings = {
              mheading:"A '100 days of coding' project",
              subheading: "Battleships: HMS Shoot them all"
            };

  
      vm.hitTaken = function(){
        vm.showImage = true;
        vm.playSound()
        |
        $setTimeout(function() {
         vm.clickCounter++
         vm.hits++
         vm.counter = 64-(vm.clickCounter)
         vm.showImage = false
        }, 2000);

      }

      vm.Dud = function(){
         vm.misses++;
         vm.clickCounter++
         vm.counter = 64-(vm.clickCounter)

      }
      

       vm.playSound = function(){
          const audio = new Audio('./sounds/missile.ogg');
          audio.play();
        };

        vm.countHits = function(){
          vm.hits++;
        }

    
    }

    // missile sound from https://freesound.org/people/Isaac200000/sounds/181476/