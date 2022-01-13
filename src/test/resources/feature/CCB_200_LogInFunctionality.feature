#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Verify LogIn Functionality

  Background: 
    Given User navigates to Fitness Avenue site

  Scenario: Verify log in functionality with valid credencials
    When User click on login button on the top right
    And User log in with valid email and password
    And User navigated to the homepage and verify welcome text
    Then User click log out

  Scenario Outline: Verify log in functionality with invalid credencials
    When User click on login button on the top right
    And User log in with invalid email and invalid password
    Then User should see invalid log. displayed on

    Examples: 
      | username         | password  |
      | abc123@gmail.com | 111222333 |

  Scenario: Verify log in functionality without any credencials
    When User click on login button on the top right
    And User leave the email " " and password " " field blank
    And User click on login button
    And User should see Your Username and Password are required. displayed on
    Then User click log out