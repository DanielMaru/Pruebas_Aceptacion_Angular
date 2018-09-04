Feature: Login Page
    We want to test the login Page
    Scenario Outline: HU: 1456 - Mostrar mensaje exitoso si el correo es valido
    Given the user is in login Page
    And the user set the email to <email>
    And the user set the password to <password>
    When the user click in login button 
    Then the user should see the correct message

    Examples:
    | email| password|
    | 'daniel@correo.com'  | '1234'  |
    | 'jorge@correo.com'  | '3123'  |
    | 'felipe@correo.com'  | '123'  |
    | 'daniel@correo.com'  | '12312334'  |


    Scenario: HU: 1456 - Validar que las contraseñas sean numericas
    Given the user is in login Page
    And the user set the email to '<email>'
    And the user set the password to '<password>'
    When the user click in login button 
    Then the user should see the correct message

    Examples:
    | email| password|
    | 'danielcorreo.com'  | '1234'  |
    | 'jorgecorreo.com'  | '3123'  |
    | 'felipe@correo.com'  | '123'  |
    | 'daniel@correo.com'  | '12312334'  |


    

    