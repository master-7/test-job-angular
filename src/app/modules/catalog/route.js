routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('catalog', {
			resolve: {
				booksService: "booksService",
				books: (booksService) => {
					return booksService.getBooks().$promise;
				}
			},
			url: '/',
			template: require('./index.html'),
			controller: 'CatalogController',
			controllerAs: 'vm'
		});
}