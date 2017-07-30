import template from './users.template.html';
import '../../models/users.factory';

/**
 * The component controller for rh-users.
 * Fetches all of the users and then renders it as a list.
 * If a specific user row is selected, the details for that user will be shown
 */
class Controller {
	constructor($state, Users) {
		this.$state = $state;
		this.Users = Users;
	}
	$onInit() {
		this.isLoading = true;
		// Whenever the component loads, we have to fetch all of the users
		this.users = this.Users.getAll();
		this.users.$promise.catch((err) => {
			this.error = `There was a problem fetching all of the users (${error.status}).`;
		}).finally(() => {
			this.isLoading = false;
		});
	}

	/**
	 * Update the state with the selected user
	 * @param {User} user the user to get the details of
	 */
	goToUser(user) {
		this.$state.go('user', { id: user.id, user });
	}
}

Controller.$inject = ['$state', 'Users'];

angular.module('users').component('rhUsers', {
	template,
	controller: Controller,
});