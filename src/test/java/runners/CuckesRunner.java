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
		tags     =  "@tag6"// "@SmokeTest4"

				
)

public class CuckesRunner {
		
		
	
}
