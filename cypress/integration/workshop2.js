describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Crear una nueva cuenta
      cy.contains('Ingresar').click()
      /*
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Julián")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picón")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("julian.picon@hotmail.com")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').first().check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      */
      //Login
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("julian.picon@hotmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      //cy.get('.navbar').contains('Salir')
      
      //Crear cuenta con usuario existente
      /*
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Julián")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picón")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("julian.picon@hotmail.com")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').first().check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Error: Ya existe un usuario registrado con el correo')
      */
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').click().type("Dario Correal", {force:true})


    })
})