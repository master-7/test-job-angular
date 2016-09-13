routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('book', {
			url: '/catalog/:id',
			template: require('./index.html'),
			controller: 'BookController',
			controllerAs: 'vm'
		});
}