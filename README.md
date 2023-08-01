# Emergency Incident

![Emergency Incident](/screenshots/frontend.png)

This project is a web application designed to enrich emergency incident data and provide better analytics for a fire department. It allows users to import existing incident data in JSON format and fetch weather data for the incident location at a certain time. The enriched data is displayed on a map for easy validation.

## Technologies Used

- Frontend: React, React-Leaflet, Leaflet
- Backend: Node.js, Express.js
- Weather API: [Meteostat](https://dev.meteostat.net/)
- Database: N/A (No database used in this project)
- Other tools: Git, npm

## Installation & Running

```bash
node -v # v18.16.1
npm install
npm run start
```

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/incidents`: Fetch incident data.
- `GET /api/enriched-incidents`: Fetch enriched incident data with weather information.

## Improvements

In a real production system, the following improvements can be implemented:

- Implement an Event-Driven or Continuous Enrichment Server: Instead of enriching incidents on-demand when a request comes in, set up a dedicated continuous server that periodically enriches the incidents in the background. Or an event-driven server that enriches once a new incident is uploaded. This approach will help avoid Weather API rate limiting issues and ensure that the data is always up-to-date.
- Use a Database like PostgreSQL with GIS Technology: As the dataset grows, consider using a database like PostgreSQL with GIS (Geographic Information System) capabilities. Storing and querying spatial data in a GIS database will enhance the performance and efficiency of location-based operations.
- Other minimum improvements:
    * Add authentication and authorization to secure the application.
    * Implement incident filtering for large datasets.
    * Add user-friendly error messages and loading indicators for a better user experience.
    * Set up automated testing for both frontend and backend code.

## Time Spent

I spent approximately 3.5 hours on this project, including initial setup, coding, and writing the README.

