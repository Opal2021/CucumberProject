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
  "status": "passed"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User navigated to the homepage and verify welcome text",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigated_to_the_homepage_and_verify_welcome_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click log out",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_click_log_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see successfully logout message displayed on",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_should_see_successfully_logout_message_displayed_on()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify log in functionality with invalid credencials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag200"
    }
  ]
});
formatter.step({
  "name": "User log in with invalid email and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_log_in_with_invalid_email_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see invalid logIn. displayed on",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_should_see_invalid_log_displayed_on()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to LogIn Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_LogIn_Page()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "User should see Your Username and Password are required. displayed on",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_should_see_Your_Username_and_Password_are_required_displayed_on()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});