# US3 - Search Function

## Value Proposition

As a plants enthusiast </br>
i want to be able to search through the plant list </br>
so that i can find a specific plant.

## Description

a search bar at the top of the list </br>
![US3](/US3%20-%20Search%20Function/US3_SearchFunction.png)

## Acceptance Criteria

- [ ] clickable search bar should be prominently displayed on the homepage
- [ ] the search bar should feature an input field
- [ ] the search bar should include a search button or icon that users can click on to initiate the search
- [ ] the search bar should include a delete button or icon that users can click on to reset the search
- [ ] search field works `onChange`, allowing users to initiate a search
- [ ] Plants that match the search are displayed
- [ ] if there are no results, an alert with the information, that we could not find a result, is displayed and can be closed through an button in the corner
- [ ] if we don't enter anything in the search field or delete the search with the "x"-button, all plants are displayed

## Tasks

- [ ] create the feature branch "Searchfunction"
- [ ] create a form field component with an input field
- [ ] update the design and implement the search bar component
- [ ] implement a filter mechanism to provide a real-time auto-suggestion based on the input
- [ ] integrate a search button or an icon (eg. SVG)
- [ ] integrate a delete button or an icon (eg. SVG)
- [ ] define the criteria for generating relevant search results (plant common name)
- [ ] implement an error message in case no results are found
- [ ] integrate a a delete button or an icon (eg. SVG) in the error message to close the field
