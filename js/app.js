   (function () {
     'use strict';

      angular.module('battleshipsApp', ['ngFlash'])
        
       .config(['FlashProvider',
        function(FlashProvider) {
        FlashProvider.setTimeout(5000);

        }])
     
   })();

