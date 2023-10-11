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

We are going to use routers instead of links to access pages as it is a cleaner way to go between pages.

Our navbar is now going to be operational!

We are going to make the buttons we created before operational.

**Requirements:**
- Call the MARTA API by fetching from the link provided: http://13.59.196.129:3001/
- Use routing to connect between pages instead of links
- Make the navbar functional so that the trains are filtered by stations
- Make the four buttons from Exercise 5 functional so that the trains are filtered by one button at a time

**Figma Pages:**
