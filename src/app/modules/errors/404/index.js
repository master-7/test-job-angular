import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './route';

import MODULE_NAME from '../../../app';

const BOOKS_MODULE_NAME = `${MODULE_NAME}.error404`;

export default angular.module(BOOKS_MODULE_NAME, [uiRouter])
	.config(routing)
	.name;