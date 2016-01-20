(function() {
'use strict';

angular
    .module('time', ['rtcb'])
    .directive('time', time);

function time(){
	return {
		restrict: 'A',
		scope:{
      time:'@time'
    },
		link:function(scope, element, attrs, TimeController){

      var time = attrs.time;
      var end = ( typeof attrs.end != 'undefined' ) ? attrs.end : false;
			TimeController.activate(time, end);

			attrs.$observe('phoneNumber',function(value){
        time = value;
        TimeController.activate(time, end);
			});

		},
		template: '{{ vm.display }}',
		controller: 'TimeController',
		controllerAs: 'vm'
	};
};

})();
