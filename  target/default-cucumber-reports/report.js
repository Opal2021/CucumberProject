$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_200_LogInFunctionality.feature");
formatter.feature({
  "name": "Verify LogIn Functionality",
  "description": "",
  "keyword": "Feature"
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
  "name": "User navigates to Fitness Avenue site",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_Fitness_Avenue_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality with valid credencials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on login tab on the top right",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in with valid email and password",
  "keyword": "And "
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
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_click_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "name": "User click on login tab on the top right",
  "keyword": "When "
});
formatter.step({
  "name": "User log in with invalid email and invalid password",
  "keyword": "And "
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
        "username",
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
  "name": "User navigates to Fitness Avenue site",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_Fitness_Avenue_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality with invalid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click on login tab on the top right",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User log in with invalid email and invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_log_in_with_invalid_email_and_invalid_password()"
});
formatter.result({
  "status": "skipped"
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
  "name": "User navigates to Fitness Avenue site",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_200_LogInFunctionality.user_navigates_to_Fitness_Avenue_site()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify log in functionality without any credencials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on login tab on the top right",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
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
formatter.uri("src/test/resources/feature/CCB_300_MyAccountFunctionality.feature");
formatter.feature({
  "name": "Verify function and data on MyAccount tab",
  "description": "",
  "keyword": "Feature"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify the  information in Billing session that successfully save",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user navigates to My Account tab",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_navigates_to_My_Account_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user is able to change the info in address fields box to \"5678\"",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_change_the_info_in_address_fields_box_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user should successfully verify a message Your details has been save",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_should_successfully_verify_a_message_Your_details_has_been_save()"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify radio button is selected in Filter session on Web Orders Tap.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user is navigate to Orders Tab",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_navigate_to_Orders_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user is able to verify if Order Number is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_verify_if_Order_Number_is_selected()"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify adding favorite part number on Favorites Tap successfully.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user is navigates to Favorite Tab.",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_navigates_to_Favorite_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user enters part number in the fields.",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_enters_part_number_in_the_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user successfully verifies a message Product Added Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_successfully_verifies_a_message_Product_Added_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/feature/CCB_400_HomePageFunctionality.feature");
formatter.feature({
  "name": "Verify function Home Page",
  "description": "",
  "keyword": "Feature"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify home page has four sliders only",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user navigates to the scroll button on right side",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_navigates_to_the_scroll_button_on_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user is able to see our slides",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_able_to_see_our_slides()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user is assert Home page has four sliders only",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_assert_Home_page_has_four_sliders_only()"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify home page has five images under sliders",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user is navigate to the images",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_navigate_to_the_images()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user is able to see the images",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_able_to_see_the_images()"
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
  "name": "A user is able to login with a valid username/password",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_300_MyAccountFunctionality.a_user_is_able_to_login_with_a_valid_username_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify send a keyword to the keywords successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A user is send key to the keyword field \"BIKE\"",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_is_send_key_to_the_keyword_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user enters item on that page",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_enters_item_on_that_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A user successfully verifies a message XFORM Fitness BK70 Spin Bike",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_400_HomePageFunctionality.a_user_successfully_verifies_a_message_XFORM_Fitness_BK_Spin_Bike(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/feature/CCB_500_eBikesFunctionality.feature");
formatter.feature({
  "name": "Verify eBikes Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify user can add item to cart on eBikes page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to ebikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_navigates_to_ebikes_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Shopping cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_is_on_Shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user can delete item from shopping cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on ebikes page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User removes item from Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_removes_item_from_Shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User accepts alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_accepts_alert_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Shopping cart is empty",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.shopping_cart_is_empty()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify user cannot add to cart out-of-stock items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on ebikes page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects out of stock item",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_selects_out_of_stock_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User cannot see add to card button",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_cannot_see_add_to_card_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "I want to write a step with name1",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the 5 in step",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the success in step",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_verify_the_success_in_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "I want to write a step with name2",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_want_to_write_a_step_with_name(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check for the 7 in step",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_check_for_the_in_step(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify the Fail in step",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.i_verify_the_Fail_in_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("src/test/resources/feature/CCB_600_CardioFunctionality.feature");
formatter.feature({
  "name": "Cardio Page functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Threadmill button Functonality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on the cardio tab",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_cardio_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the treadmill picture",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_the_treadmill_picture()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be on the treadmill page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_should_be_on_the_treadmill_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add to cart button from Bike page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on the bikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_bikes_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the treadmill picture",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_the_treadmill_picture()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "adds first item of bike to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.adds_first_item_of_bike_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "carts page should have the bike added",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.carts_page_should_have_the_bike_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Rowers sort by drop down button",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on the Rowers page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_Rowers_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on sort by",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_on_sort_by()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "changes the price to Asc",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.changes_the_price_to_Asc()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see all bikes in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_should_be_able_to_see_all_bikes_in_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});