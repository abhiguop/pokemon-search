# Pokemon Search Engine

This is a full-stack web application designed to search for and display detailed information about Pokemon. It serves as a final assignment project, demonstrating the integration of a React frontend with a Node.js/Express backend.

## Project Overview

The application allows users to search for Pokemon by name and view their stats, types, and other details. It features a modern, responsive user interface built with Tailwind CSS and Framer Motion for smooth animations. The backend handles API requests to external Pokemon data sources, providing a clean API for the frontend.

## Tech Stack

### Frontend
- **React**: UI library for building the interface (powered by Vite).
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for production-ready animations.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Icons**: Icon library for UI elements.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Axios**: For making external API calls from the server.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Module to load environment variables.

## Prerequisites

Ensure you have **Node.js** installed on your system.

## Installation and Setup

Follow these steps to get the project running locally.

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Start the backend server:

```bash
node server.js
```

The server will typically run on `http://localhost:5000`.

### 2. Frontend Setup

Open a new terminal window, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will start (usually on `http://localhost:5173`). Open this URL in your browser to view the app.

## Project Structure

```
finproject/
├── backend/            # Express server and API logic
│   ├── controllers/    # Request handlers
│   ├── routes/         # API route definitions
│   ├── services/        External API calls
│   ├── utils/          # Utility functions (e.g., error handling)
│   └── server.js       # Entry point for the backend
│
└── frontend/           # React application
    ├── src/            # Source code
    │   ├── components/ # Reusable UI components
    │   └── ...
    ├── index.html      # HTML entry point
    ├── tailwind.config.js # Tailwind configuration
    └── vite.config.js  # Vite configuration
```

## Usage

1. Ensure both the backend and frontend servers are running.
2. Open the frontend URL in your browser.
3. Use the search bar to look up a Pokemon (e.g., "pikachu", "charizard").
4. View the displayed card with the Pokemon's details.

## License

This project is for educational/assignment purposes.
