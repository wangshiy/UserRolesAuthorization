var app = angular.module('myApp', []), permissionList;

app.run(function(permissions) {  
  permissions.setPermissions(permissionList);
});

angular.element(document).ready(function() {  
  $.get('/wines', function(data) {
    permissionList = data;
    console.log(permissionList);
    angular.bootstrap(document, ['myApp']);
  });
});
