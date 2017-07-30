angular.module('users').factory('Users', ['$resource', ($resource) => {
	const Users = $resource('http://jsonplaceholder.typicode.com/users/:user', {}, {
		getAll: {
			method: 'GET',
			isArray: true,
		},
	});

	
	return {
		getAll: () => Users.getAll(),
		get: user => Users.get({ user }),
	};

}]);