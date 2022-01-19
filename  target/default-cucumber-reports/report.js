$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_100_SignUpFunctionality.feature");
formatter.feature({
  "name": "Verify SignUp Functionality",
  "description": "",
  "keyword": "Feature"
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
  "name": "User Navigates to Fitness Avenue website registration page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify user registetrs using valid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest50"
    }
  ]
});
formatter.step({
  "name": "User Navigate to Fitness Avenue websit registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_Navigate_to_Fitness_Avenue_websit_registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enter email that was registered before",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_Enter_email_that_was_registered_before()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User get Message Username already exist in display on Sign up page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_get_Message_Username_already_exist_in_display_on_Sign_up_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});