# Employment Agency Server

## Overview
This is the server application for the Employment Agency web application. It provides a RESTful API for managing job listings, including creating, retrieving, updating, and deleting job entries.

## Project Structure
```
employment-agency-server
├── src
│   ├── app.ts                # Entry point of the server application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── index.ts
│   ├── routes                # Defines API routes
│   │   └── index.ts
│   ├── models                # Contains data models
│   │   └── index.ts
│   └── types                 # Type definitions for the application
│       └── index.ts
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd employment-agency-server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## API Endpoints
- **GET /jobs**: Retrieve all job listings.
- **POST /jobs**: Create a new job listing.
- **GET /jobs/:id**: Retrieve a specific job listing by ID.
- **PUT /jobs/:id**: Update a specific job listing by ID.
- **DELETE /jobs/:id**: Delete a specific job listing by ID.

## Usage Examples
### Retrieve All Jobs
```bash
curl -X GET http://localhost:3000/jobs
```

### Create a New Job
```bash
curl -X POST http://localhost:3000/jobs -H "Content-Type: application/json" -d '{"title": "Software Engineer", "description": "Develop applications", "requirements": "JavaScript, React"}'
```

## License
This project is licensed under the MIT License.