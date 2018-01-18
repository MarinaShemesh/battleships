     angular.module('battleshipsApp')
             .controller('battleController', battleController);
     
     battleController.$inject = ['$scope', '$timeout'];
                                  
      function battleController ($scope, $setTimeout){

         
       const vm = this;
      
       vm.clickCounter = 0;
       vm.counter = 64;
       vm.misses = 0;
       vm.hits = 0;

    vm.show = function(arg){
      vm.divShow = arg;
      vm.playShot()

       $setTimeout(function() {
         vm.clickCounter++
         vm.hits++
         vm.counter = 64-(vm.clickCounter)
         vm.divShow = false;
        }, 2000);
    }

      vm.Dud = function(){
         vm.playMiss()
         vm.misses++;
         vm.clickCounter++
         vm.counter = 64-(vm.clickCounter)
      }
   
      vm.playShot = function(){
          const audio = new Audio('./sounds/missile.ogg');
          audio.play();
        };

      vm.playMiss = function(){
          const audio = new Audio('./sounds/miss.wav');
          audio.play();
        };


    }//end of battleController

// const target = angular.isDefined('shootAble');
// console.log("target:", target);


 // missile sound from https://freesound.org/people/Isaac200000/sounds/181476/
 //miss sound from https://freesound.org/people/AlienXXX/sounds/139763/