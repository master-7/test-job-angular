import angular from 'angular';

function checkImage() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('load', function() {
				return true;
			});
			element.bind('error', function() {
				attrs.$set(
					'src',
					'https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data'
				);
			});
		}
	};
}

export default angular.module('directives.checkimage', [])
	.directive('checkimage', checkImage)
	.name;