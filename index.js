var app = angular.module('myApp', []), permissionList;

app.run(function(permissions) {  
  permissions.setPermissions(permissionList);
});

angular.element(document).ready(function() {  
  $.get('/api/UserPermission', function(data) {
    permissionList = data;
    angular.bootstrap(document, ['myApp']);
  });
});
