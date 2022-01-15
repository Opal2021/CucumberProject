$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_200_LogInFunctionality.feature");
formatter.feature({
  "name": "Verify LogIn Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag200"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality with valid credencials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag200"
    }
  ]
});
formatter.step({
  "name": "User log in with valid email and password",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_log_in_with_valid_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to the homepage and verify welcome text",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigated_to_the_homepage_and_verify_welcome_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click log out",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_click_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see sucsussfully logout mesage displayed on",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify log in functionality with invalid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User log in with invalid \u003cemail\u003e and invalid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User should see invalid log. displayed on",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "abc123@gmail.com",
        "111222333"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality with invalid credencials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag200"
    }
  ]
});
formatter.step({
  "name": "User log in with invalid abc123@gmail.com and invalid 111222333",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should see invalid log. displayed on",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_should_see_invalid_log_displayed_on()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality without any credencials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag200"
    }
  ]
});
formatter.step({
  "name": "User click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Your Username and Password are required. displayed on",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_should_see_Your_Username_and_Password_are_required_displayed_on()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});