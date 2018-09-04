import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';

let loginPage: LoginPage;

defineSupportCode(({Before, Given, When, Then, And}) => {
    Before(() => {
        loginPage = new LoginPage();
    });
    Given('the user is in login Page', () => {
        browser.get('/');
    });
    And('the user set the email to {email}', email => {
        loginPage.setValue(loginPage.inputEmail, email);
    });
    And('the user set the password to {pass}', pass => {
        loginPage.setValue(loginPage.inputPassword, pass);
    });
    When('the user click in login button', () => {
        loginPage.
    });
    Then('the user should see the correct message', () => {

    });

});
