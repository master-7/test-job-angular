import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './route';
import CatalogController from './controller';

import BooksService from '../../services/books.service';

import checkImage from '../../directives/checkImage.directive';

import MODULE_NAME from '../../app';

const BOOKS_MODULE_NAME = `${MODULE_NAME}.catalog`;

export default angular.module(BOOKS_MODULE_NAME, [uiRouter, BooksService, checkImage])
	.config(routing)
	.controller('CatalogController', CatalogController)
	.name;