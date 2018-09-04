import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';

defineSupportCode(({Before, Given, When, Then}) => {
    Given('the user is in login Page', async() => {
        await browser.get('')
    });

});
