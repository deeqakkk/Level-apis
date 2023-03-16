## Server

This is a server built with Node.js and Express that connects to a MongoDB database to store and retrieve information about levels in a game. It uses Mongoose to define the data schema and handle database interactions.

## Installation

1. Clone the repository
``` git clone https://github.com/deeqakkk/Level-apis.git ```

2. Install dependencies
```cd server```
``` npm install ```

3. Run the server
``` npm start ```

4. Set up the environment variables:

- Create a .env file in the root directory.
- Define the MONGODB_URI variable with the URI for your MongoDB database.
Example .env file:

5. Run the server
``` npm start ```

### Usage

API Endpoints

- POST `/levels`: Create a new level item.
- GET `/levels`: Get all level items.
- GET `/levels/:id`: Get a level item by ID.
- PATCH `/levels/:id`: Update a level item.
- DELETE `/levels/:id`: Delete a level item.

### Data Schema

- levelNumber (Number): The level number (required, unique).
- videoNumber (Number): The video number (required).
- videoTitle (String): The video title (required).
- videoUrl (String): The video URL (required).
- isCompleted (Boolean): Indicates whether the video has been - completed (default: false).
- games (Array):
- gameNumber (Number): The game number (required).
- gameTitle (String): The game title (required).
- isCompleted (Boolean): Indicates whether the game has been - completed (default: false).
