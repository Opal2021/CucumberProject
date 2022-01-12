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
});