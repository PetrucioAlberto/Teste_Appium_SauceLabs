export const config = {
   
    //runner: 'local',
    //port: 4723,

    user: 'oauth-petruciolima1987-a2330',
    key: '45521700-9f79-42ce-ac8e-c2a2b8345543',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',
     
    specs: [
        './test/specs/**/*.js'
    ],
    
    exclude: [
        
    ],
    
    maxInstances: 1,
    
    capabilities: [
        
        // {
        // platformName: 'Android',
        // 'appium:deviceName': 'ebac',
        // 'appium:platformVersion': '9.0',
        // 'appium:automationName': 'UiAutomator2',
        // 'appium:app': `${process.cwd()}/app/ebacshop.apks`, 
        // 'appium:appWaitActivity': '.MainActivity', 
        // 'appium:disableIdLocatorAutocompletion': true,
        //  }



        // aqui em baixo é a configuraçao com saucelabs

        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', 
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            'appium:disableIdLocatorAutocompletion': true,
            'sauce:options': {
               build: 'appium-build-teste-ebacshop',
               name: 'EBAC Shop Teste',
               deviceOrientation: 'PORTRAIT',
               appiumVersion: '2.0.0'
             },

        }

           
],


   
    logLevel: 'info',
   
    bail: 0,
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    reporters:['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        
            await driver.takeScreenshot(); 
    }

}
