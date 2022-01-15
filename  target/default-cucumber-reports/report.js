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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027LAPNADIAER7\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\NADIAE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60836}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2ca1110afff38734202e7475f1393dd4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.click(Unknown Source)\r\n\tat stepDefinitions.CCB_500_EbikesFunctionality.user_clicks_on_Checkout_button(CCB_500_EbikesFunctionality.java:37)\r\n\tat ✽.User clicks on Checkout button(src/test/resources/feature/CCB_500_eBikesFunctionality.feature:33)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded0.png");
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});