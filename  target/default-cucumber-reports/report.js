$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_500_eBikesFunctionality.feature");
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
});