var assert = require('assert');

describe('los estudiantes login', function() {

    beforeEach(function() {
       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
     });

     afterEach(function() {
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });

   it('should visit los estudiantes and log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('julian.picon@hotmail.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('12345678');

        cajaLogIn.element('button=Ingresar').click()

        var alertText = browser.element('.navbar').getText();
        expect(alertText).toBe('Salir');
    });

});
