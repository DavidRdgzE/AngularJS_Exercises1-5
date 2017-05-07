angular.module('app', []).


  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/libros', {
		  templateUrl: 'lista_libros.html',
		  controller: LibrosListController
		  }).
	  
	  //mediante dos puntos (:) definimos un parámetro
      when('/libro/:libroId', {
		  templateUrl: 'libro.html',
		  controller: LibroDetailController
		  }).
	 
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/libros'});

}]);