Feature: Login Page
    We want to test the login Page
    Scenario Outline: HU: 1456 - Mostrar mensaje exitoso si el correo es valido
    Given the user is in login Page
    And the user set the email to <email>
    And the user set the password to <pass>
    When the user click in login button 
    Then the user should see the correct message

    Examples:
    | email| pass | 
    | daniel@hotmail.com  | 1234123  | 
    | jorge@hotmail.com  | akhsd  | 
    | daniel@bancolombia.com  | 1234123  | 
    | alvaro821@hotmail.com  | 1234123  | 
    | duban0893@hotmail.com  | 1234123  | 