var wineScreen = function() {
    var txtName = element(by.name('wine.name'));
    var txtGrapes = element(by.name('wine.grapes'));
    var txtCountry = element(by.name('wine.country'));
    var txtRegion = element(by.name('wine.region'));
    var txtYear = element(by.name('wine.year'));
    var txtDescription = element(by.name('wine.description'));
    var saveButton = element(by.buttonText("Save"));
    var deleteButton = element(by.buttonText("Delete"));
    this.url = "http://coenraets.org/angular-cellar/#/wines/add";
};
module.exports = new wineScreen();