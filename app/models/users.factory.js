angular.module('users').factory('Users', ['$resource', ($resource) => {
	const Users = $resource('http://jsonplaceholder.typicode.com/users/:user', {}, {
		getAll: {
			method: 'GET',
			isArray: true,
		},
	});

	return {
		/**
		 * Get all of the users from the user service
		 * @return {[Resource]} an array of User resources objects, representing the model
		 */
		getAll: () => Users.getAll(),

		/**
		 * Gets a specific user from the user service
		 * @param {String} user the user's id
		 * @return {Resource} a resource representing the fetched user
		 */
		get: user => Users.get({ user }),
	};

}]);