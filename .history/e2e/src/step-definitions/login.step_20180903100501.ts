import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

defineSupportCode(({Before, Given, When, Then, And}) => {
    Given('the user is in login Page', async() => {
        await browser.get('/');
    });
    And('the user set the email to ')

});
