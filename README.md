
# Lab 1: Node.js and Express server

## Student Details

- Name: K. Rishitha
- Registration Number: 252U1R8040
- Section: CSE-QE 2A
- Course: Backend Development Fundamentals
- Faculty: Mr.Shiva Sai Teja

## Objective

To create a Node.js project and develop a web server
using the built-in HTTP module and Express.js.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Visual Studio Code

## Live Link

Not deployed yet.

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies:

   npm install

5. Start the server:

   npm start

6. Open http://localhost:3000 in your browser.

## Endpoints

| Method | Path | Description | Status |
|---|---|---|---|
| GET | / | Welcome message | 200 |
| GET | /about | Student details | 200 |
| GET | /time | Current date and time | 200 |
| GET | /unknown | 404 error message | 404 |

## Screenshots

### Home Route
![Home](screenshots/home.png)

### About Route
![About](screenshots/about.png)

### Time Route
![Time](screenshots/time.png)

### 404 Route
![Not Found](screenshots/not-found.png)

### Terminal Status Codes
![Terminal](screenshots/terminal-status.png)

## Problems Faced and Solutions

- Installed Express using npm install express.
- Corrected the server.js file location.
- Implemented Express routes.
- Tested all routes using a browser.
- Verified HTTP status codes.

## Conclusion

Successfully created a Node.js HTTP server and
an Express server with three GET routes and a 404 handler.
