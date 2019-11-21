Feature: The Task4
  Scenario: Hotel List
    Given User open App
#    Then The page should have functional tabs and there are 3 tabs
#    Then Hotel should have 21 items
    Then Hotel name list is uniq
    Then Hotel name list should be uniq and sorted
