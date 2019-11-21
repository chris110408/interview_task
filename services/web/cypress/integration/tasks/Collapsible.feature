Feature: The Task2 :Expandable/Collapsible Description and Details Section

    Scenario: DESCRIPTION Expandable/Collapsible Description and Details Section
      Given User open App
      Then The "SHOW FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-down"
      Then The section is collapsed
      Then The "HIDE FULL DESCRIPTION" button should hide
      When click The "SHOW FULL DESCRIPTION" button
      Then The "HIDE FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-up"
      Then The section is expanded
      Then The "SHOW FULL DESCRIPTION" button should hide
      When click The "HIDE FULL DESCRIPTION" button
      Then The "SHOW FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-down"
      Then The section is collapsed
      Then The "HIDE FULL DESCRIPTION" button should hide

    Scenario: DETAIL Expandable/Collapsible Description and Details Section
      Given User open App
      When I click on detail button
      Then The "VIEW MORE DETAILS"  button should be visible,icon is on "right" side and have "icon-down"
      Then The detail section is collapsed
      Then The "VIEW FEWER DETAILS" button should hide
      When click The "VIEW MORE DETAILS" button
      Then The "VIEW FEWER DETAILS"  button should be visible,icon is on "right" side and have "icon-up"
      Then The detail section is expanded
      Then The "VIEW MORE DETAILS" button should hide
      When click The "VIEW FEWER DETAILS" button
      Then The "VIEW MORE DETAILS"  button should be visible,icon is on "right" side and have "icon-down"
      Then The detail section is collapsed
      Then The "VIEW FEWER DETAILS" button should hide


    Scenario: DETAIL and DESCRIPTION Expandable/Collapsible work independently

      Given User open App
      #click SHOW FULL DESCRIPTION the DESCRIPTION is is expanded
      Then The "SHOW FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-down"
      Then The section is collapsed
      Then The "HIDE FULL DESCRIPTION" button should hide
      When click The "SHOW FULL DESCRIPTION" button
      Then The "HIDE FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-up"
      Then The section is expanded
#     go to detail tab the DESCRIPTION is is collapsed
      When I click on detail button
      Then The "VIEW MORE DETAILS"  button should be visible,icon is on "right" side and have "icon-down"
      Then The detail section is collapsed
#      click button VIEW MORE DETAILS button then click VIEW FEWER DETAILS
      When click The "VIEW MORE DETAILS" button
      Then The "VIEW FEWER DETAILS"  button should be visible,icon is on "right" side and have "icon-up"
      Then The detail section is expanded
      Then The "VIEW MORE DETAILS" button should hide
      When click The "VIEW FEWER DETAILS" button
      Then The "VIEW MORE DETAILS"  button should be visible,icon is on "right" side and have "icon-down"
      Then The detail section is collapsed
      Then The "VIEW FEWER DETAILS" button should hide
#      go back to desc, the section is still expanded
      When I click on description button
      Then The "HIDE FULL DESCRIPTION"  button should be visible,icon is on "right" side and have "icon-up"
      Then The section is expanded



