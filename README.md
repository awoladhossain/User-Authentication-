# Full Stack Auth App

A full-stack authentication project featuring a React frontend (with Redux Toolkit and JWT) and a Node.js/Express backend API. This project demonstrates secure user login, token-based authentication, and seamless integration between frontend and backend.

## Features

- User registration and login
- JWT-based authentication
- Redux Toolkit for state management (frontend)
- Password hashing and validation (backend)
- Error and loading state handling
- Stores JWT token in localStorage
- Easily customizable for your own needs

## Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS (optional)
- **Backend:** Node.js, Express, MongoDB

## Project Structure

```
root/
  task1/        # Backend (Node.js/Express)
    controller/
    models/
    routes/
    utils/
    index.js
    .env
    package.json
    README.md
  task2/        # Frontend (React)
    src/
      app/
      components/
      features/
      App.jsx
      index.js
    package.json
    README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB (for backend)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd task1
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/auth-db
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd ../task2
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. (Optional) Set up Tailwind CSS if desired.
4. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

- Open [http://localhost:3000](http://localhost:3000) for the backend API.
- Open [http://localhost:3001](http://localhost:3001) (or the port shown) for the frontend app.
- Register or log in with your credentials. On successful login, a JWT token is stored in localStorage.

## API Example

**POST** `/api/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "user": { "id": "123", "email": "user@example.com" },
  "token": "jwt_token_here"
}
```
