# Exercise 6 - Advanced Marta Interface

## Description
In this exercise, bootcampers will familiarize themselves with state management, routing handlers, and hooks.

## Submission
See the submission instructions down below. 
- **Due Date**: 10-19-2023

## Instructions
*HIGHLY RECOMMEND READING THROUGH THE WHOLE README BEFORE BEGINNING*

Simple instructions: We are improving our Marta Interface from Exercise 5!

To begin, please move a copy of your React app folder from Exercise 5 into Exercise 6.

You will again need to initialize the React app again as its not recognized as one after movement, to do this run `npm i` after you `cd` into your folder. Then, run `npm start` in command *line* or terminal in that folder to see the app display.

We are no longer using static data! Instead we are calling this url: http://13.59.196.129:3001/. You can get the filtered trains for each line using this link by adding http://13.59.196.129:3001/arrivals/[line], for example, to get the trains from the gold line do http://13.59.196.129:3001/arrivals/gold. 

Next, use links and routers to link between pages instead of having each full page display as a component on App.js. Each page should also be able to link back to the main page.

We are going to incorporate pagination to look through the trains in a more pleasing, not endlessly scrolling, way! We want to display 10 trains maximum at a time, and at the bottom of each page, we should be able to click right or left to go to the next or previous page. (Only if there is a page to go to, otherwise, a button should not appear!). A fun bonus would be to track the page you are on using a counter.

Our navbar is now going to be operational! Make it so that when you click on a station in the navbar, it will stay highlighted, and the trains that are displayed are filtered by those currently approaching that station. *Originally we called a file to get the stations that are in the navbar. Now you can use the api link given before to get an object holding the stations for a specific train by calling http://13.59.196.129:3001/stations/[line]*

We are going to make the buttons we created before operational. When a button is clicked it will filter the trains by the filter. When an 'on' and the button is clicked again the filter will go away. More than one button can be used to filter the data at a time, so signify that certain filters are on (you could do this by making the button color faded if it is on).

**Requirements:**
- Call the MARTA API by fetching from the link provided: http://13.59.196.129:3001/
- Use routing to connect between pages
- Incorporate pagination, so that only a maximum of 10 trains display on a page at a time
- Make the navbar functional so that the trains are filtered by one station at a time
- Make the four buttons from Exercise 5 functional so that the trains are filtered by one or more buttons at a time

**Figma Pages:**
