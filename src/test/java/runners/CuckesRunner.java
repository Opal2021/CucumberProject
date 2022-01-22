package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		plugin = {
				
			"pretty",
		//	"html: target/default-cucumber-reports",
			"json:target/cucumber.json"
		},
		features = "./src/test/resources/features",
		glue     = {"stepDefinitions","Hooks"},
	//	dryRun   = false
		tags     = "@Opal"//"@SmokeTest50"//"@Opal"//"@SmokeTestNadia"//"@tag200"//"@SmokeTest4"//"@tag10"

				
)

public class CuckesRunner {
		
		
	
}	
