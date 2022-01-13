package stepDefinitions;

import org.apache.http.util.Asserts;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import utilities.CommonMethods;
import utilities.Driver;

public class CCB_600_CardioFunctionality extends CommonMethods{
	
	

	@Given("user is on the cardio tab")
	public void user_is_on_the_cardio_tab() {
		CT.CardioTab.click();
	}

	@When("user clicks the treadmill picture")
	public void user_clicks_the_treadmill_picture() {
		CT.TreadmillPic.click();

	}

	@Then("user should be on the treadmill page")
	public void user_should_be_on_the_treadmill_page() throws InterruptedException {

		String expectedResult = "Fitness Avenue: Commercial and Home Treadmills";
		String actualResult = Driver.getDriver().getTitle();
		
		
		System.out.println( "This is the title : " + actualResult);
		
		Assert.assertEquals(expectedResult, actualResult);
		
	}
	
	
	@Given("user is on the bikes page")
	public void user_is_on_the_bikes_page() {
		CT.CardioTab.click();
		CT.bikePic.click();

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
