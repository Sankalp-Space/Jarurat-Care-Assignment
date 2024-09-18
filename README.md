Technology Stack
Backend: Node.js, Express.js
Database: MongoDB
Tools: Postman (for API testing), Git (for version control)



Setup Instructions
Follow these steps to clone and run the project on your local machine.

1. Clone the Repository
Open your terminal and run the following command to clone the project repository to your local machine:


git clone https://github.com/Sankalp-Space/Jarurat-Care-Assignment.git


Navigate into the project directory:

cd Jarurat-Care-Assignment



2. Install Dependencies
After cloning the repository, you need to install the required dependencies. Run the following command:

npm install

This command will install the necessary packages listed in the package.json file, such as Express, Mongoose, and Body-Parser.

3. Set Up MongoDB

You can choose either of the following options to set up MongoDB:

Option 1: Local MongoDB

Ensure that you have MongoDB installed and running on your machine. By default, the project is configured to connect to a local MongoDB instance at mongodb://localhost:27017/healthcare.


Option 2: MongoDB Atlas

If you prefer to use MongoDB Atlas, follow these steps:

Sign up for a free account at MongoDB Atlas.
Create a new cluster and database.
Get your MongoDB connection string from Atlas.
Replace the connection string in config/db.js with your MongoDB Atlas connection URI.


4. Start the Server
Once MongoDB is set up and running, you can start the server using the following command:

 node app.js
 
This will start the Express server on port 5000. You can access the API at http://localhost:5000.

5. Testing the API
You can test the API using tools like Postman or cURL. Here are the available endpoints:

Add a new service:
POST /api/services

Get all services:
GET /api/services

Update a service:
PUT /api/services/:id

Delete a service:
DELETE /api/services/:id

Make sure to use the correct body format for POST and PUT requests.

6. Environment Variables (Optional)

If you are using environment variables for sensitive information such as the MongoDB URI, create a .env file at the root of your project with the following structure:



MONGO_URI=your-mongodb-uri

PORT=5000



And make sure to use dotenv in your app.js:

javascript

require('dotenv').config();



7. Stopping the Server:
   
To stop the server, press Ctrl + C in the terminal where the server is running.



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

Validation
The following validations are in place:
name: Required field (String)
price: Required field (Number)
If either of these fields is missing, a 400 Bad Request response will be returned with an appropriate error message.

Database
This project uses MongoDB to store healthcare services data. Ensure you have MongoDB running locally or use MongoDB Atlas for cloud storage.

Local MongoDB: Make sure MongoDB is installed and running on your machine.
MongoDB Atlas: You can sign up for a free MongoDB Atlas account and replace the MongoDB URI in the project configuration with your Atlas credentials.

Testing
Testing the API can be done using Postman, an API testing tool. You can test all the API endpoints listed above by sending requests and viewing the responses.
Postman Collection link :https://api.postman.com/collections/36163184-153295e2-7697-4bb0-bbf1-1cbc1feed583?access_key=PMAT-01J833VYWW69E5K78QGE1BWGJJ

Example Postman Tests
Create Service: Send a POST request to http://localhost:5000/api/services with a JSON body containing service details.
Get Services: Send a GET request to http://localhost:5000/api/services to retrieve all services.

