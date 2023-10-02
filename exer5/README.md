# Exercise 5 - Simple Marta Interface

## Description
In this exercise, bootcampers will familiarize themselves with UI/JSX, functional components, and props.

## Submission
See the submission instructions down below. 
- **Due Date**: 10-12-2023

## Instructions
*HIGHLY RECOMMEND READING THROUGH THE WHOLE README BEFORE BEGINNING*
Simple instructions: We are creating a simple Marta Interface for the gold line. This exercise will be built upon in Exercise 6.

Congrats on making it your first bootcamp React project!
To create your React app go to the exer5 folder in CommandLine or Terminal and run `npx create-react-app marta-interface`. After it finishes installing dependencies, go ahead and do `cd marta-interface`; you are now in your React app!

To view your code, run `npm start` in CommandLine or Terminal in that folder. Right now you should be seeing a bunch of stuff that React has naturally displayed whenever you initialize a React app. You can ignore everything except `index.js` and `App.js`. The `index.js` file is what you are actually seeing when you run `npm start`, and there is only an App component being displayed. The code for what the App component displays is in `App.js`. In `App.js` you will display your frontend code.

To get started, create a `server` and `components` folder within `src`. Inside the server folder you could include files like an `trainsapi.js` file that calls the Marta API. The call should return an array with each index stating all the information for each individual train somewhat like ([train1 data, train2 data, etc]). This data should be filtered after the call to only return all the train info for trains that are part of the *gold line*, so only `"LINE":"GOLD"`. When calling the Marta API, there are certain settings we want to include inside the async function to avoid issues. Those are listed below.
```
let requestSettings = {
        method: "get",
        url: "https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=aa09b111-e99b-4a7c-83f7-8cb6ce8857f7",
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    };
```
In the components folder, create a `Train.js` file. In this file you can create the design for an exportable Train component that takes in the data for one train and returns the display for it.

Finally, in the `App.js` file display each of the train components. *Hint* You do not need to display each component manually as the number of trains on a line or subject to change. Instead you can use the `map` function you used in Exercise 4 and a lambda expression inside the App component to take in the props at each index and display a component for each train's props.

Once you have reached this step, we will start the set you up for Exercise 6, we ask that you create a non-functional dropdown somewhere on the screen. (In Exercise 6 we will display information for each train line so the dropdown for each train line page will change). You can create a file called `stations.js` inside of the `server` folder that holds each of the train lines' stations. You can just copy this information and put it in that file: 
```
stationsByLine = {
    red: ["North Springs", "Sandy Springs", "Dunwoody", "Medical Center", "Buckhead", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
    gold: ["Doraville", "Chamblee", "Brookhaven", "Lenox", "Lindbergh Center", "Arts Center", "Midtown", "North Avenue", "Civic Center", "Peachtree Center", "Five Points", "Garnett", "West End", "Oakland City", "Lakewood/Ft. McPherson", "East Point", "College Park", "Airport"],
    blue: ["Hamilton E. Holmes", "West Lake", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood", "East Lake", "Decatur", "Avondale", "Kensington", "Indian Creek"],
    green: ["Bankhead", "Ashby", "Vine City", "GWCC/CNN Center", "Five Points", "Georgia State", "King Memorial", "Inman Park", "Edgewood"]
}
```
We can create a `dropdown.js` file in `components`. This will contain an exportable dropdown display component, which we can show in `App.js`. The stations that will be displayed for this exercise are the values in `stationsByLine.gold` that we can get from the `stations.js` file and insert as props for the dropdown component in `App.js`.

Lastly, we want four nonfunctional buttons to be displayed titled 'Arriving', 'Scheduled', 'Northbound', and 'Southbound'. These buttons will become operational in Exercise 6.

**Requirements:**
- Only work on `App.js` file and additional files not included by React unless otherwise necessary.
- In `src` create two folders: `server` and `components`.
- Call the Marta API inside the `server` folder using this url and following the settings listed above: "https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=aa09b111-e99b-4a7c-83f7-8cb6ce8857f7"
- Create a `Train.js` component inside the `components` folder that displays the information for each train 
- In `App.js` display all of the gold trains' datas by feeding each entry in the returned array from the api call into the `Train.js` component, so each train's data appears in the component's format.
- Include a nonfunctional dropdown that lists all the Gold stations and four nonfunctional buttons titled 'Arriving', 'Scheduled', 'Northbound', and 'Southbound'.

**Figma Pages:**
