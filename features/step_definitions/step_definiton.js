var {defineSupportCode} = require('cucumber');
var wineScreen = require('./locators/wineScreen.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var wineScreenPage = wineScreen.wineScreenPage;

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {

    var timeout = setDefaultTimeout(30*1000);


    Given('I go to add wine site', function () {
        return browser.driver.get(wineScreenPage.url);
    });

    When('I fill in details with {string},{string},{string},{string},{string},{string}', function (arg1, arg2, arg3, arg4, arg5, arg6) {
        browser.driver.get(wineScreenPage.url);
        browser.sleep(10000);
        return wineScreen.addWine(arg1, arg2, arg3, arg4, arg5, arg6);
    });
    When('I click on Save button', function () {
        return wineScreenPage.saveButton.click();
    });
    Then('CRUD page should be displayed', function () {
        return expect(browser.getCurrentUrl()).to.eventually.equal(wineScreenPage.savedPageURL);
    });
});