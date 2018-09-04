import { element, by, ElementFinder } from 'protractor';

export class LoginPage {
    inputEmail = element(by.id('inputEmail'));
    inputPassword = element(by.id('inputPassword'));
    btnLogin = element(by.id('btnLogin'))

    setValue(elemento: ElementFinder, value) {
        elemento.sendKeys(value);
    }
}
