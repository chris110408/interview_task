Feature: The Task3
  Scenario: Location Link
    Given User open App
    Then The page should have functional tabs and there are 3 tabs
    Then Default tab selected should be the Description Tab and the old tab’s content should hide
    Then hotel info header should correct render
    When I click on location link
    Then Location tab should be selected

