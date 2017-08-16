# [Simple GitHub API](https://github.com/jaimemendozadev/replicated-github-api)

Simple GitHub API does one thing, retrieves a GitHub user's SSH Keys.

## Table of contents

- Registering the API on GitHub and creating secret credentials
- Starting the API
- Creator

## Registering the API on GitHub and creating secret credentials

To get the API working locally on your computer, you'll need to register a new OAuth Application on your own personal GitHub account. To do that, follow the steps outlined in [Registering OAuth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/) in the GitHub documentation.

Essentially you're registering a new OAuth app on GitHub so you can get the following three pieces of information:

- Client ID
- Client Secret
- Application Name (referred to now as the User Agent)


You'll need the above pieces of information after registering the app to create a new `.env` file at the root of the project directory. Without a `.env` that has the ID, Secret, and User Agent, your API can't make authenticated requests to the GitHub API so you can properly fetch data.

Next, fire up your terminal and create a new `.env` by simply running `$ touch .env`. 

After creating the `.env` file, use your text editor to enter the Client ID, Secret, and User Agent into separate lines inside the `.env` file. There should be no spacing between the lines and do no end the line with punctuation or spacing. Please type the credentials exactly as they appear in the screenshot. 

  
![.env Screenshot](/img/env-screen-shot.png?raw=true ".env Screenshot ")  

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to the following `process.env` values when you make a request to the GitHub API.

![text-editor Screenshot](/img/text-editor.png?raw=true ".text-editor ") 

## Starting the API

After all the prep work is done at the root of the project directory, run `$ npm start`. 

Fire up your favorite web browser and go to `http://localhost:3000/api`. You'll see the welcome page.

Our API has only two main routes:

<code>
  router.get('/fetch/:username', callbackFunction);

  router.post('/fetch', callbackFunction);

</code>

Using [Postman](https://www.getpostman.com/), a powerful GUI platform that makes API calls for you, we can use our API to talk to the GitHub API to fetch either a single user or multiple users' SSH keys.


To fetch a single GitHub user's SSH Keys, open Postman, enter the following URL `http://localhost:3000/api/fetch/GitHubUserName` in the URL Address box, make sure the tab says `GET` and press `SEND`. You should see a JSON object with a user's SSH Keys if they exist. 

![get-one Screenshot](/img/get-one.png?raw=true ".get-one ") 


You can also simulate getting multiple GitHub users from a HTML Form `POST` request by entering a raw JSON object with a key/array of GitHub users in the body field, enter the URL `http://localhost:3000/api/fetch/`, make sure the tab says `POST`, the button says `raw` and flag says `JSON(application/json)`, and prese `SEND`. You should see a JSON object with each user's SSH Keys if they exist.

![post-json Screenshot](/img/post-json.png?raw=true ".post-json ") 


## Creator

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)