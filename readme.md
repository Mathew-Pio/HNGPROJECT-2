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

### Create a New Person

- **URL:** `/api`
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "John",
}

**Response status 201 created**

## Update a Person

- **URL:** `/api/:user_id`
- **Method:** `PUT`

**Request Parameters:**

- `user_id` (string) - The ID of the person to update.

**Request Body:**

```json
{
  "name": "Updated Name"
}

## Fetch a Person

- **URL:** `/api/:user_id`
- **Method:** `GET`

**Request Parameters:**

- `user_id` (string) - The ID of the person to fetch.

**Response:**

- **Status:** 200 OK

**Example Response:**

```json
{
  "_id": "2",
  "name": "Josh",
}


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


