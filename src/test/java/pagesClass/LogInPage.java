package pagesClass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.ConfigurationReader;
import utilities.Driver;

public class LogInPage {

	public LogInPage() {

		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(xpath = "//*[@id=\"header\"]/div[4]/a[1]")

	public WebElement LoginTab;

	@FindBy(id = "login-username")

	public WebElement EmailFields;

	@FindBy(id = "login-password")

	public WebElement PasswordFields;

	@FindBy(id = "login-button")

	public WebElement LoginButton;

	@FindBy(xpath = "//span[@class='welcome-message']")

	public WebElement WelcomeMessage;

	public void LogIn_ccb_200() {
		

		LoginTab.click();
		EmailFields.sendKeys(ConfigurationReader.getProperty("Email_200"));
		PasswordFields.sendKeys(ConfigurationReader.getProperty("Password_200"));
		LoginButton.click();

	}

}
