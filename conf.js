exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/addwine.feature'],
  capabilities: {
      browserName:'chrome'
  },
    cucumberOpts: {
        strict:true,
        require: [
            'features/step_definitions/*.js',
            'features/step_definitions/support/*.js'],
        tags: true,
        format: "./reports/cucumber-test-results.json",
        profile: false,
        'no-source': true
    }
};