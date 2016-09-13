export default class BookController {
	constructor($stateParams, booksService) {
		this.book = booksService.getBook($stateParams.id);
	}
}

BookController.$inject = ['$stateParams', 'booksService'];