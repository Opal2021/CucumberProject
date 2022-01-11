package stepDefinitions;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.CommonMethods;

public class CCB_300_MyAccountFunctionality extends CommonMethods{

	
	
	@Given("A user is able to login with a valid username\\/password")
	public void a_user_is_able_to_login_with_a_valid_username_password() {
	   
		MyP.LogIn();
		
	}

	@When("A user navigates to My Account tab")
	public void a_user_navigates_to_My_Account_tab() {
	   
		MyP.MyAccountTab.click();
		
		String ActualResult = MyP.YourInformationMassage.getText();
		String ExpectResult = "Your Information";
		
		Assert.assertEquals(ActualResult, ExpectResult);
	}

	@When("A user is able to change the info in address fields box to {string}")
	public void a_user_is_able_to_change_the_info_in_address_fields_box_to(String string) {
		
		MyP.AddressFields.sendKeys("5678");
		MyP.CopyButton.click();
		MyP.SaveChangesButton.click();
	}

	@Then("A user should successfully verify a message Your details has been save")
	public void a_user_should_successfully_verify_a_message_Your_details_has_been_save() {
	   
	}

	@When("A user is navigate to Orders Tab")
	public void a_user_is_navigate_to_Orders_Tab() {
	    
	}

	@Then("A user is able to verify if Order Number is selected")
	public void a_user_is_able_to_verify_if_Order_Number_is_selected() {
	   
	}

	@When("A user is navigates to Favorite Tab.")
	public void a_user_is_navigates_to_Favorite_Tab() {
	    
	}

	@When("A user enters part number in the fields.")
	public void a_user_enters_part_number_in_the_fields() {
	   
	}

	@Then("A user successfully verifies a message Product Added Successfully")
	public void a_user_successfully_verifies_a_message_Product_Added_Successfully() {
	    
	}


}
