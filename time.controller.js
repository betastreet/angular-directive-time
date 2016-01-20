(function() {
  'use strict';

  angular
    .module('time')
    .controller('TimeController', TimeController);

  TimeController.$inject = [];

  function TimeController() {

    // Controller Variables ========

    var vm = this;

    vm.display = '';

    // Map VM Functions ============

    vm.activate = activate;

    // Initialize ==================

    function activate(time, end){
      time = time.split(':');
      var hour = +time[0];
      var minute = +time[1];
      if(end)
        minute++;
      if(minute >= 60){
        hour++;
        minute = 0;
      }
      if(hour >= 24)
        hour = 0;
      var ampm = hour <= 12 ? 'AM' : 'PM'
      //convert to 12 hour
      if(hour > 12)
        hour -= 12;
      if(!hour)
        hour = 12;
      vm.display = ( hour < 10 ? '0' : '' ) + hour + ':' + ( minute < 10 ? '0' : '' ) + minute + ' ' + ampm;
    }

    // Controller Functions ========

  }

})();
