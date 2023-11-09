# Project 2 - Animal Training App

## Description
For this project, you will create a full stack animal training management app! Your job for the app is to develop a frontend and backend that interact with each other for deployment functionality to manage different users, animals, and training logs. Schemas for these data models can be found in `Schemas.md`.

### Submission
- Present your final project during lecture on 11/30/2023
- **Due: 11/30/2023**

### Setup
- Create a Next App
- Install React dependencies
- In your Next app add a `server` folder and `middleware.js` file outside of `src`
- In your `server` folder add a `mongodb` and `utils` folder
- In your `mongodb` folder add a `models` and `actions` folder as well as an `index.js` file that connects to MongoDB
- Create a `.env` file outside of all folders that stores the information needed to connect to the database.
- Going into `src` create a `componenents` folder outside of `pages`

### Tips
- Remember to install dependencies as needed and run your application by doing `npm run dev`
- Testing the backend with Postman before connecting it to frontend will help with debugging

## Frontend
- We will be incorporating all we have learned thus far such as CSS, componenets, hooks/state, conditional rendering, and routing!

### Log In Page
- This page will be the first page to display when running the application
- It should allow a user to input their email and password and click a log in button
    - If the log in is succesful (handled in backend), we are routed to the Training Logs Dashboard
    - If the log in is unsuccesful then there is some display to inform the user of the issue and remains on the log in page
- It also has a link to the Create Account Page in case the user does not have an account in page
- *Important:* Make sure to track the user's id through hooks as your route to other pages

### Create Account Page
- There will be four inputs on this page: Full Name, Email, Password, and Confirm Password
- We will also have a checkbox for if the user is an Admin or not
- There will be a clickable Sign Up button that once clicked:
    - First compares Password and Confirm Password inputs and if they do not match notifies the user and keeps the user on the page
    - Second handles creating a user using your backend code
        - If creating the user was succesful then it routes to the Training Logs Dashboard
        - If creating the user was unsuccesful then there is some display to inform the user of the issue and remains on the create account page
- Below the button there will also be a link to the Log In Page in case the user has already made an account
- *Important:* Make sure to track the user's id through hooks as your route to other pages

### Training Logs Dashboard
- This page will have the sidebar and search bar componenets along with displaying all training logs that the current user has for all of their animals.
- Training Log Components display the title, date of the log, user's name, animal's name, animal's breed, hours logged, and the desciption of the log. They are ordered by date.
- There is also a button that when clicked displays a form to create a training log.
    - If the creation is succesful then it just goes back to the dashboard
    - If the creation is unsuccesful it stays on the form and notifies the user or the error

### Animals Dashboard
- This page will have the sidebar and search bar componenets along with displaying all animals that the current user owns.
- Animal componenets display an image of the animal from a Google image URL string, its name, breed, owner, and hours it has been trained thus far.
- There is also a button that when clicked displays a form to create an animal.
    - If the creation is succesful then it just goes back to the dashboard
    - If the creation is unsuccesful it stays on the form and notifies the user or the error

### SideBar Component
- This componenent will hold links to the training log dashboard, animal dashbaord, and profile page if implemeneted.
- If the current user is an admin it will also display links to the Admin View Pages.
- At the bottom it will display the current user's name and if the user is an admin or not as well as a link to log out (go to the log in page)

### Search Bar Component
- This component is a simple search bar that either filters componenets when you click an enter button next to the search or (BONUS) as you type without using a button.
- For animal/user pages the search limits by the name of the animal/user and for training log pages the search limits by the title of the training log.

### Admin View Pages
- You will create three pages to display all users, training logs, and animals in the database regardless of user along with the sidebar and search bar components.

### (BONUS) Profile Page
- This page will simply display the user's full name, email, password, and whether or not the user is an admin.
- You can incorporate storing a URL for a profile picture for the user.
- You can also incorporate an input tag and button that allows you to udpate the user's email.

## Backend
- We will be incorporating all we have learned thus far such as API endpoints, database querying, and middleware!
- Create all endpoints in `src/pages/api` and handle them in your `server` folder

### Create Operations
- Create a POST endpoint at `/api/user` to create a user in the database based on information passed into the body
- Create a POST endpoint at `/api/animal` to create an animal in the database based on information passed into the body
- Create a POST endpoint at `/api/training` to create a training log in the database based on information passed into the body (the date stored will be the date at the time of creation)
- Note these requests will have a similar request body and response statuses:
    - Body: A JSON containing the user/animal/training log information for the user/animal/training log we want to create
    - Response:
        - **Status 200 (Success):** If the body contains all of the information and is able to create the user/animal/training log
        - **Status 400:** If the body contains incorrect information
        - **Status 500:** For any other errors that occur
- **BONUS:** In the training log creation endpoint (3), we want to add in a check to ensure that the animal specified in the training log belongs to the user specified in the training log. Add in code to do this.
    - Response:
        - **Status 400:** If the training log animal is not owned by specified user

### Update Operations
- Create a PATCH endpoint at `/api/training` to edit the `description` or the `hours` of a training log.
- Create a PATCH endpoint at `/api/animal` to update the `hoursTrained` of an animal whenever a new training log is made or updated
- (BONUS) Create a PATCH endpoint at `/api/user` to update the email of a user if you incorporate a profile page
- Note these requests will have a similar request body and response statuses:
    - Body: A JSON containing the animal/training log id for the animal/training log we want to edit along with the information we want to update
    - Response:
        - **Status 200 (Success):** If the body contains all of the information and is able to update the animal/training log
        - **Status 400:** If the body contains incorrect information (i.e. an animal doesn't exist)
        - **Status 500:** For any other errors that occur

### Read Operations
- We want to add admin functionality to this backend API to allow the admins to view all the data in the database
    - Create a GET endpoint at `/api/admin/users` which will return all of the users in the database (not with their passwords)
    - Create a GET endpoint at `/api/admin/animals` which will return all of the animals in the database
    - Create a GET endpoint at `/api/admin/training` which will return all of the training logs in the database
    - Response:
        - **Status 200 (Success):** If we are able to retrieve the users/animals/training logs
        - **Status 500**: For any other errors
    - **BONUS:** These three endpoints can implement pagination -- ideally using the document IDs or some other property that has natural ordering (i.e. take a look at approach 2 in this [article](https://www.codementor.io/@arpitbhayani/fast-and-efficient-pagination-in-mongodb-9095flbqr))

### Middleware
- We want to create a resuable middleware function that takes in an `allowedMethods` array of strings i.e. `['POST', 'GET', 'DELETE']` and a `method` string with the current method being used in the request. This function should check if `method` is in `allowedMethods`
	- Response
		- **Status 400**: If the request `method` is not in `allowedMethods`
		- **return NextResponse.next()** - let the request through

### (BONUS) Delete Operations
- Incorporate a way to delete users, animals, and training logs (which would cause animal `hoursTrained` to be decremented) and follow similar response formats as before for error handling.