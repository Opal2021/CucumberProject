package utilities;

import pagesClass.CardioPage;
import pagesClass.HomePage_Page;
import pagesClass.MyAccountPage;

public class PageInitializer extends Driver{

	public static MyAccountPage MyP;
	public static HomePage_Page HpP;
	public static CardioPage CT;
	
	
	public static void initialize() {
		
		MyP = new MyAccountPage();
		HpP = new HomePage_Page();
		CT = new CardioPage();
	}
	
	
}
