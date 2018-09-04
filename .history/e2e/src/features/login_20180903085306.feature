Feature: Login Page
    We want to test the login Page
    Scenario: HU: 1456 - Mostrar mensaje exitoso si el correo es valido
    Given the user is in login Page
    And the user set the email to 'daniel@correo.com'
    And the user set the password to '12345'
    When the user click in login button 
    Then Start to type your Then step here