package utilities;

import pagesClass.CardioPage;
import pagesClass.HomePage_Page;
import pagesClass.MyAccountPage;
import pagesClass.eBikesPage;

public class PageInitializer extends Driver{

	public static MyAccountPage MyP;
	public static HomePage_Page HpP;
<<<<<<< HEAD
	public static CardioPage CT;
=======
	public static eBikesPage eBP;
	
	
>>>>>>> 134afe99ba6d6461c8e24ef452fda9a3c311562c
	
	
	public static void initialize() {
		
		MyP = new MyAccountPage();
		HpP = new HomePage_Page();
<<<<<<< HEAD
		CT = new CardioPage();
=======
		eBP = new eBikesPage();
>>>>>>> 134afe99ba6d6461c8e24ef452fda9a3c311562c
	}
	
	
}
