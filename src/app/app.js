import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import 'angular-material/angular-material.css';
import '../style/app.css';

import routing from './config/app.config';

//Import modules
import catalog from './modules/catalog';
import book from './modules/book';

import error404 from './modules/errors/404';

let modules = [
	//Modules
	catalog,
	book,
	error404
];

//System dependencies
let systemModules = [
	angularMaterial,
	uiRouter,
	ngResource
];

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, systemModules.concat(modules))
	.config(routing);

export default MODULE_NAME;