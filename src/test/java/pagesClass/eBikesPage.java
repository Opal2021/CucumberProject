package pagesClass;

import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class eBikesPage {

	
	public eBikesPage() {
		
		PageFactory.initElements(Driver.getDriver(), this);
	}
}
