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
@SmokeTest
Feature: Verify SignUp Functionality

Background: 
      Given User Navigates to Fitness Avenue website registration page 
       
  @tag8
  Scenario: Verify user can register with new valid email 
    When User enters new valid email and creates password
    And User completes billing information
    And User validates Im not robot
    And User clicks Register button
   Then User is navigated to HomePage
    And User should see MyAccount button on Homepage 
     
       
     @tag1
  Scenario: Verify user registetrs using valid email  
    Given User Navigate to Fitness Avenue websit registration page
    When User Enter email that was registered before
    Then User unable to  Click "Register" button
    And User get Message "Username already exist's in display on Sign up page"
   
    
     @tag1
  Scenario: Verify user registetrs without firstname 
    Given User Navigate to Fitness Avenue websit registration page
    When User Entering valid email that was not used before without firstname
    Then User unable to see HomePage 
    And User get Message "Your First name is required"is display on Sign up page
   
    
    
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
