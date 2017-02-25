angular.module('index.landPad', []);
angular.module('index.landPad').controller('landPadController', landPadController);
landPadController.$inject = ['$location', 'masterFactory', '$filter', '$uibModal', '$scope', '$route', '$rootScope'];
function landPadController ($location, masterFactory, $filter, $uibModal, $scope, $route, $rootScope) {
    var lp = this;
    lp.message = 'This is the header of the page.';
}