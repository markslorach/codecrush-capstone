import React, { useState, useEffect } from "react";
import Request from "../helpers/Request";

export const LeaderboardComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const request = new Request();
    request.get("http://localhost:8082/api/users").then((data) => {
      setUsers(data);
    });
  }, []);

  const orderedUsers = users.sort((a, b) => b.score - a.score && b.streak - a.streak);

  const currentLeaderboard = orderedUsers.map((user, index) => {



    return (
      <>

      <div key={index}>
        
        
          
          <div>
          {user.username} - {user.score}
          </div>

          <div>
          {user.username} - {user.streak}
          </div>
          </div>

      </>
    );
  });
  

  return (
    <>
      <h1 className="pb-8 text-xl font-semibold underline ">Leaderboard</h1>

{/* //Left column */}

      <div className="flex gap-10">
      <ul class="list-inside ...">
      <li className="pb-3 font-semibold text-xl underline ps-10">Score</li>
      
      <div className="bg bg-red-500">
      {currentLeaderboard}
      </div>
      </ul>
      
{/* Right column */}

      <div className="flex gap-10">
      <ul class="list-outside ...">
      <li className="pb-3 font-semibold text-xl underline ps-10">Streak</li>
      <div className="bg-blue-100">
      {currentLeaderboard}
      </div>
      </ul>
      </div>
      </div>
      
    </>
  );
};
