(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['$scope', 'CRUDUtils', 'country.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
                        this.masPoblado = function()
                        {
                            if($scope.records.length>0)
                            {
                            var arreglo = $scope.records;
                            var resp = $scope.records[0];
                            for( i = 0 ; i<arreglo.length;i++)
                            {
                               if(arreglo[i].population>resp.population)
                               {
                                   resp = arreglo[i];
                               }
                            } 
                            alert ("El pais mas poblado es "+ resp.name +" con "+ resp.population +" personas.");
                            }
                            else
                            {
                                alert("No hay paises en la registrados");
                            }
                           
                        }
		}]);
})();