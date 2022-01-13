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
            A user is able to login with a valid username/password
 
  @tag1
  Scenario: Verify user can registetrs for the first time 
    Given User Navigate to Fitness Avenue websit registration page
    When User using valid email and password
    And User able to  Click "Register" button
   Then User should be taken to the homePage
    And User should see welcome,first name' next to 'MyAccount' on the top of HomePage
     
   
    
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