Healthcare Service Management API


Project Overview
The Healthcare Service Management API is a simple RESTful API built using Node.js, Express, and MongoDB. It allows users to manage a list of healthcare services with functionalities to add, retrieve, update, and delete services. The API is designed with basic validation and follows RESTful principles to ensure a clean, scalable design.


Features
Add new services with fields for name, description, and price.

Get all services to retrieve a list of available healthcare services.

Update existing services to modify their details.

Delete services to remove them from the list.

Basic validation for required fields (service name and price).


Technology Stack
Backend: Node.js, Express.js
Database: MongoDB
Tools: Postman (for API testing), Git (for version control)

Prerequisites

Before you can run this project locally, ensure you have the following tools installed:

Node.js (v14 or above)
MongoDB (local installation or MongoDB Atlas for cloud)
Git (for version control)


Getting Started:

Follow these instructions to set up the project on your local machine.

Installation:

Clone the repository: 


git clone https://github.com/Sankalp-Space/Jarurat-Care-Assignment.git



cd Jarurat-Care-Assignment



Install dependencies:
npm install







Set up MongoDB:
If you are using MongoDB locally, ensure that MongoDB is installed and running. Alternatively, if you are using MongoDB Atlas, update the connection string in the config/db.js file with your MongoDB URI.





Running the Application

Start the server:

node app.js



The API should now be running at http://localhost:5000.



You can test the API using Postman or cURL.
API Endpoints

#Add a New Service
Method: POST
Endpoint: /api/services
Body:
json
{
  "name": "General Checkup",
  "description": "A comprehensive health checkup for general wellness.",
  "price": 1500
}

Response:
json
{
  "_id": "mongodb_id",
  "name": "General Checkup",
  "description": "A comprehensive health checkup for general wellness.",
  "price": 1500
}


#Get All Services
Method: GET
Endpoint: /api/services
Response:
json

  {
    "_id": "mongodb_id",
    "name": "General Checkup",
    "description": "A comprehensive health checkup for general wellness.",
    "price": 1500
  }

#Update a Service
Method: PUT
Endpoint: /api/services/mongodb_id
Body:
json

{
  "name": "Cardiology Consultation",
  "description": "Consultation with a heart specialist.",
  "price": 1399
}


#Delete a Service
Method: DELETE
Endpoint: /api/services/mongodb_id

Validation:

The following validations are in place:
name: Required field (String)
price: Required field (Number)

If either of these fields is missing, a 400 Bad Request response will be returned with an appropriate error message.



Database :

This project uses MongoDB to store healthcare services data. Ensure you have MongoDB running locally or use MongoDB Atlas for cloud storage.

Local MongoDB: Make sure MongoDB is installed and running on your machine.

MongoDB Atlas: You can sign up for a free MongoDB Atlas account and replace the MongoDB URI in the project configuration with your Atlas credentials.



Testing:

Testing the API can be done using Postman, an API testing tool. You can test all the API endpoints listed above by sending requests and viewing the responses.

Postman Collection link :https://api.postman.com/collections/36163184-153295e2-7697-4bb0-bbf1-1cbc1feed583?access_key=PMAT-01J833VYWW69E5K78QGE1BWGJJ

Example Postman Tests:

Create Service: Send a POST request to http://localhost:5000/api/services with a JSON body containing service details.

Get Services: Send a GET request to http://localhost:5000/api/services to retrieve all services.


Here’s some example data you can use for testing the API:

[
  {
    "name": "General Checkup",
    "description": "A comprehensive health checkup for general wellness.",
    "price": 1500
  },
  {
    "name": "Cardiology Consultation",
    "description": "Consultation with a heart specialist.",
    "price": 3000
  },
  {
    "name": "Physiotherapy Session",
    "description": "A session with a certified physiotherapist.",
    "price": 1200
  }
]



