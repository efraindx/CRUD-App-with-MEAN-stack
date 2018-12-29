# CRUD-App-with-MEAN-stack
CRUD app with MEAN stack using the RESTful Local API contained in the folder: `api`, which has the routes for accept post, get, put and delete requests. In this example we've used the Angular's $resource for interact with the RESTful API.

# Prerequisites
[Mongo](https://docs.mongodb.com/manual/installation/)

[Node.js](https://nodejs.org/en/download/package-manager/)

[Nodemon](https://nodemon.io/): `npm install nodemon`

Mongoose: `npm install mongoose`

Express: `npm install express`

Body-Parser: `npm install body-parser`

# Configuration
Open the `server.js` file  and write your mongo database name here:
`mongoose.connect('mongodb://localhost/yourDatabaseName'`

# Test and Run
For test and run just run the following command in the root folder:
`npm run start`
This will run the application and if you make any change to the files the server will restart automatically thanks to Nodemon.

This application was runned and tested using following libraries versions:

MongoDB v4.0.4

Express 4.16.4

AngularJS v1.3.0-beta.2

Node.js 5.5.1
