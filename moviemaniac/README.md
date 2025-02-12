
# MovieManiac

MovieManiac is a React.js application that fetches and displays movie details using The Movie Database (TMDb) API. Users can browse movies, filter by rating, and sort by release date or rating.

## Features
- Fetches movie data from TMDb API
- Displays movie posters, titles, release dates, and ratings
- Filter movies by minimum rating (6+ or 7+ stars)
- Sort movies by release date or rating (ascending/descending)
- Click on a movie card to view more details on TMDb

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/moviemaniac.git
   cd moviemaniac
   npm install
   npm start

## Technologies Used
- React.js
- Lodash (for sorting)
- TMDb API (for fetching movie data)
- CSS (for styling)

## API Configuration
This project fetches data from TMDb API. Ensure you have an API key:
- Sign up at [TMDb](https://www.themoviedb.org/) and generate an API key.
- Replace the existing API key in `MovieList.jsx`:
  ```js
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=YOUR_API_KEY`
  );

## Author
Created by Vidhi Sagathiya
