package utilities;

import pagesClass.MyAccountPage;

public class PageInitializer extends Driver{

	public static MyAccountPage MyP;
	
	public static void initialize() {
		
		MyP = new MyAccountPage();
		
	}
	
	
}
