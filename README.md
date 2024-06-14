# ChessBar Frontend

This project is the frontend application for ChessBar, a platform to organize and manage chess tournaments. The application allows administrators to create, update, and manage tournaments, as well as view participant information.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/en/) (version 14 or above)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/chessBar_front.git

2. Navigate to the project directory:
   ```sh
    cd chessBar_front

3. Install the dependencies:
   ```sh
    npm install

### Running the Application

1. To start the development server, run:
   ```sh
    npm start

3. Open your web browser and navigate to http://localhost:3000 to see the application running.

### Project Structure

The project structure is as follows:
```sh
chessBar_front/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AdminSidebar.js
│   │   └── ...
│   ├── pages/
│   │   ├── UpdateTournament.js
│   │   └── ...
│   ├── utils/
│   │   ├── authGuard.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

public/: Contains static assets like HTML, images, etc.
src/: Contains the main source code for the application.
components/: Reusable components.
pages/: Page components for different routes.
utils/: Utility functions and helpers.
App.js: Main application component.
index.js: Entry point of the application.

### API Endpoints

The application communicates with the backend via RESTful API endpoints. Here are some key endpoints:

GET /api/tournaments/:id: Fetch details of a specific tournament.
PUT /api/tournaments/:id: Update a specific tournament.

### Usage

### Step 1: Authentication

The application uses token-based authentication. Ensure you have a valid token to access the admin routes.

### Step 2: Viewing Tournaments

1. Navigate to the tournaments page to view all tournaments.
2. Click on a tournament to view its details.

### Step 3: Updating a Tournament

1. Navigate to the tournament update page (e.g., /admin/tournaments/update/:id).
2. Fill in the form fields with the new tournament details.
3. Submit the form to update the tournament in the database.

### Step 4: Creating a Tournament

1. Navigate to the tournament creation page (e.g., /admin/tournaments/create).
2. Fill in the form fields with the tournament details.
3. Submit the form to create a new tournament in the database.

### Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
```sh
git checkout -b feature/chessBar_front

3. Make your changes and commit them:
```sh
git commit -m 'Add some feature'

4. Make your changes and commit them:
```sh
git push origin feature/your-feature-name

5. Open a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

[React](https://reactjs.org/)
[Node.js](https://nodejs.org/en)
