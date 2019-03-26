# Clear Capital Interview Project - Sr Software Engineer


an API-service  server is located at services/api folder

Web server is located at service/web

### usage


please make sure install Docker.

and run the following command

```
docker-compose up --build

```
the docker will run the API server(local port 8080) and website(local port 8000)
you should able to  see the webpage at http://localhost:8000

without docker please go to services/api folder run

```
npm install
npm start

```
then go to services/web folder run

```
npm install
npm start

```
you should able to  see the webpage at http://localhost:3000



## Architecture

| Name             | Service | Container   | tech                   |
|------------------|---------|-------------|------------------------|
| Web              | Web     |   web       | React,Redux,Saga,Antd  |
| api-service      | API     | api-service | Node,Express,Mongoose,Joi|


##


## WebSite Map

| Pages            | Usage   and   Des                    |
|------------------|-------------------------------------------------|
| Login            | Login                                           |
| UserInfo         |  UI/UX Design Challenge--the profile page        |
| RESTfUL          |  Web Service Engineering Challenge |
| JS               |  JS Engineering Challenge |  |
| ETL              |  ETL Engineering Challenge |  |


##



### the structure of the project.

there are tons of ways to structure the react project. I would love to change my preference for the future team. However, if I make the decision will choose the following structure which I used in this project.
##
|                  |  |     |                   |
|------------------|---------|-------------|------------------------|
| page             |                                                |
|     | fns     |  |   (all the key algorithm for model)          |
|     |model     |  |   (all the key algorithm for model)          |
|     |    | actions |  (action sand action creaters )        |
|     |    | saga | (injected to this page)       |
|     |    | reducer | (injected to this page)       |
|     |    | reducer | (I normally use reselector ,did not use it because there      |
|     | styles     |  |   (css)          |
|     | sub-page-components     |  | (only used for this page,may create a folder for it)        |
|     | index    |  |            |

##


### saga, reducers

only root reducer is inited at the beginning, other reducers and sagas are injected when I need them. the main config file is in the config/configure store.js   the rest parts are in the utils folder.



### Algorithm and code style
 
To Approve I am good at Native Javascript, when process the object or array, I only used Native JavaScript instead of Underscore and lodash and I am really good at Ramda.js

the recompose(https://github.com/acdlite/recompose) is used in this project for injecting lifecycle and combine functions by using compose

##





### Login Page

 You could input an email address and any password to login to the main page

##

## extra word about Challenges

### ETL Engineering Challenge


Two Callback functions are used  onFileLoaded and filterCallback
onFileLoaded is used for processing the JSON Data and Header
filterCallback is used for the future need for data validation.
and the key Algorithm is parserAlgorithm.js in the fns folder.


### Web Service Engineering Challenge

for the back-end:
I used Mongodb for database and the mlab is the  MongoDB database provider), I  used Mongoose for object modeling, joi.js is used for extra data validation. there are some extra APIs developed for future use.
For front end:
Saga is used to handle the async flow, the saga files demonstrate my ability to use redux-Saga. and All CRUD calls are handled in one page with Modal.


### JS Engineering Challenge

The Search Algorithms are in searchAlgorithm file of fns folder.
there are to functions, strictSearch and fuzzySearch. you could use the switch button to switch
the mode.

### UI/UX Design Challenge

there is no description and data for dashboard. So I did nothing about that dashboard page.
and the UserInfo is for that profile.html

The user data was loaded when user login, so there is no need to use the saga. I inject a simple state by using
recompose instead use the redux to reduce  the complexity


# code-challenge

## Introduction

This project is designed as a quick exercise to gauge a candidate's
understanding of general programming knowledge and/or user experience design.

## Terms & Conditions

Challenges are time restricted based on which challenges you have accepted or
have been asked to complete.

- 2 days for candidates only doing 1-2 challenges
- 5 days for candidates doing all challenges

*Note: Use of third-party plugins other than those defined within project
is allowed. But please take into account to demonstrate your strengths and
not leave your experience and capabilities to question. No commercial or
proprietary plug-ins are allowed.*

Build this project out in the most appropriate way possible.  Treat it as a
"real-world component" that will be added into our system.  Feel free to
restructure/enhance the project as you see fit. However, you must follow the
restrictions described above. Lastly, solutions should be easily built on
a standard linux, osx machine or browser.

## The Challenges

### ETL Engineering Challenge

Create a solution to upload data in a single customers table using the mapping
and data files below.

```
etl/map1.csv
etl/data1.csv
etl/map2.csv
etl/data2.csv
```

### Web Service Engineering Challenge

Create a "RESTful" web services to create, read, update, delete and search
customers table. *Note: using mysql is optional. The schema is provided for
reference purposes only.*

```
ws/customers.sql
```

### JS Engineering Challenge

Create an app to search and view customer data. Use the files below to start.

```
js/customers.json
js/index.html
```

### UI/UX Design Challenge

Create a visual to represent customers dashboard and profile. Execute as though you have full reign on feature scope for each page. Use the files below to start.

```
ui/dashboard.html
ui/profile.html
```

## Questions

If you have questions or need clarification on the project, please feel
free to send an email to your recruiting contact, and they will be happy
to assist you.

## Submission

Your solution is expected to be complete in the allotted time from receiving
this challenge. Good Luck!!!

Confidentiality Notice
------------------------------------------------------------------------------

Please do not redistribute or make this project/challenge public.

This email message, including any attachments, is for the sole use of the
intended recipient(s) and may contain confidential or legally privileged
information.  Any unauthorized review, use, disclosure or distribution is
prohibited.  If you are not the intended recipient, please contact the sender
by reply email and destroy all copies of this original message.
