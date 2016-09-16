export default class BookController {
	constructor($state, $stateParams, booksService) {
		booksService.getBooks().get({ id: $stateParams.id }).$promise.then(
			(data) => {
				this.book = data;
			},
			(error) => {
				if(error.status == 404 || error.status == 400) {
					$state.go('404');
				}
			}
		);
	}
}

BookController.$inject = ['$state', '$stateParams', 'booksService'];