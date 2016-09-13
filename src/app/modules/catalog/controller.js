export default class CatalogController {
	constructor($state, booksService) {
		this.books = booksService.getBooks();
	}
}

CatalogController.$inject = ['$state', 'booksService'];