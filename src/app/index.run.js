(function() {
  'use strict';

  angular
    .module('theWebDuoSitePro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
