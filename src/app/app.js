import angular from 'angular';
import angularMaterial from 'angular-material';

import 'angular-material/angular-material.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  angularMaterial
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;