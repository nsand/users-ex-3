describe('Get a user\'s details', function () {

	it('should have details about the specific user', function () {
		browser.get('http://localhost:3096/users/5');

		expect(element(by.css('h1')).getText()).toEqual('User Details');
		expect(element(by.css('.panel-title')).getText()).toEqual('Chelsey Dietrich');
	});

	it('should be able to go back from the user details', function () {
		browser.get('http://localhost:3096/users/5');

		element(by.css('a[ui-sref]')).click()
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3096/users');
	});

	it('should show an error message for an invalid user id', function () {
		browser.get('http://localhost:3096/users/9999');

		expect(element(by.css('h1')).getText()).toEqual('Could not load the user');
		expect(element(by.css('p')).getText()).toEqual('There was an error fetching the user (404).');
	});

	it('should transfer to the users list, if I do not specify an id', function () {
		browser.get('http://localhost:3096/users/');

		expect(browser.getCurrentUrl()).toEqual('http://localhost:3096/users');
	});

});
