# RESTful API (Node, Express, Mongoose, ES6)

* RESTful API for Angular App  - <a href="https://github.com/mtrybus2208/Fast-note">Fast Note</a>
* Authentication is provided by JSON web tokens. 

## List of technologies used in project:

* Node
* Express
* Mongo DB
* Mongoose
* ES6
* JWT Authentication

## App requirements:
* Node.js
* Mongo DB

## Steps To start the App:
* Install all the depedencies by typing: `yarn install` or `npm install`
* Start mongodb server at `port 27017` (default app is looking for `C:\data\db`) 
* Now start the server by typing : `npm start` 
* App is running on: `localhost:3000`
* Use postman to send the GET, POST, DELETE, PUT request.


# API Endpoint Reference
## [User] - Create a new User
* @api POST /user/signup 
* @bodyParam `{ "email": string, "password": string }`

## [User] - Sign In
* @api POST /user/signin
* @bodyParam `{ "email": string, "password": string }`

## [Note] - Get all user notes
* @api GET /notes
* @Headers:
* `Key: Authorization, Value: Bearer + token`

## [Note] - Create a new note
* @api POST /notes/:noteId
* @Headers:
* `Key: Authorization, Value: Bearer + token`
* @bodyParams: 
* `{ title: string, description: string, date: string, tags: string, importance: number }`

## [Note] - Delete note
* @api DELETE /notes/:noteId
* @Headers:
* `Key: Authorization, Value: Bearer + token`

## [Note] - Edit note
* @api PATCH /notes/:noteId
* @Headers:
* `Key: Authorization, Value: Bearer + token`
* @bodyParams:
* `[ { "propName": string, "value": string } ]`
 


