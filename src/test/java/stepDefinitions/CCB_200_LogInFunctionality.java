package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.CommonMethods;
import utilities.ConfigurationReader;
import utilities.Driver;


public class CCB_200_LogInFunctionality extends CommonMethods {
	
	

@Given("User navigates to LogIn Page")
public void user_navigates_to_LogIn_Page() {
	LgP.LoginTab.click();
}


@When("User log in with valid email and password")
public void user_log_in_with_valid_email_and_password() {
	LgP.EmailFields.sendKeys(ConfigurationReader.getProperty("Email_200"));
	LgP.PasswordFields.sendKeys(ConfigurationReader.getProperty("Password_200"));
	LgP.LoginButton.click();
}

@And("User navigated to the homepage and verify welcome text")
public void user_navigated_to_the_homepage_and_verify_welcome_text() {
	String expectedtext ="Welcome, Jane";
	
}

@And("User click log out")
public void user_click_log_out() {
	LgP.LogOutButton.click();
}
@Then("User should see successfully logout message displayed on")
public void user_should_see_successfully_logout_message_displayed_on() {
	
	String expectUrl = "https://www.fitnessavenue.ca/logout";
	String actualResult = Driver.getDriver().getCurrentUrl();
	
	Assert.assertEquals(expectUrl, actualResult);
	
}
///////////////////////// S2
@When("User log in with invalid email and invalid password")
public void user_log_in_with_invalid_email_and_invalid_password() {
	LgP.EmailFields.sendKeys(ConfigurationReader.getProperty("123abc@gmail.com"));
	LgP.PasswordFields.sendKeys(ConfigurationReader.getProperty("111222333"));
	LgP.LoginButton.click();
	
}

@Then("User should see invalid log. displayed on")
public void user_should_see_invalid_log_displayed_on() {
	
	//span[@class='error']
	
}
///////////////////////////S3

@When("User click on login button")
public void user_click_on_login_button() {
	
	LgP.LoginButton.click();
}

@Then("User should see Your Username and Password are required. displayed on")
public void user_should_see_Your_Username_and_Password_are_required_displayed_on() {
	
	//span[@class='error']

}




}