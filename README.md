# REST API Project

This is a simple REST API built using **Express** and **MongoDB**. The project includes features such as workspace and channel management, user invitation, image upload, and authentication.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Run the App](#run-the-app)
- [Testing the API](#testing-the-api)

## Technologies

- **Node.js**: Server runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Multer**: Middleware for handling file uploads
- **Joi**: Validation library
- **JWT**: JSON Web Token for authentication

## Features

- User authentication (Signup, Login)
- Workspace creation and user invitations
- Channel creation in workspaces
- Image upload and linking to users
- Input validation using **Joi**
- Protected routes with JWT

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:MherTumanyan/workspace-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd workspace-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Make sure to set up the following environment variables in your `.env` file

## Run the App

To start the server, run: `npm run start`
The server will run on `http://localhost:5000`.

## Testing the API

You can use **Postman** or **cURL** to test the API endpoints. A Postman collection is included in the project root (`PostmanCollection.json`), which can be imported into Postman for easy testing.

### API Endpoints

#### Authentication

- **POST** `/api/auth/signup`: Register a new user
- **POST** `/api/auth/login`: Login and receive a JWT token

#### Workspace

- **POST** `/api/workspace`: Create a new workspace (protected route)
- **POST** `/api/workspace/invite`: Invite a user to a workspace (protected route)

#### Channel

- **POST** `/api/channel`: Create a new channel in a workspace (protected route)
- **GET** `/api/channel/:workspaceId`: Get all channels in a workspace (protected route)

#### Image Upload

- **POST** `/api/upload`: Upload an image (protected route)

### File Uploads

Uploaded files are stored in the `uploads/` directory. You can configure this as needed for production use.

## Postman Collection

You can find the **Postman collection** in the root directory of the project (`PostmanCollection.json`). Import this into Postman to test the API easily.
