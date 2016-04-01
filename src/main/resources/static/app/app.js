(function(angular) {
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  var app=angular.module("myApp", ["ngResource", "ngRoute", "myApp.controllers", "myApp.services"]);
  app.config(function($routeProvider) {
	  $routeProvider
	  .when('/', {
		  templateUrl : 'pages/tipoenvio_lista.html',
		  controller : 'TipoEnvioController'
	  })
	  .when('/alta', {
		  templateUrl : 'pages/tipoenvio_alta.html',
		  controller : 'TipoEnvioController'
	  })
	  .when('/edit/:id', {
		  templateUrl : 'pages/tipoenvio_alta.html',
		  controller : 'TipoEnvioController' 
		  
	  })
	  .otherwise({
		  redirectTo: '/'
	  }
			  );
  });
}(angular));