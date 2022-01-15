$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/CCB_600_CardioFunctionality.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "user is on the cardio tab",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_cardio_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the treadmill picture",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_the_treadmill_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on the treadmill page",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_should_be_on_the_treadmill_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "user is on the bikes page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_bikes_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the treadmill picture",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_the_treadmill_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adds first item of bike to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.adds_first_item_of_bike_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "carts page should have the bike added",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.carts_page_should_have_the_bike_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Rowers sort by drop down button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the Rowers page",
  "keyword": "Given "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_is_on_the_Rowers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sort by",
  "keyword": "When "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_clicks_on_sort_by()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "changes the price to Asc",
  "keyword": "And "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.changes_the_price_to_Asc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see all bikes in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "CCB_600_CardioFunctionality.user_should_be_able_to_see_all_bikes_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});