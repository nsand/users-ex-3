import template from './user.template.html';
import '../../models/users.factory';

class Controller {
	constructor($state, Users) {
		this.$state = $state;
		this.Users = Users;
	}
	$onInit() {
		if (!this.$state.params.user && !this.$state.params.id) {
			this.$state.go('users');
		}
		else {
			// Check if we've been passed a user (likely through clicking a row)
			this.user = this.$state.params.user || this.Users.get(this.$state.params.id);

			if (this.user.$promise) {
				// The promise is an indicator that we have to fetch the user
				this.isLoading = true;
				this.user.$promise.catch((err) => {
					this.error = `There was an error fetching the user (${err.status}).`;
				}).finally(() => {
					this.isLoading = false;
				});
			}
		}
	}
}

Controller.$inject = ['$state', 'Users'];

angular.module('users').component('rhUser', {
	template,
	controller: Controller,
});