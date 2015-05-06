angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicActionSheet, $timeout) {
	$scope.show = function(){
		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{ text : '<b>Share</b> This'},
				{ text : 'Move'}
			],
			destructiveText : 'Delete',
			titleText : 'Modify your settings',
			cancelText : 'Cancel',
			cancel : function (){
				//todo
			},
			buttonClicked : function(index){
				console.log(index+'xxxx');
				return true;
			}
		});
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MoreCtrl', function($scope){})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
