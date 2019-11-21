Feature: The Task1

    Scenario: Tabbed Content
      Given User open App
      Then The page should have functional tabs and there are 3 tabs
      Then Default tab selected should be the Description Tab and the old tab’s content should hide
      When I click on detail button
      Then The detail button is active and the tab’s content should be shown and the old tab’s content should hide
      When I click on location button
      Then The location button is active and the tab’s content should be shown and the old tab’s content should hide
