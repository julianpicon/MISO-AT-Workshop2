describe('Búsqueda de profesores', function() {
    it('Búsqueda de profesores', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.contains('Dario Correal - Ingeniería de Sistemas')
    })
})

describe('Ir a la página del profesor', function() {
    it('Ir a la página del profesor', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.wait(4000)
      cy.get('.buscador').find('input[role="combobox"]').type('{enter}', {force: true})
      cy.wait(2000)
      cy.contains('Califica a este profesor')
    })
})

describe('Filtros por materia en la página del profesor', function() {
    it('Filtros por materia en la página del profesor', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.wait(4000)
      cy.get('.buscador').find('input[role="combobox"]').type('{enter}', {force: true})
      cy.get('input[name="id:ISIS1206"]').check()
      cy.contains('Estructuras De Datos')
    })
})