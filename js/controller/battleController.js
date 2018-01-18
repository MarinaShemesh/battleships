     angular.module('battleshipsApp')
             .controller('battleController', battleController);
     
     battleController.$inject = ['$scope', '$timeout', 'Flash'];
                                  
      function battleController ($scope, $setTimeout, Flash){

         
       const vm = this;
      
       vm.clickCounter = 0;
       vm.counter = 10;
       vm.misses = 0;
       vm.hits = 0;

       vm.playshotSound = playshotSound;
       vm.playmissSound = playmissSound;
       vm.missMessage = missMessage;
       vm.hitMessage = hitMessage;
       vm.endMessage = endMessage;
       vm.ammoCheck = ammoCheck;
  


    vm.show = function(arg){
      vm.divShow = arg;
      vm.playshotSound()
      vm.hitMessage ()
      
       $setTimeout(function() {
         vm.clickCounter++
         vm.hits++
         vm.counter = 10-(vm.clickCounter)
         vm.divShow = false;
         vm.ammoCheck()
        }, 2000);
    }

      vm.Dud = function(){
         vm.playmissSound()
         vm.misses++;
         vm.clickCounter++
         vm.counter = 10-(vm.clickCounter)
         vm.missMessage()
         vm.ammoCheck()
      }
   
      function playshotSound() {
          const audio = new Audio('./sounds/missile.ogg');
          audio.play();
        };

      function playmissSound () {
          const audio = new Audio('./sounds/miss.wav');
          audio.play();
        };

      function missMessage (){
        const message = 'You missed...LOSER!!'
        const id = Flash.create(
                'success', message, 1000, 
                {class: 'custom-class', id: 'custom-id'}, false)
       };

      function hitMessage (){
        const message = 'Bullseye!!!!'
        const id = Flash.create(
                'success', message, 1000, 
                {class: 'custom-class', id: 'custom-id'}, false)
       };

       function endMessage(){
        const message = '<span style="border:2px solid red; padding:8px"><strong>You are out of ammo, dude!!</strong></span>'
        const id = Flash.create(
                'success', message, 10000, 
                {class: 'custom-class', id: 'custom-id'}, false)
       };

       function ammoCheck() {
         if (vm.clickCounter === 10 || vm.counter < 0 ){
          vm.counter = 0
          vm.show = false
          vm.Dud = false
          return endMessage()
                    
         } 
      }


    }//end of battleController

// const target = angular.isDefined('shootAble');
// console.log("target:", target);


 // missile sound from https://freesound.org/people/Isaac200000/sounds/181476/
 //miss sound from https://freesound.org/people/AlienXXX/sounds/139763/