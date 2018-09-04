import { element, by, ElementFinder } from 'protractor';

export class LoginPage {
    inputEmail = element(by.id('inputEmail'));
    inputPassword = element(by.id('inputPassword'));
    btnLo

    setValue(elemento: ElementFinder, value) {
        elemento.sendKeys(value);
    }
}
