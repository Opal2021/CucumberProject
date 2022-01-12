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

  Scenario: Verify log in functionality with valid credencials
    Given Browser is open
    And User navigates to Fitness Avenue site
    And User click on login button
    When User enter valid email and password
    And User click on login button
    Then User navigated to the homepage and verify welcome text
    Then User click log out
    
  Scenario: Verify log in functionality with invalid credencials
    Given Browser is open
    And User navigates to Fitness Avenue site
    And User click on login button
    When User enter valid email and invalid password
    And User click on login button
    Then User should see the error messege "Invalid Login" displayed on
    Then User click log out
    
     Scenario: Verify log in functionality without any credencials
    Given Browser is open
    And User navigates to Fitness Avenue site
    And User click on login button
    When User leave the email and password field blank 
    And User click on login button
    Then User should see "Your Username and Password are required." displayed on
    Then User click log out
    
    

    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
