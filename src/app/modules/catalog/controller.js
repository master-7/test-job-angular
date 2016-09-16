export default class CatalogController {
	constructor($state, booksService) {
		booksService.getBooks().query().$promise.then(
			(data) => {
				this.books = data;
			},
			(error) => {
				if(error.status == 404) {
					$state.go('404');
				}
			}
		);
	}
}

CatalogController.$inject = ['$state', 'booksService'];