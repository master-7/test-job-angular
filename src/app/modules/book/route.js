routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('book', {
			resolve: {
				booksService: "booksService",
				books: (booksService) => {
					return booksService.getBooks().$promise;
				}
			},
			url: '/catalog/:id',
			template: require('./index.html'),
			controller: 'BookController',
			controllerAs: 'vm'
		});
}