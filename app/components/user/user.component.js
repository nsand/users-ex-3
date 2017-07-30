import template from './user.template.html';
import '../../models/users.factory';

class Controller {
	constructor($state, Users) {
		this.$state = $state;
		this.Users = Users;
	}
	$onInit() {
		this.user = this.$state.params.user || this.Users.get(this.$state.params.id);
		if (this.user.$promise) {
			// Fetching a user from the API service
			this.isLoading = true;
			this.user.$promise.catch((err) => {
				this.error = `There was an error fetching the user (${err.status}).`;
			}).finally(() => {
				this.isLoading = false;
			});
		}
	}
}
angular.module('users').component('user', {
	template,
	controller: ['$state', 'Users', Controller],
});