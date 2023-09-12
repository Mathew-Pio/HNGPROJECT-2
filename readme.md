# My REST API

A simple REST API for managing "person" resources using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Setting Up the Database](#setting-up-the-database)
  - [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [Create a New Person](#create-a-new-person)
  - [Update a Person](#update-a-person)
  - [Fetch a Person](#fetch-a-person)
  - [Delete a Person](#delete-a-person)
- [Error Handling](#error-handling)
- [Examples of API Usage](#examples-of-api-usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (at least version 12.x)
- MongoDB installed and running
- Git (optional, for cloning the repository)

### Installing Dependencies

To install project dependencies, run the following command:

```bash
npm install

## Setting Up the Database

To set up the database for this project, follow these steps:

1. **Install MongoDB:** Ensure you have MongoDB installed on your system. If not, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

2. **Start MongoDB:** Start your MongoDB server. You can usually do this by running `mongod` in your terminal.

3. **Configure Connection:** Configure the database connection by setting the appropriate environment variables. Create a `.env` file in the root directory of your project and add the following environment variable:

    ```env
    MONGODB_URI=your-mongodb-connection-uri
    ```

    Replace `your-mongodb-connection-uri` with the actual MongoDB connection URI for your database.

4. **Database Name:** Ensure you have a database created in MongoDB that matches the name or URI specified in your connection settings.

With these steps completed, your project should now be able to connect to the MongoDB database.

## API Endpoints

The API provides the following endpoints for CRUD operations on the "Person" resource:

- **Create a Person**:
  - **POST /api/**
  - Add a new person to the database.

- **Read a Person**:
  - **GET /api/{name}**
  - Retrieve details of a person by name.

- **Update a Person**:
  - **PUT /api/{name}**
  - Modify details of an existing person by name.

- **Delete a Person**:
  - **DELETE /api/{name}**
  - Remove a person from the database by name.

## Request/Response Formats

### Create a Person (POST /api/)

**Request Format:**

```json
{
  "name": "Mathew Okononfua"
}
```

**Response Format (Success - 200):**

```json
{
  "name": "Mathew Okononfua"
}
```


### Read a Person (GET /api/{name})

- **URL:** `/api/:user_id`
- **Method:** `GET`

**Request Parameters:**

- `user_id` (string) - The ID of the person to fetch.

**Response Format (Success - 200):**

```json
{
  "_id": "2",
  "name": "Josh",
}
```

**Response Format (Not Found - 404):**

```json
{
  "detail": "Person with name 'Mathew Okononfua' already exists"
}
```


### Update a Person (PUT /api/{name})


- **URL:** `/api/:user_id`
- **Method:** `PUT`

**Request Format:**

**Request Parameters:**

- `user_id` (string) - The ID of the person to update.


**Request Body:**

```json
{
  "name": "Updated Name"
}

**Response Format (Success - 200):**

```json
{
  "name": "Mathew Pio"
}
```

**Response Format (Not Found - 404):**

```json
{
  "detail": "Person with 'Miracle Apata' already exists"
}
```

## Delete a Person

- **URL:** `/api/:user_id`
- **Method:** `DELETE`

**Request Parameters:**

- `user_id` (string) - The ID of the person to delete.

**Response:**

- **Status:** 200 OK

**Example Response:**

```json
{
  "message": "Person deleted successfully"
}
```

## Error Handling

- **400 Bad Request:** Indicates invalid request data or missing fields.
- **404 Not Found:** Denotes a resource not found error.
- **500 Internal Server Error:** Represents server-related errors.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)


