routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('catalog', {
			url: '/',
			template: require('./index.html'),
			controller: 'CatalogController',
			controllerAs: 'vm'
		});
}