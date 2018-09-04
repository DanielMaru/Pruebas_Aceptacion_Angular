import { defineSupportCode } from 'cucumber';
import { async } from '../../../node_modules/rxjs/internal/scheduler/async';

defineSupportCode(({Before, Given, When, Then}) => {
    Given('the user is in login Page', async() => {

    });

});
