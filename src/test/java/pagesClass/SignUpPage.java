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
		
		@FindBy(id="password")
	 	public WebElement passwordField ;
		
// 		@FindBy(id= )
// 	 	public WebElement   ;
//		
 		
 		
 		//input[@id='password_confirmation']
 		
 		
//		@FindBy(id="email")
//	 	public WebElement EmailField ;
//		@FindBy(id="email")
//	 	public WebElement EmailField ;
//		@FindBy(id="email")
//	 	public WebElement EmailField ;
//		@FindBy(id="email")
//	 	public WebElement EmailField ;
//		@FindBy(id="email")
//	 	public WebElement EmailField ;
//		
		
		//input[@id='password']
		
	
}
