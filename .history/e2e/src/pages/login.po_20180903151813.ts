import { element, by, ElementFinder } from 'protractor';

export class LoginPage {
    inputEmail = element(by.id('inputEmail'));
    inputPassword = element(by.id('inputPassword'));
    btnLogin = element(by.id('btnLogin'));
    message = element(by.id('divMessage'));

    setValue(elemento: ElementFinder, value) {
        elemento.sendKeys(value);
        
    }
}
