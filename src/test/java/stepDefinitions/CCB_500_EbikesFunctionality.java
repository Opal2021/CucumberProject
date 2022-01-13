package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import utilities.CommonMethods;
import utilities.Driver;

public class CCB_500_EbikesFunctionality extends CommonMethods {

	@Given("User navigates to ebikes page")
	public void user_navigates_to_ebikes_page() {
		eBP.eBikesBtn.click();

	}

	@When("User clicks on Add to cart button")
	public void user_clicks_on_Add_to_cart_button() {
	
		WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);

		wait.until(ExpectedConditions.visibilityOf(eBP.addToCartBtn));

		eBP.addToCartBtn.click();

	}

	@When("User clicks on Checkout button")
	public void user_clicks_on_Checkout_button() {
		eBP.checkOutBtn.click();

	}

	@Then("User is on Shopping cart page")
	public void user_is_on_Shopping_cart_page() {
		String expectedPageTitle = "https://www.fitnessavenue.ca/shopping_cart";
		String actualPageTitle = Driver.getDriver().getCurrentUrl();
		
		System.out.println(actualPageTitle);

		Assert.assertEquals(expectedPageTitle, actualPageTitle);

	}

	@Then("Shopping cart contains an item")
	public void shopping_cart_contains_an_item() {

	}

	@When("User removes item from Shopping cart")
	public void user_removes_item_from_Shopping_cart() {

	}

	@Then("User accepts alert message")
	public void user_accepts_alert_message() {

	}

	@Then("Shopping cart is empty")
	public void shopping_cart_is_empty() {

	}

	@When("User selects out of stock item")
	public void user_selects_out_of_stock_item() {

	}

	@Then("User cannot see add to card button")
	public void user_cannot_see_add_to_card_button() {

	}

	@Given("I want to write a step with name{int}")
	public void i_want_to_write_a_step_with_name(Integer int1) {

	}

	@When("I check for the {int} in step")
	public void i_check_for_the_in_step(Integer int1) {

	}

	@Then("I verify the success in step")
	public void i_verify_the_success_in_step() {

	}

	@Then("I verify the Fail in step")
	public void i_verify_the_Fail_in_step() {

	}

}
