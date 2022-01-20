package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		plugin = {
				
			"pretty",
			"html: target/default-cucumber-reports",
			"json:target/cucumber.json"
		},
		features = "src/test/resources/feature/",
		glue     = "stepDefinitions",
		dryRun   = false,
<<<<<<< HEAD
		tags     ="@SmokeTest50"//"@Opal"//"@SmokeTestNadia"//"@tag200"//"@SmokeTest4"//"@tag10"
=======
		tags     ="@SmokeTest4"//"@SmokeTestNadia"//"@tag200"//"@SmokeTest4"//"@tag10"
>>>>>>> 926437f6b4335ea30d865da3671fa29c222e4294

				
)

public class CuckesRunner {
		
		
	
}	
