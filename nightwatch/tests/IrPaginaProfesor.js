module.exports = {
  'Go to teacher page': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 10000)
      .click('.buscador')
      .setValue('.buscador input[role="combobox"]','Dario Correal')
      .waitForElementVisible('.Select-option', 10000)
      .assert.containsText('.Select-option', 'Dario Correal - Ingeniería De Sistemas')
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 10000)
      .assert.containsText('.nombreProfesor', 'Dario Correal')
      .end();
  }
};