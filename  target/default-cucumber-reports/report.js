$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_500_eBikesFunctionality.feature");
formatter.feature({
  "name": "Verify eBikes Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeTestNadia"
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
  "name": "User navigates to ebikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_navigates_to_ebikes_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user can add item to cart on eBikes page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTestNadia"
    }
  ]
});
formatter.step({
  "name": "User clicks on Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Shopping cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_is_on_Shopping_cart_page()"
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
  "name": "User navigates to ebikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_navigates_to_ebikes_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user can delete item from shopping cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTestNadia"
    }
  ]
});
formatter.step({
  "name": "User clicks on Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_clicks_on_Checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User removes item from Shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_removes_item_from_Shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accepts alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_accepts_alert_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Shopping cart is empty",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.shopping_cart_is_empty()"
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
  "name": "User navigates to ebikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_navigates_to_ebikes_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user cannot add to cart out-of-stock items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTestNadia"
    }
  ]
});
formatter.step({
  "name": "User selects out of stock item",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_selects_out_of_stock_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User cannot see add to card button",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_500_EbikesFunctionality.user_cannot_see_add_to_card_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});