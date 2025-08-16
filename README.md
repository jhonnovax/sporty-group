# Sporty Group

Build a single-page application (SPA) that consumes the All Leagues API and displays the sports leagues with filtering options.

# APIS

- All Leagues: https://www.thesportsdb.com/api/v1/json/3/all_leagues.php
- Badge Lookup: https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>

# Tech Stack

- Languages: HTML, CSS, Javascript, Vuejs
- Design: element-ui
- Frontend: Vuejs, Vue router, Vuex, Axios, Normalize, SCSS
- Backend: Rest APIs
- Tools: Webpack, Babel, Eslint

# Environment vars
Create a `.env` file in the root folder with the following variables:

```env
# Base URL for fetching leagues data
VUE_API_LEAGUES_URL=https://mydomain.com

# Number of hours to cache API responses (default: 12)
VUE_API_LEAGUES_CACHE_HOURS=12
```

# Scripts

To install dependencies, run the following command:

`npm install`

To start and build the project, run the following command:

`npm start`

To build the distribution folder to production, run the following command:

`npm run build`


# Work Sessions
- 1 Sesion: 15 minutes
- 2 Sesion: 45 mintes
- 3 Session: 60 minutes

It took me a bit longer because I tried to customize the Element UI library, which required some research. In the end, I decided to complete the test as it was.



