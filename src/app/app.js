import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import 'angular-material/angular-material.css';

import routing from './config/app.config';

//Import modules
import catalog from './modules/catalog/index';
import book from './modules/book/index';

let modules = [
	catalog,
	book
];

//System dependencies
let systemModules = [
	angularMaterial,
	uiRouter
];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, systemModules.concat(modules))
	.config(routing);

export default MODULE_NAME;