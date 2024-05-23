# CodeCrush

Quiz application with daily coding challenges. Answer questions correctly to build a streak, earn points and rank up on the leaderboard.

### Tech Stack
- Next.js
- Tailwind
- Java
- Spring
- PostgreSQL
- Firebase Auth

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
  
### Screenshots
![codecrush](https://github.com/markslorach/codecrush-capstone/assets/15185553/3f970b44-2b00-4943-ada5-28a8365b85fc)![codecrush_home_dark](https://github.com/markslorach/codecrush-capstone/assets/15185553/a4810c41-52b9-4816-a8de-3003c0e65270)![codecrush_quiz](https://github.com/markslorach/codecrush-capstone/assets/15185553/cb2b57dc-9ea0-4ea4-9d17-c7253dd3a5de)![codecrush_profile](https://github.com/markslorach/codecrush-capstone/assets/15185553/913a6364-3293-4520-a187-b4e66a57bf3e)![codecrush_leaderboard](https://github.com/markslorach/codecrush-capstone/assets/15185553/12fdf681-9a70-4394-b6cf-d2428b36e285)
