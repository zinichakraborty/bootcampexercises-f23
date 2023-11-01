# Exercise 8 - MARTA DB

## Description
In this exercise, bootcampers will familiarize themselves with querying MongoDB using Next.js.

## Submission
See the submission instructions down below.
- **Due Date**: 11-7-2023

## Instructions

We are going to start working with MongoDB using our knowledge of API endpoints! Make sure that once you `cd` into the app to do `npm i`.

### API ENDPOINTS

All API endpoints should exist in the `pages/api` folder of your Next.js project. This means all api routes will be prefixed with `/api` (helpful for testing).

```http
GET /
```
- returns the name, sprite, and type of random Pokemon

```http
GET /pokemon/:name
```
- returns the name, sprite, and type of a certain Pokemon

```http
GET /types/:type
```
- returns a list of Pokemon of this type

```http
GET /evolve/:name
```
- returns the next evolution step for a specified Pokemon. If the Pokemon is fully evolved, return the current evolution stage

```http
POST /battle
```
- Body of the request
	- `pokemon1` - the name of the first Pokemon to be battled (String)
	- `pokemon2` - the name of the second Pokemon to be battled (String)
- `pokemon1` and `pokemon2` are name strings sent in the **body** of the post request. Returns the pokemon with the higher base stat. 

### Tips
You can look at `hello.js` for a baseline for how to call and return from an endpoint.

Remember to set your status codes before returning: Inside your try/catch, if the data has successfully returned then set the code to `200`, if the data is invalid set it to `400`, and otherwise set the code to `500`.

Use `fetch` to call the Pokemon API and make sure to have two awaits within the async call: one for fetching from the URL, and another for converting the response to a JSON.

For the calls where we need to incorporate dynamic routing, the file should be titled with brackets, so that Next knows that it is a dynamic route.

To see your responses, use the browser or Postman, for example, `http://localhost:3000/api/pokemon/ditto` to get the Pokemon information for ditto.

You will end up having to make multiple calls to the PokeAPI for some of the GET requests.

**Requirements:**
- Create a Next App
- Only create folders/files within the api folder
- Complete all four endpoints and incorporate dynamic routing where needed
- Format the endpoints to account for invalid data or other issues with a try/catch and different return status codes
- Create a short video, maybe 0.5-1 minutes, showing that all your calls work through the browser or Postman and link it at the top of your ReadMe.

## Example Return for /pokemon/ditto

<img width="1196" alt="Screenshot 2023-10-25 at 3 58 05 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/bootcamp-f23/assets/113480497/500f7635-65b1-4a84-815f-f3de1d283d61">
