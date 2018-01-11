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
      vm.playSound()

       $setTimeout(function() {
         vm.clickCounter++
         vm.hits++
         vm.counter = 64-(vm.clickCounter)
         vm.divShow = false;
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


    }//end of battleController

// const target = angular.isDefined('shootAble');
// console.log("target:", target);


 // missile sound from https://freesound.org/people/Isaac200000/sounds/181476/