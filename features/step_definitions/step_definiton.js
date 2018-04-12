var myStepDefinitionsWrapper = function () {

    //PageObjects
    var wineScreenPage = require('./locators/wineScreen.js');

    this.Given(/^I go to the add wine site$/, function () {
        return browser.driver.get(wineScreenPage.url);
    });

    this.Given(/^CRUD page should be displayed$/, function (callback) {
        callback.pending();
    });
    this.Given(/^Add Wine$/, function (callback) {
        callback.pending();
    });
    this.When(/^I click on Save button$/, function (callback) {
        callback.pending();
    });
    this.Then(/^CRUD page should be displayed$/, function (callback) {
        callback.pending();
    });
    this.Then(/^I should be in add wine site and add wine$/, function (callback) {
        callback.pending();
    });
    this.When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (arg1, arg2, callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;