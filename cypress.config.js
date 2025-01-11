const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    
    baseUrl : 'https://opensource-demo.orangehrmlive.com/',
    
    "reporter": 'mochawesome',
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": false,
      "charts": true,
    },

   

  },
  
  

});
