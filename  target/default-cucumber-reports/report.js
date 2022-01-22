$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_100_SignUpFunctionality.feature");
formatter.feature({
  "name": "Verify SignUp Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeTest60"
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
formatter.scenario({
  "name": "Verify user registetrs using valid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest60"
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
  "status": "passed"
});
formatter.step({
  "name": "User Enter email that was registered before",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_Enter_email_that_was_registered_before()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get Message Username isn\u0027t available to use",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_get_Message_Username_isn_t_available_to_use()"
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
formatter.scenario({
  "name": "Verify user registetrs without firstname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest60"
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
  "status": "passed"
});
formatter.step({
  "name": "User Entering valid email that was not used before without firstname",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_Entering_valid_email_that_was_not_used_before_without_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get Message Your First name is required is display on Sign up page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_100_SignUpFunctionality.user_get_Message_Your_First_name_is_required_is_display_on_Sign_up_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});