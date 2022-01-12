package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.CommonMethods;

public class CCB_600_CardioFunctionality extends CommonMethods{
	
	

	@Given("user is on the cardio tab")
	public void user_is_on_the_cardio_tab() {
		CT.CardioTab.click();
		CT.TreadmillPic.click();
	}

	@When("user clicks the treadmill picture")
	public void user_clicks_the_treadmill_picture() {
	 
	}

	@Then("user should be on the treadmill page")
	public void user_should_be_on_the_treadmill_page() {

	}
	
	
	
	
	@Given("user is on the bikes page")
	public void user_is_on_the_bikes_page() {
		
	}

	@When("adds first item of bike to the cart")
	public void adds_first_item_of_bike_to_the_cart() {
	
	}

	@Then("carts page should have the bike added")
	public void carts_page_should_have_the_bike_added() {
	
	}
	
	
	
	
	
	

	@Given("user is on the Rowers page")
	public void user_is_on_the_Rowers_page() {

	}

	@When("user clicks on sort by")
	public void user_clicks_on_sort_by() {
	
	}

	@And("changes the price to Asc")
	public void changes_the_price_to_Asc() {
	 
	}

	@Then("user should be able to see all bikes in ascending order")
	public void user_should_be_able_to_see_all_bikes_in_ascending_order() {
	
	}


	
}
