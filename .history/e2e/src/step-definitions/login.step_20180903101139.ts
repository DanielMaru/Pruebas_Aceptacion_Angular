import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';

defineSupportCode(({Before, Given, When, Then, And}) => {
    LoginPage LoginPage;
    LoginPage
    Before(() => {

    });
    Given('the user is in login Page', () => {
        browser.get('/');
    });
    And('the user set the email to {email}', email => {

    });
    And('the user set the password to {pass}', pass => {

    });
    When('the user click in login button', () => {

    });
    Then('the user should see the correct message', () => {

    });

});
