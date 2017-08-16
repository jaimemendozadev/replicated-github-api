# [Simple GitHub API](https://github.com/jaimemendozadev/replicated-github-api)

Simple GitHub API does one thing, retrieves a GitHub user's SSH Keys.

## Table of contents

- Registering the API on GitHub
- Create a `.env` file
- Starting the API
- Fetching the GitHub SSH Keys
- Created by

## Registering the API on GitHub 

To get the API working locally on your computer, you'll need to register a new OAuth Application on your own personal GitHub account. To do that, follow the steps outlined in [Registering OAuth Apps](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/) in the GitHub documentation.

Essentially you're registering a new OAuth app on GitHub so you can get the following three pieces of information:

- Client ID
- Client Secret
- Application Name (herein referred to as the User Agent)

You'll store the above pieces of information inside a `.env` file at the root of the project directory. Without the `.env` file, your API can't make authenticated requests to the GitHub API and you won't be able to fetch any data.

## Create a `.env` file

Fire up your terminal and create a new `.env` by simply running `$ touch .env`. 

After creating the `.env` file, use your text editor to enter the Client ID, Secret, and User Agent into separate lines inside the `.env` file. There should be no spacing between the lines and do not end the line with punctuation or spacing. Please type the credentials exactly as they appear in the screenshot. 

  
![.env Screenshot](/img/env-screen-shot.png?raw=true ".env Screenshot ")  

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to the following `process.env` values when you make a request to the GitHub API.

![text-editor Screenshot](/img/text-editor.png?raw=true ".text-editor ") 

## Starting the API

After all the prep work is done at the root of the project directory, run `$ npm start`. 

Fire up your favorite web browser and go to `http://localhost:3000/api`. You'll see the welcome page.


## Fetching the GitHub SSH Keys

The API has two main routes:

```
  get('/fetch/:username', callbackFunction);

  post('/fetch', callbackFunction);

```

Using [Postman](https://www.getpostman.com/), a powerful GUI platform that makes API calls on your behalf, we can use our API to talk to the GitHub API to fetch either a single user or multiple users' SSH keys.

To fetch a single GitHub user's SSH Keys, 

- open Postman, 
- enter the following URL in the address box `http://localhost:3000/api/fetch/GitHubUserName`, 
  - make sure the tab says `GET`, 
- and press `SEND`. 

You should see a JSON object with a user's SSH Keys if they exist. If they don't exist, you'll still get an object with the GitHub user's name as the key, and a value of `["Error getting API Keys"]`.

![get-one Screenshot](/img/get-one.png?raw=true ".get-one ") 


You can also simulate fetching multiple GitHub users from an HTML Form `POST` request by 

- entering a raw JSON object with a `key => [array of GitHub users]` in the body field, 
- enter the URL `http://localhost:3000/api/fetch/`, 
  - make sure the tab says `POST`, 
  - the radio button says `raw` 
  - and flag says `JSON(application/json)`, 
- and press `SEND`. 

![post-json Screenshot](/img/post-json.png?raw=true ".post-json ") 





You should see a JSON object with each user set as a key, and an array of corresponding SSH keys for each user if they exist. If an error occurred for any of the users while retrieving the keys, you'll still get an object with the GitHub user's name as the key, and a value of `["Error getting API Keys"]` for the user where there was an error retrieving the keys from GitHub.


![post-fetch Screenshot](/img/post-fetch.png?raw=true ".post-fetch ") 



## Created by

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)