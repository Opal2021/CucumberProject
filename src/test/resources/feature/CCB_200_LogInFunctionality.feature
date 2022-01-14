@tag200
Feature: Verify LogIn Functionality

  Background: 
    Given User navigates to Fitness Avenue site

  Scenario: Verify log in functionality with valid credencials
    When User click on login tab on the top right
    And User log in with valid email and password
    And User navigated to the homepage and verify welcome text
    Then User click log out

  Scenario Outline: Verify log in functionality with invalid credencials
    When User click on login tab 
    And User log in with invalid email and invalid password
    Then User should see invalid log. displayed on

    Examples: 
      | username         | password  |
      | abc123@gmail.com | 111222333 |

  Scenario: Verify log in functionality without any credencials
    When User click on login tab on the top right
    And User click on login button
    Then User should see Your Username and Password are required. displayed on