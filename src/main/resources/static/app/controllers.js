(function(angular) {
  var AppController = function($scope, Item) {
    Item.query(function(response) {
      $scope.items = response ? response : [];
    });
    
    $scope.addItem = function(description) {
      new Item({
        description: description,
        checked: false
      }).$save(function(item) {
        $scope.items.push(item);
      });
      $scope.newItem = "";
    };
    
    $scope.updateItem = function(item) {
      item.$update();
    };
    
    $scope.deleteItem = function(item) {
      item.$remove(function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
      });
    };
    
  };
  
  AppController.$inject = ['$scope', 'Item'];
  angular.module("myApp.controllers").controller("AppController", AppController);
  

  var LeadController = function($scope, Lead) {
	    
	    $scope.valor = "hola";
	    Lead.query(function(response) {
	        $scope.leads = response ? response : [];
	      });
	      
	      $scope.addLead = function(name, company) {
	        new Lead({
	          name: name,
	          company: company
	        }).$save(function(lead) {
	          $scope.leads.push(lead);
	        });
	      };
	      
	      $scope.updateLead = function(lead) {
	        lead.$update();
	      };
	      
	      $scope.deleteLead = function(lead) {
	        lead.$remove(function() {
	          $scope.leads.splice($scope.leads.indexOf(lead), 1);
	        });
	      };
	    
	    
	  };

	  LeadController.$inject = ['$scope','Lead'];
  angular.module("myApp.controllers").controller("LeadController", LeadController);

 
  
  var TipoEnvioController = function ($scope, TipoEnvio, $location, $routeParams) {
	  
	  $scope.tipoEnvioTemporal = new TipoEnvio({});
	  if ($routeParams.id) {
		  $scope.parametro=$routeParams.id;
	  }
	  
	  TipoEnvio.query(function(response) {
		  $scope.tiposEnvio = response ? response : [];
		  if ($scope.parametro) {
			  console.log($routeParams.id);
			  for (var i in $scope.tiposEnvio) {
				  if ($scope.tiposEnvio[i].id == $routeParams.id) {
					  console.log ("encontrado");
					  $scope.tipoEnvioTemporal = $scope.tiposEnvio[i]; 
					  break;
				  }
				  console.log("iterando "+$scope.tiposEnvio[i].id+" "+$routeParams.id);
			  }
			  
		  } 
	  });


	  // Habra que borrar esto
	  $scope.addTipoEnvioBorrame = function (name, duracionViaje, medioTransporte, costeTonelada, seguroIncluido) {
		  new TipoEnvio({
			  name: name,
			  duracionViaje: duracionViaje,
			  medioTransporte: medioTransporte,
			  costeTonelada: costeTonelada,
			  seguroIncluido: seguroIncluido
		  }).$save(function(tipoEnvio) {
			  $scope.tiposEnvio.push(tipoEnvio);
			  $scope.go("/");
		  });
	  };
	  

	  $scope.addTipoEnvio = function() {
			if (! $scope.parametro) {
				$scope.tipoEnvioTemporal.$save(function(tipoEnvio) {
					$scope.tiposEnvio.push(tipoEnvio);
					$scope.go("/");
				});
			} else {
				$scope.updateTiposEnvio($scope.tipoEnvioTemporal);
				$scope.go("/");
			}
		};
	  
	  
	  
	  $scope.updateTiposEnvio = function (tipoEnvio) {
		  tipoEnvio.$update();
	  };
	  
	  $scope.deleteTipoEnvio = function (tipoEnvio) {
		  tipoEnvio.$remove(function(){
			  $scope.tiposEnvio.splice($scope.tiposEnvio.indexOf(tipoEnvio),1);
		  });
	  };
	  
	  $scope.go = function (path) {
		$location.path(path) ;  
	  };
  };
  
  TipoEnvioController.$inject = ['$scope', 'TipoEnvio','$location','$routeParams'];
  
  angular.module("myApp.controllers").controller("TipoEnvioController",TipoEnvioController);
  
}(angular));