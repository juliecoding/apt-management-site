angular.module('app')
    .controller('MaintenanceRequest', function($scope, $state, MaintenanceRequestService, user) {
        $scope.user = user;
        $scope.request = {
            issue: '',
            contact: {
                userid: $scope.user._id,
                name: $scope.user.firstName + ' ' + $scope.user.lastName,
                email: $scope.user.email,
                phone: $scope.user.phone
            },
            propertyName: $scope.user.propertyName,
            propertyid: $scope.user.propertyid,
            date: new Date(),
            completionDate: '',
            status: 'pending'
        }

        $scope.submit = function() {
            MaintenanceRequestService.createRequest($scope.request)
                .then(function(res) {
                    $state.go('resident');
                }, function(err) {
                    console.log(err);
                })
        }
    });
