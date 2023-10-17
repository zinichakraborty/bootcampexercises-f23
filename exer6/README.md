# Exercise 6 - Advanced Marta Interface

## Description
In this exercise, bootcampers will familiarize themselves with state management and hooks.

## Submission
See the submission instructions down below. 
- **Due Date**: 10-19-2023

## Instructions

Simple instructions: We are improving our Marta Interface from Exercise 5!

To begin, please move a copy of your React app folder from Exercise 5 into Exercise 6.

You will need to initialize the React app again as it is not recognized as one after movement, to do this run `npm i` after you `cd` into your folder. Then, run `npm start` in the command line or terminal in that folder to see the app display.

We are going to incorporate useState to render the page based on each train line. Currently, we hardcode the line's state, but we want the user to be able to move through lines on the interface. We do this by adding four buttons that will change state when clicked.

First, import useState by adding `import React, { useState } from 'react';` to the top of `LinesPage.js` and inside the function, but above the return add state for line and for the buttons that list the timing and directions of the train, so that the current states are `useState("gold")` and `useState(["Arriving", "Scheduled", "Northbound", "Southbound"])`. Now, inside the return we will add four buttons before the TrainList component, and title them each by the line colors. OnClick for each of these buttons should set the state of the line to the color of the title of the button and set the buttons array to match the directions of the line. For example, the green line should have `setButtons(["Arriving", "Scheduled", "Eastbound", "Westbound"])`. Both the line and button states should be added as props to the TrainList component and when a line's button is clicked, the only trains that should be displayed are from that line.

We are no longer using static data! Instead, we are calling this URL: http://13.59.196.129:3001/. You can get the filtered trains for each line using this link by adding http://13.59.196.129:3001/arrivals/[line]; for example, to get the trains from the gold line, call http://13.59.196.129:3001/arrivals/gold. 

*Important note:* Previously we learned how to call from an API using fetch(); however, React can have issues with rendering using fetch as if the called data has not arrived yet but is being asked to be displayed there will be an issue. Instead, we will use `axios` and a hook called `useSWR` which you can look into on your own time that allows for asynchronous calls to be handled nicely by including loading and validating states during the call. First, we need to import these libraries, so in the file that you import trainData, add these to the top:
```
import useSWR from 'swr'
import axios from 'axios'
```
You need to install those libraries as well so you can import them. To do this, in terminal where you do `npm start` for the React app, do `npm install swr` and `npm install axios`. The dependencies should be added to your package.json and package-lock.json files now.

Now, useSWR has two parameters, the URL and a fetcher which actually calls the URL, so inside the function, but before the return statement, add this: `const { data, error, isLoading, isValidating } = useSWR("http://13.59.196.129:3001/arrivals/[line]", fetcher)` with the line being replaced with the correct line name depending on which line's button is pressed. The const `data` that is returned is the train data filtered by that line which can be used as props in the return. We also need to add the fetcher to account for the other parameter in useSWR, so above this line of code also add:
```
const fetcher = async (url) => {
    const res = await axios.get(url)
    return res.data
}
```

Now, we do not immediately get that data, the data can be loading or validating before it is actually returned as can be determined by the booleans `isLoading` and `isValidating`. To address this, we do conditional rendering! Add these two lines after the previous code and before the return: `if (isLoading) return <div>Loading</div>` and `if (isValidating) return <div>Validating</div>`, this way we can wait for the data to no longer be loading or validating to return the actual information we wanted and we have something actually returning meanwhile to let us know what is causing a delay.

Our navbar is now going to be operational! Make it so that when you click on a station in the navbar, it will become highlighted, and the trains displayed are filtered to display only those currently approaching that station, so for Doraville, we only want trains with `{"STATION": "DORAVILLE"}`.

We are going to make the buttons we created before operational. When a button is clicked it will filter the trains by the filter titled on the button. When a button is 'on', if it is clicked again the filter will go away. More than one button can be used to filter the data at a time, so make it identifiable that a button is currently "on" (you could do this by making the button color faded if it is on).

**Requirements:**
- Call the MARTA API by fetching from the link provided: http://13.59.196.129:3001/
- Incorporate state buttons to display trains based on each line color (gold, red, green blue)
- Make the navbar functional so that the trains are filtered by one station at a time
- Make the four buttons from Exercise 5 functional so that the trains are filtered by one or more buttons at a time

##Display Examples
*Gold*
<img width="500" alt="Screenshot 2023-10-16 at 10 08 13 PM" src="https://github.com/zinichakraborty/bootcampexercises-f23/assets/113480497/ab39f0c9-83d8-4232-90da-d026aca7ef7e">
*Green*
<img width="500" alt="Screenshot 2023-10-16 at 10 08 22 PM" src="https://github.com/zinichakraborty/bootcampexercises-f23/assets/113480497/990cb8e8-8441-4f05-bc1f-f9991bf977bb">

