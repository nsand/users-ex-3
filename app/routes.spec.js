import { root, user } from './routes';

describe('Routes', () => {

	it('should describe a root route', () => {
		expect(root.name).toBe('users');
		expect(root.url).toBe('/users');
		expect(root.template).toBe('<rh-users></rh-users>');
	});

	it('should describe a user route', () => {
		expect(user.name).toBe('user');
		expect(user.url).toBe('/users/:id');
		expect(user.template).toBe('<rh-user></rh-user>');
	});
});
