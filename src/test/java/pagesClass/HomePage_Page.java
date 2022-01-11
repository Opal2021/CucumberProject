package pagesClass;

import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class HomePage_Page {
	public HomePage_Page() {
		
	PageFactory.initElements(Driver.getDriver(), this);
	
}

}
