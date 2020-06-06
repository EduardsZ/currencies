app.controller('myCtrl', function($scope, $http) {
  $scope.firstName= "Hello";
  $scope.lastName= "World";
  $scope.curValue = ""
  $scope.curValuePrice = ""
  $scope.curValueName = ""
  $scope.vis = false
  $scope.selChange = function(val){
    
    var filtered = $scope.resData.filter((k) => k[0] == val)
    $scope.vis = true
    $scope.curValuePrice = filtered[0][1]
    $scope.curValueName = filtered[0][0]
  }
  
  $http.get("https://openexchangerates.org/api/latest.json?app_id=0e99a90e26224cc285f0d8f8cc7cadf2")
    .then(res => $scope.resData = Object.entries(res.data.rates))
  
});
