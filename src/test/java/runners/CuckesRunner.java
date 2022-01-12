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
<<<<<<< HEAD
		dryRun   = true//,
	//	tags     = "@tag6" //"@SmokeTest"
=======
		dryRun   = true
//		tags     = "@SmokeTest" 
>>>>>>> 134afe99ba6d6461c8e24ef452fda9a3c311562c
				
)

public class CuckesRunner {

}
