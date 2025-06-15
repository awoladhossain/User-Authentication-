# Task 2 - React Redux Auth App

This is a simple React application that implements user login functionality using Redux Toolkit for state management and JWT for authentication.

## Features

- User login form
- Redux Toolkit for authentication state management
- Stores JWT token in localStorage on successful login
- Error and loading state handling
- Styled with Tailwind CSS (optional, based on class names)

## Project Structure

```
task2/
  src/
    app/
      store.js
    components/
      Login.jsx
    features/
      auth/
        authSlice.js
    App.jsx
    index.js
  package.json
  README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd task2
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. (Optional) If using Tailwind CSS, ensure it is set up in your project.

4. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```

## Usage

- The login form is displayed at the root route (`/`).
- Enter your email and password, then click "Login".
- On successful login, the JWT token is saved to `localStorage`.

## API Endpoint

- The app expects a backend API at `http://localhost:3000/api/auth/login` that accepts POST requests with `{ email, password }` and returns a JSON response containing a `token` and `user` object.

  Example request body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

  Example successful response:
  ```json
  {
    "user": { "id": "123", "email": "user@example.com", ... },
    "token": "jwt_token_here"
  }
  ```

## Customization

- Update the API endpoint in `Login.jsx` if your backend runs on a different URL or port.
- Extend the Redux slice or add more features as needed.
