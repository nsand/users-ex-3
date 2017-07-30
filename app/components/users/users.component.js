import template from './users.template.html';
import '../../models/users.factory';

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