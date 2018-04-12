describe('Wine Demo App', function() {

    var txtName = element(by.name('wine.name'));
    var txtGrapes = element(by.name('wine.grapes'));
    var txtCountry = element(by.name('wine.country'));
    var txtRegion = element(by.name('wine.region'));
    var txtYear = element(by.name('wine.year'));
    var txtDescription = element(by.name('wine.description'));
    var saveButton = element(by.buttonText("Save"));
    var deleteButton = element(by.buttonText("Delete"));

    beforeEach(function() {
        browser.driver.get('http://coenraets.org/angular-cellar/#/wines/add');
    });

    it('should load correct url', function() {
        expect(browser.getCurrentUrl()).toEqual('http://coenraets.org/angular-cellar/#/wines/add');
    });

    it('should fill the values and save the wine', function() {
        txtName.sendKeys("McDowell");
        txtGrapes.sendKeys("20");
        txtCountry.sendKeys("Australia");
        txtRegion.sendKeys("NSW");
        txtYear.sendKeys("2018");
        txtDescription.sendKeys("This is description area");
        saveButton.click();
        expect(browser.getCurrentUrl()).toEqual("http://coenraets.org/angular-cellar/#/wines");
    });

    it('should delete the wine', function() {
        txtName.sendKeys("McDowell");
        deleteButton.click();
        expect(browser.getCurrentUrl()).toEqual("http://coenraets.org/angular-cellar/#/wines/add");
    });
});