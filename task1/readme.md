# Task1 Auth API

A simple authentication API built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- JWT-based authentication
- Input validation with express-validator
- Password hashing with bcryptjs

## Project Structure

```
task1/
  controller/
    auth.controller.js
  models/
    user.modle.js
  routes/
    auth.routes.js
  utils/
    generateToken.js
  index.js
  .env
  package.json
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd task1
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add:
   ```
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/task1-auth-db
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Register

- **POST** `/api/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Login

- **POST** `/api/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```


