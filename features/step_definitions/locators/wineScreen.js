'use strict';
module.exports = {

    wineScreenPage : {
        txtName : element(by.name('wine.name')),
        txtGrapes : element(by.name('wine.grapes')),
        txtCountry : element(by.name('wine.country')),
        txtRegion : element(by.name('wine.region')),
        txtYear : element(by.name('wine.year')),
        txtDescription : element(by.name('wine.description')),
        saveButton : element(by.buttonText("Save")),
        deleteButton : element(by.buttonText("Delete")),
        url : "http://coenraets.org/angular-cellar/#/wines/add",
        savedPageURL : "http://coenraets.org/angular-cellar/#/wines"
    },

    go: function(website) {
        browser.get(website);
    },

    addWine: function(arg1, arg2, arg3, arg4, arg5, arg6) {
        console.log('adding wine' + arg1);
        this.wineScreenPage.txtName.sendKeys(arg1);
        this.wineScreenPage.txtGrapes.sendKeys(arg2);
        this.wineScreenPage.txtCountry.sendKeys(arg3);
        this.wineScreenPage.txtRegion.sendKeys(arg4);
        this.wineScreenPage.txtYear.sendKeys(arg5);
        this.wineScreenPage.txtDescription.sendKeys(arg6);
        console.log('adding wine completed');
    }
};