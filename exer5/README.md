# Exercise 5 - Simple Marta Interface

## Description
In this exercise, bootcampers will familiarize themselves with UI/JSX, functional components, and props.

## Submission
See the submission instructions down below. 
- **Due Date**: 10-12-2023

## Instructions
*HIGHLY RECOMMEND READING THROUGH THE WHOLE README BEFORE BEGINNING*

Simple instructions: We are creating a simple Marta Interface for each *line* on separate pages. This exercise will be built upon in Exercise 6.

Congrats on making it to your first bootcamp React project!
To create your React app go to the exer5 folder in command *line* or terminal and run `npx create-react-app marta-interface`. After it finishes installing dependencies, go ahead and run `cd marta-interface`; you are now in your React app!

To run your code locally, run `npm start` in command *line* or terminal in that folder. Right now you should be seeing a bunch of stuff that React has naturally displayed whenever you initialize a React app. You can ignore everything they have given except `index.js` and `App.js`. The `index.js` file is what you are actually seeing when you run `npm start`, and there is only an App component being displayed. The code for what the App component displays is in `App.js`. In `App.js` you will display your frontend code.

To get started, create a `pages`, `server`, and `components` folder within `src`. Move the `components` folder into `pages`. In the `pages` folder, create four pages titled `red.js`, `gold.js`, `blue.js`, and `green.js` for each line. Each of these pages should have all the code they display inside a single function that returns everything inside a divider, and can be exported, so we are treating them as components, such as below:

```
function Gold() {
  return (
    <div>
      //YOUR CODE
    </div>
  );
}

export default Gold;
```

Since we have not learned how to use routers yet, import each page into `App.js` and just display each one sequentially below each other.

Next, drag the `train-data.js` and `station-data.js` file that is in exer 5 into the `server` folder. We are using static data for now because updating what appears on screen in React using remote data requires using hooks which we will learn after this exercise has been released. The data is formatted identically to the MARTA API's data a (because it was copied from there), so it organized in a way that when called it returns an object that holds an array of train objects which consist of each train's data, so {[Train1's data, Train2's data, Train3's data , ...]}. Since each line has its own page, the called data should be filtered to only return info for trains that are part of the specific line. For example, for the gold line we only want an array of gold trains (i.e. only include objects with the property `"LINE":"GOLD"`).

In the components folder, create a `Train.js` file. In this file you can create the design for an exportable Train component that takes in the data for one train and returns the display for it. To display whether or not a train is *On Time* or *Delayed* check if the DELAY is T0S (if it is it is on time, and if not we consider it delayed). Follow the Figma page below for an aesthetic design of a train component or come up with your own design including the same information!

For each *line* page, display each of the train components for their line (first make sure to import the Train component into the file). *Hint: You do not need to display each component manually as the number of trains in a line or subject to change.* Instead you can use the `map` and `spread` functions you learned in Exercise 4 inside the App component to take in the props at each index and display a component for each train's props.

Once you have reached this step, we will start the setup for Exercise 6. We ask that you create a non-functional navbar somewhere on the screen. (In Exercise 6 we will display information for each train line so the dropdown for each train line page will change).

We can create a `navbar.js` file in `components`. This will contain an exportable navbar display component, which we can import into each page. The `station-data.js` file holds the stations for each line as an object with arrays associated with lines. For each page, the navbar component will be displayed with the props for their specific train, called from `station-data.js`. For example, for the gold line, we only want the gold stations, so we want `station-data.gold`.

Lastly, we want four nonfunctional buttons to be displayed titled 'Arriving', 'Scheduled', 'Northbound', and 'Southbound' on each of the pages. For the green and blue lines, use 'Eastbound' and 'Westbound' instead. These buttons will become operational in Exercise 6.

**Requirements:**
- In `src` create three folders: `pages`, `server`, and `components`.
- Call the static `train-data.js` file to get train data filtered by line.
- Create a `Train.js` component inside the `components` folder that displays the information for each train.
- In `App.js`, display the code in `red.js`, `gold.js`, `blue.js`, and `green.js` under each other.
- For each line's page, display each train's data by feeding each entry in the filtered array into the `Train.js` component as props.
- Include a nonfunctional navbar that calls the `station-data.js` file for each line to get the specific stations.
- Add four nonfunctional buttons titled 'Arriving', 'Scheduled', and 'Northbound'/'Southbound' or  'Eastbound'/'Westbound' depending on the line for each page.

**Figma Pages:**
