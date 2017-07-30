import './components/users/users.component';
import './components/user/user.component';

/**
 * Set up the route for listing all users
 */
export const root = {
	name: 'users',
	url: '/users',
	template: '<rh-users></rh-users>'
};

/**
 * Set up the route for a specific user
 */
export const user = {
	name: 'user',
	url: '/users/:id',
	params: {
		user: null,
	},
	template: '<rh-user></rh-user>'
};
