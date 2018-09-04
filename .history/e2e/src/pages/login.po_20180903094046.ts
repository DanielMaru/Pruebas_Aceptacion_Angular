import { element, by } from 'protractor';
import { getHostElement } from '../../../node_modules/@angular/core/src/render3';

export class LoginPage() {
    inputEmail = element(by.css('#ida'));
    getHostElement(
}