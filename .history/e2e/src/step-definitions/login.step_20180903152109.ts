import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { LoginPage } from '../pages/login.po';
import { expect } from 'chai';


let loginPage: LoginPage;

defineSupportCode(({Before, Given, When, Then}) => {
    Before(() => {
        loginPage = new LoginPage();
    });
   

