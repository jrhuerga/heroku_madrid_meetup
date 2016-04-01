(function(angular) {
  var ItemFactory = function($resource) {
    return $resource('/items/:id', {
      id: '@id'
    }, {
      update: {
        method: "PUT"
      },
      remove: {
        method: "DELETE"
      }
    });
  };
  
  ItemFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Item", ItemFactory);

  var LeadFactory = function($resource) {
	    return $resource('/leads/:id', {
	      id: '@id'
	    }, {
	      update: {
	        method: "PUT"
	      },
	      remove: {
	        method: "DELETE"
	      }
	    });
	  };
  LeadFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("Lead", LeadFactory);

  var TipoEnvioFactory = function ($resource) {
	  return $resource('/tipoenvio/:id',{
		  id: '@id'
	  }, {
		  update: {
			  method: "PUT"
		  },
		  remove: {
			  method: "DELETE"
		  }
	  });
  };
  
  TipoEnvioFactory.$inject = ['$resource'];
  angular.module("myApp.services").factory("TipoEnvio",TipoEnvioFactory);
  
}(angular));