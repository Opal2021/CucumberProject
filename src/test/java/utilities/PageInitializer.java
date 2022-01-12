package utilities;

import pagesClass.HomePage_Page;
import pagesClass.MyAccountPage;
import pagesClass.eBikesPage;

public class PageInitializer extends Driver{

	public static MyAccountPage MyP;
	public static HomePage_Page HpP;
	public static eBikesPage eBP;
	
	
	
	
	public static void initialize() {
		
		MyP = new MyAccountPage();
		HpP = new HomePage_Page();
		eBP = new eBikesPage();
	}
	
	
}
