const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: `API documentation for the Contacts API. This API is your all-in-one solution for managing contact information with ease and precision. Designed to simplify contact management, it empowers you to create, retrieve, update, and delete contacts effortlessly.

**Key Features:**

- **Create Contacts:** Use the POST endpoint to add new contacts to your database. Simply provide contact details such as first name, last name, email, favorite color, and birthday in JSON format. Creating and organizing contacts has never been simpler.

- **Retrieve Contacts:** The GET endpoint offers the flexibility to fetch a list of all contacts or retrieve a specific contact by their unique ID. Seamlessly access contact information for your applications.

- **Update Contacts:** Need to update contact details? The PUT endpoint allows you to modify existing contacts with ease. Send the updated information in JSON format, and your database stays up-to-date.

- **Delete Contacts:** Remove unwanted contacts from your database effortlessly using the DELETE endpoint. Specify the contact's ID, and it's done.

**Sample Requests and Responses:** To assist you in getting started, we provide sample JSON requests and responses for each endpoint. These examples demonstrate how to interact with the API effectively.

**Error Handling:** Rest assured with our error responses and status codes. We've included clear error messages and codes to guide you through any unexpected scenarios.

**API Documentation:** Dive into the comprehensive API documentation below. Each endpoint is detailed with expected request structures, response formats, and usage examples. Discover best practices and unleash the full potential of the Contacts API.

Enhance your applications with seamless contact management. From creating new contacts to retrieving and updating existing ones, this API streamlines the process for a superior user experience. Take control of your contact data effortlessly.`
    },
    components: {
      schemas: {
        Contact: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            },
            lastName: {
              type: 'string'
            },
            email: {
              type: 'string',
              unique: true
            },
            favoriteColor: {
              type: 'string'
            },
            birthday: {
              type: 'string',
              format: 'date'
            }
          },
          required: ['firstName', 'lastName', 'email']
        }
      }
    }
  },
  // Define API routes to include in the documentation
  apis: ['./routes/contactRoutes.js']
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  // Serve Swagger documentation at /api-docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
