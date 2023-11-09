# CodeCrush App

CodeCrush is an interactive daily coding quiz game. Users receive a daily challenge that varies in difficulty from easy to advanced. They earn points for every correct answer and can track their progress on the leaderboard. Additionally, users can build a streak for consecutive correct answers, adding to the excitement of the game.

**Prerequisites**

* Next.js 13
* Java Development Kit (JDK) 11
* PostgreSQL database
* IntelliJ IDEA

⠀**Instructions**

1. Install Dependencies
   * Navigate to the `codecrush_frontend directory`
   * Run the following command: `npm install`

2. Create PostgreSQL Database
   * Create a PostgreSQL database named `codecrush`
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
