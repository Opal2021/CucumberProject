<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_100_SignUpFunctionality.feature");
formatter.feature({
  "name": "Verify SignUp Functionality",
  "description": "",
  "keyword": "Feature"
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_400_HomePageFunctionality.feature");
formatter.feature({
  "name": "Verify Home Page functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeTest4"
    }
  ]
>>>>>>> 926437f6b4335ea30d865da3671fa29c222e4294
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
<<<<<<< HEAD
  "name": "User Navigates to Fitness Avenue website registration page",
  "keyword": "Given "
});
formatter.match({});
=======
  "name": "A user is on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_on_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify home page has four sliders only",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest4"
    }
  ]
});
formatter.step({
  "name": "A user click to the scroll button on right side",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_click_to_the_scroll_button_on_right_side()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A user is able verify Home page has four sliders only",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_able_verify_Home_page_has_four_sliders_only()"
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
  "name": "A user is on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_on_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify home page has five images under sliders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest4"
    }
  ]
});
formatter.step({
  "name": "A user click to the images",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_click_to_the_images()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A user is able to verify Home page has five images",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_able_to_verify_Home_page_has_five_images()"
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
  "name": "A user is on the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_on_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify send a keyword to the keywords successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest4"
    }
  ]
});
formatter.step({
  "name": "A user is send key to the keyword field \"BIKE\"",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_send_key_to_the_keyword_field_(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A user click enters",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_click_enters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A user successfully verifies a message",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_successfully_verifies_a_message()"
});
>>>>>>> 926437f6b4335ea30d865da3671fa29c222e4294
formatter.result({
  "status": "passed"
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