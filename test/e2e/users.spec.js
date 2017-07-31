describe('Get a list of all of the users', function () {
	beforeEach(function () {
		browser.get('http://localhost:3096/users');
	});

	it('should have a title set', function () {
		expect(browser.getTitle()).toEqual('Site Users')
	});

	it('should have a list of the users', function () {
		const table = element(by.css('.table'));
		const rows = element.all(by.css('.table tbody tr'));

		expect(table.isPresent()).toEqual(true);
		expect(rows.count()).toEqual(10);
	});

	it('should navigate to a specific user', function () {
		const usernames = element.all(by.binding('user.username'));
		const count = usernames.count();

		// For comparing username after transition
		const username = usernames.get(0).getText();

		expect(usernames.get(0).element(by.xpath('..')).isPresent()).toEqual(true);

		usernames.get(0).element(by.xpath('..')).click();

		expect(browser.getCurrentUrl()).toMatch(/\/users\/\d+/);
		expect(element(by.binding('$ctrl.user.username')).getText()).toEqual(username);
	});

	it('should go to /users for any bad path', function () {
		browser.get('http://localhost:3096/usersisnotareallink');
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3096/users');
	});
});
