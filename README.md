# Movies API

A RESTful API for managing movies, reviews, and watchlists, built with Node.js, Express, and Sequelize.

## ✨ Features

- User authentication and authorization (JWT)
- CRUD operations for movies
- Movie reviews and ratings
- Watchlist functionality
- Input validation
- Error handling
- Logging

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- SQLite (included)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/odaibishr/movies-api.git
   cd movies-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

The server will start on `http://localhost:3000` by default.

---