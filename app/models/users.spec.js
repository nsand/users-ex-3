import 'angular';
import 'angular-resource';
import 'angular-mocks';

angular.module('users', ['ngResource']);

require('./users.factory.js');

describe('Users Model', () => {

	let $httpBackend;
	let Users;

	beforeEach(function(){
		angular.mock.module('users');
	});

	beforeEach(inject((_$httpBackend_, _Users_) => {
		$httpBackend = _$httpBackend_;
		Users = _Users_;
	}));

	afterEach(() => {
		// Make sure we're not waiting on anything else
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should be able to get all users', () => {
		$httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond([ { id: 1 }, { id: 2 }]);

		const users = Users.getAll();
		expect(users.length).toBe(0);

		$httpBackend.flush();

		expect(users.length).toBe(2);
		expect(users[0].id).toBe(1);
		expect(users[1].id).toBe(2);
	});

	it('should be able to get a specific user', () => {
		$httpBackend.expectGET('http://jsonplaceholder.typicode.com/users/1').respond({ id: 1 });

		const user = Users.get(1);
		expect(user.length).toBeUndefined();

		$httpBackend.flush();

		expect(user.id).toBe(1);
	});
});
