import '../components/user/user.component';

/**
 * Set up the route for a specific user
 */
const user = {
	name: 'user',
	url: '/users/:id',
	params: {
		user: null,
	},
	template: '<user></user>'
};

export default user;
