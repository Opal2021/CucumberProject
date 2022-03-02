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
		features = "./src/test/resources/features",
		glue     = {"stepDefinitions","Hooks"},
<<<<<<< HEAD
		dryRun   = true,
		tags     ="@SmokeTest4"//"@SmokeTest50"//"@Opal"//"@SmokeTestNadia"//"@tag200"//"@tag10"
=======
		dryRun   = false,
		tags     = "@SmokeTest50"//"@Opal"//"@SmokeTestNadia"//"@tag200"//"@SmokeTest4"//"@tag10"
>>>>>>> 5704ce0ea280ca696276c5926e139b1029a95899

				
)

public class CuckesRunner {
		
		
	
}	
