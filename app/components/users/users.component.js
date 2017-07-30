import template from './users.template.html';
import '../../models/users.factory';

class Controller {
	constructor($state, Users) {
		this.$state = $state;
		this.Users = Users;
	}
	$onInit() {
		this.isLoading = true;
		this.users = this.Users.getAll();
		this.users.$promise.catch((err) => {
			this.error = `There was a problem fetching all of the users (${error.status}).`;
		}).finally(() => {
			this.isLoading = false;
		});
	}
	goToUser(user) {
		this.$state.go('user', { id: user.id, user });
	}
}
angular.module('users').component('users', {
	template,
	controller: ['$state', 'Users', Controller],
});