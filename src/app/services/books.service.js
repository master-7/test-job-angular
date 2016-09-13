import angular from 'angular';

class BooksService {
	constructor($resource) {
		this.booksRequest = $resource('https://ds.aggregion.com/api/public/catalog/:id',
			{
				id: '@id'
			}
		);
	}

	getBooks() {
		return this.booksRequest.query();
	}

	getBook(id) {
		return this.booksRequest.get({ id: id });
	}
}

BooksService.$inject = ['$resource'];

export default angular.module('services.books-mock', [])
	.service('booksService', BooksService)
	.name;