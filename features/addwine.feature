@WineFeature
Feature: Adding a wine
  As a user
  I want to add a new wine by providing details such as name, number of grapes, country etc.
  So that wine is added to the inventory

  @Scenario1
  Scenario Outline:
    Given Add Wine
    When I fill in "name" with "<name>"
    And I fill in "grapes" with "<grapes>"
    And I fill in "country" with "<country>"
    And I fill in "region" with "<region>"
    And I fill in "year" with "<year>"
    And I click on Save button
    Then CRUD page should be displayed
   Examples:
      | name | grapes | country | region | year |
      | McDowell | 20 |  Australia  | NSW  | 2018 |
      | McDowell-1 | 21 |  Singapore | East  | 2018 |
      | McDowell-2 | 22 |  India  | Hyderabad  | 2018 |
      | McDowell-3 | 23 |  New Zealand  | Auckland  | 2018 |