export default class CatalogController {
	constructor($stateParams) {
		console.log($stateParams.id)
		this.name = 'World';
	}

	changeName() {
		this.name = 'angular-tips';
	}
}