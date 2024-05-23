# CodeCrush App

Quiz application with daily coding challenges. Answer questions correctly to build a streak, earn points and rank up on the leaderboard.

### Tech Stack
- Next.js
- Tailwind
- Java
- Spring
- PostgreSQL

### Prerequisites

* Next.js 13
* Java Development Kit (JDK) 11
* PostgreSQL database
* IntelliJ IDEA

### Getting Started

1. Install Dependencies
   * Navigate to the `codecrush_frontend directory`
   * Run the following command: `npm install`

2. Create PostgreSQL Database
   * Create a PostgreSQL database named `codecrush`
     ```
      dropdb money_tracker
      psql -d money_tracker -f db/money_tracker.sql
      ```
   * Ensure the database is accessible from both your frontend and backend applications
   
3. Setup Backend Application
   * Open the `codecrush_backend directory` in IntelliJ IDEA
   * Run the CapstoneApplication.java file to start the backend server
   * The PostgreSQL database can be viewed at `localhost:8082`

4. Run Frontend Application
   * Navigate back to the root directory of the project
   * Run the following command: `npm run dev`
   * This will start the Next.js development server
   * Open your web browser and navigate to `http://localhost:3000` to access the application
