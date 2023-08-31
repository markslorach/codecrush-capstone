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

  const orderedUsers = users.sort();

  const currentLeaderboard = orderedUsers.map((user) => {
    return (
      <>
        <p>
          {user.username} - {user.score}
        </p>
      </>
    );
  });

  return (
    <>
      <h1>Leaderboard</h1>
      {currentLeaderboard}
    </>
  );
};
