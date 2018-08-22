var assert = require('assert');

describe('los estudiantes crear cuenta', function() {

    beforeEach(function() {
       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
     });

     afterEach(function() {
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });

    it('should visit los estudiantes and create account', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');

        var nameInput = cajaSignUp.element('input[name="nombre"]');
        nameInput.click();
        nameInput.keys('Prueba');

        var lastNameInput = cajaSignUp.element('input[name="apellido"]');
        lastNameInput.click();
        lastNameInput.keys('Miso');

        var mailInput = cajaSignUp.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys('pruebas_misos52@gmail.com');

        cajaSignUp.element('input[name="acepta"]').click();

        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('12345678');


        cajaSignUp.element('select[name="idPrograma"]').selectByValue('12'); //Ingenieria de sistemas y de computaciòn

        browser.click('button=Registrarse');
        
        browser.waitForVisible('.sweet-alert', 12000);
        var alertText = browser.element('.sweet-alert').getText();
        expect('a*=Save')
    });

});