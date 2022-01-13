package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.CommonMethods;

public class CCB_200_LogInFunctionality extends CommonMethods {
	
	@Given("User navigates to Fitness Avenue site")
	public void user_navigates_to_Fitness_Avenue_site() {
		
	  
	}

	@When("User click on login button on the top right")
	public void user_click_on_login_button_on_the_top_right() {

	}

	@And("User log in with valid email and password")
	public void user_log_in_with_valid_email_and_password() {
	 
	}

	@And("User navigated to the homepage and verify welcome text")
	public void user_navigated_to_the_homepage_and_verify_welcome_text() {
	 
	}

	@Then("User click log out")
	public void user_click_log_out() {
	
	}
 ////////////////////////////////
	@When("User log in with invalid email and invalid password")
	public void user_log_in_with_invalid_email_and_invalid_password() {
	
	}

	@And("User should see invalid log. displayed on")
	public void user_should_see_invalid_log_displayed_on() {
	  
	}
///////////////////////////////////////////////
	@When("User leave the email {string} and password {string} field blank")
	public void user_leave_the_email_and_password_field_blank(String string, String string2) {
	 
	}

	@When("User click on login button")
	public void user_click_on_login_button() {

	}

	@When("User should see Your Username and Password are required. displayed on")
	public void user_should_see_Your_Username_and_Password_are_required_displayed_on() {
	
	}
	}