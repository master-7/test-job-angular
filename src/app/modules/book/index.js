import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './route';
import BookController from './controller';

import MODULE_NAME from '../../app';

const BOOKS_MODULE_NAME = `${MODULE_NAME}.book`;

export default angular.module(BOOKS_MODULE_NAME, [uiRouter])
	.config(routing)
	.controller('BookController', BookController)
	.name;