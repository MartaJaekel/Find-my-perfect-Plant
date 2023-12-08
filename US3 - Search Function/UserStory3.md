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
- [ ] the search results are updated with each new input
- [ ] Plants that match the search are displayed
- [ ] if there are no results, a error message is displayed that we can't find anything with the name XY
- [ ] if we don't enter anything in the search field or delete the search with the "x"-button, all plants are displayed

## Tasks

- [ ] create the feature branch "Searchfunction"
- [ ] create a form field component with an input field
- [ ] update the design and implement the search bar component
- [ ] search field works `onChange`, allowing users to initiate a search
- [ ] integrate a search button or an icon (eg. SVG) to the search bar
- [ ] integrate a delete button or an icon (eg. SVG) to the search bar
- [ ] define the criteria for generating relevant search results (plant common name)
- [ ] implement an error message in case no results are found