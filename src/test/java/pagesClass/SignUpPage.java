package pagesClass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class SignUpPage {

	 
		public SignUpPage() {

			PageFactory.initElements(Driver.getDriver(), this);
		}
	
		@FindBy(id="email")
	 	public WebElement EmailField ;
		//test//
		@FindBy(id="password")
	 	public WebElement Pasw;
		
 		@FindBy(id="password_confirmation")
  	 	public WebElement passwordConfirmation  ;
 	
 		@FindBy(id="first_name")
  	 	public WebElement firstName  ;
 		
 		@FindBy(id="last_name")
  	 	public WebElement lastName  ;
 		 
 		@FindBy(id="company")
	 	public WebElement CompName ;
 		
 		@FindBy(id="billing_address1")
	 	public WebElement Address ;
 		
 		@FindBy(id="billing_city")
	 	public WebElement City   ;
		
 		@FindBy(id="billing_country_code")
	 	public WebElement Country  ;
		
 		@FindBy(id="billing_province_state")
	 	public WebElement Statename   ;
 		
 		
 		@FindBy(id="billing_phone")
	 	public WebElement Phone  ;
 		
 		
 		@FindBy(xpath="//button[normalize-space()='Register']")
	 	public WebElement RegisterButton  ;
 		
 		
	
}
