@WineFeature
Feature: Adding a wine
  As a user
  I want to add a new wine by providing details such as name, number of grapes, country etc.
  So that wine is added to the inventory

  @Scenario1
  Scenario Outline:
    Given I go to add wine site
    When I fill in details with "<name>","<grapes>","<country>","<region>","<year>","<description>"
    When I click on Save button
    Then CRUD page should be displayed
   Examples:
      | name | grapes | country | region | year | description |
      | McDowell | 20 |  Australia  | NSW  | 2018 | description-1 |
      | McDowell-1 | 21 |  Singapore | East  | 2018 | description-2 |
      | McDowell-2 | 22 |  India  | Hyderabad  | 2018 | description-3 |
      | McDowell-3 | 23 |  New Zealand  | Auckland  | 2018 | description-4 |