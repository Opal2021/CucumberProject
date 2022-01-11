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

  Feature: Verify function Home Page
  
  Background:
  Given A user is able to login with a valid username/password

  Scenario: Verify home page has four sliders only
  
  When A user navigates to the scroll button on right side
  And A user is able to see our slides
  Then A user is assert Home page has four sliders only
    
  Scenario: Verify home page has five images under sliders
  
  When A user is navigate to the images
  Then A user is able to see the images

  Scenario: Verify send a keyword to the keywords successfully
  
  When A user is send key to the keyword field "BIKE"
  And A user enters item on that page
  Then A user successfully verifies a message XFORM Fitness BK70 Spin Bike
  

   