import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';
import { expect } from 'chai';


let loginPage: LoginPage;

defineSupportCode(({Before, Given, When, Then}) => {
    Before(() => {
        loginPage = new LoginPage();
    });
    Given('the user is in login Page', () => {
        browser.get('/');
    });
    Given('the user set the email to {email}', email => {
        loginPage.setValue(loginPage.inputEmail, email);
    });
    Given('the user set the password to {pass}', pass => {
        loginPage.setValue(loginPage.inputPassword, pass);
    });
    When('the user click in login button', () => {
        loginPage.btnLogin.click();
    });
    Then('the user should see the correct message', () => {
        expect(loginPage.message.getInnerHtml).to.be.equal('Correcto');
    });

});
