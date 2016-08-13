/**
 * Created by ltischuk on 8/4/16.
 */
(function() {
  'use strict';
  
  angular
    .module('theWebDuoSitePro')
    .directive('sideNavBar', sideNavBar);
  
  /** @ngInject */
  function sideNavBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sideNavBar/sideNavBar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
    
    return directive;
    
    /** @ngInject */
    function NavbarController($scope,$interval) {
      var vm = this;
      var idx = 0;
      var navItemsToAdd=[
        {
          name: 'About',
          active: false
        },
        {
          name: 'Contact',
          active: false
        }
      ]
      
      vm.navItems = [{
        name: 'Home',
        active: true
      }];
      
      
      function activate(){
  
        $interval(addNavItems, 1000);
        
      }
      
      function addNavItems(){
  
        if(idx < navItemsToAdd.length){
          
            vm.navItems.push(navItemsToAdd[idx]);
            idx++;
          
        }else{
          cancelInterval();
        }
        
      }
      
      function cancelInterval(){
  
        $interval.cancel(addNavItems);
        
      }
      
      activate();
      
    }
  }
  
})();
