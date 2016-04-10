(function(module) {
    module.controller('watchCtrl', watchCtrl);
    module.$inject = ['$interval'];
    function watchCtrl($interval) {
    	var vm = this;
    	$interval(function(){
        vm.today = moment().format();
        vm.hr = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('hh');
        vm.min = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('mm');
        vm.sec = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('ss');
        vm.ampm = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('A');
        vm.month = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('MMM');
        vm.date = moment(vm.today, 'YYYY-MM-DDTHH:mm:ss').format('D');
    	},1000)

    }
})(angular.module('motowatch', []));
