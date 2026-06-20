# 🎬 MovieVault

MovieVault is a React-based movie tracking application that allows users to search for movies, view detailed information, and maintain a personal watched movies list.

## Features

- Search movies using the OMDb API
- View detailed movie information
- Add movies to a watched list
- Prevent duplicate watched entries
- Default movie recommendations
- Error handling for invalid searches
- Request cancellation using AbortController
- Responsive two-panel layout

## Tech Stack

- React
- JavaScript (ES6+)
- CSS
- OMDb API

## Project Structure

```text
src
│
├── App.js
├── App.css
│
├── components
│   ├── Navbar.jsx
│   ├── Search.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   ├── SelectedMovieDetails.jsx
│   ├── WatchedMovies.jsx
│   └── WatchedMovie.jsx
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/AbhishekHotchandani/MovieVault.git
```

2. Navigate to the project directory

```bash
cd MovieVault
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file

```env
REACT_APP_OMDB_API_KEY=YOUR_API_KEY
```

5. Start the development server

```bash
npm start
```

## Learning Outcomes

This project helped me practice:

- React Components
- Props
- State Management with useState
- Side Effects with useEffect
- API Integration
- Conditional Rendering
- Component-Based Architecture
- Error Handling
- AbortController

## Future Improvements

- User ratings
- Local storage persistence
- Sorting and filtering
- Responsive mobile layout
- Dark/Light theme toggle

## Author

Abhishek Hotchandani