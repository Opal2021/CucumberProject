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
Feature: Verify eBikes Functionality

Background: A user is able to login with a valid username/password
   
  @tag1
  Scenario: Verify user can add item to cart on eBikes page 
    Given User is on ebikes page
    When User clicks on Add to cart button 
    And User clicks on Checkout button
    Then User is on Shopping cart page
    And Shopping cart contains an item
  
  @tag1
  Scenario: Verify user can delete item from shopping cart  
    Given User is on ebikes page
    When User clicks on Add to cart button 
    And User clicks on Checkout button
    And User removes item from Shopping cart
    Then User accepts alert message
    And Shopping cart is empty 
    
    @tag1
  Scenario: Verify user cannot add to cart out-of-stock items  
    Given User is on ebikes page
    When User selects out of stock item   
    Then User cannot see add to card button   
   
   
  @tag2
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
