# Express-Github-API
This a REST microservice developed using Expressjs. 

# Functional specs
* The API lists the languages used by the trending public Github repos.
* It calculates the total number of the repos (100 repos - repos with `null` language) 
* For every language, it returns : 
  * The number of repos using that language.
  * The list of those repos.
# Technologies Used
* [Nodejs](https://github.com/nodejs/node) : JavaScript runtime enviromment.
* [Express](https://github.com/expressjs/express):  Node.js web application server framework.
* [axios](https://github.com/axios/axios) : Promise based HTTP client for the browser and Node.js.
* [GitHub REST API](https://docs.github.com/en/rest) : APIs to interact with Github and fetch public informations about it.
* [Moment.js](https://github.com/moment/moment) : JavaScript date library.

# Available Endpoints
Verb | endpoint | description |
--- | --- | --- |
GET | <a href="http://localhost:5000/api/repos/">/api/repos/</a> | Lists the trending languages in the last 30 days |
GET | <a href="http://localhost:5000/api/repos/2021-08-31">/api/repos/{date}</a> | Lists the trending languages in the last 30 days from the given date|

# Expected response

```json
{
  "total_count": "x",
  "result": [
     {
         "language": "languageX",
         "number of repos": "x",
         "repos ": [
             "repo1",
                 ...
             "repoN"
         ]
     },
        ...
  ]
}
```

# Getting Started

 * Clone the repo :
 
```shell
 git clone https://github.com/Selharem/Express-Github-API.git
```
 * Install the dependencies : 
 
```shell
 npm install
```
* Start the server : 
```shell
 npm start
```

Now, the app is running at http://localhost:5000 !


# Happy Coding