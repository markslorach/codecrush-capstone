import React, { useState, useEffect } from "react";
import Request from "../helpers/Request";
import Image from "next/image";
import { BottomNav } from "../components/BottomNav";
import Score from "@/public/images/score.png";
import Streak from "@/public/images/streak.png";

export const LeaderboardComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const request = new Request();
    request.get("http://localhost:8082/api/users").then((data) => {
      setUsers(data);
    });
  }, []);

  const orderedUsers = users.sort(
    (a, b) => b.score - a.score && b.streak - a.streak
  );

  const userLeaderboard = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];
    return (
      <div key={index}>
        <p className="py-1">
          {firstName} 
        </p>
      </div>
    );
  });

  const scoreLeaderboard = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];

    return (
      <div key={index}>
        <p className="py-1">
          {user.score}
        </p>
      </div>
    );
  })
  

  return (
    <>
      <h1 className="pb-8 text-xl font-semibold underline ">Leaderboard</h1>
            <div className="flex items-center gap-2 mb-5">
              <p className="font-semibold text-xl">Score</p>
            
              <Image src={Score} alt="Score" width={16} height={16} />
            </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{userLeaderboard[0]}</td>
              <td>{scoreLeaderboard[0]}</td>
              
            </tr>
              {/* row 2 */}
              <tr>
              <th>2</th>
              <td>{userLeaderboard[1]}</td>
              <td>{scoreLeaderboard[1]}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[3]}</td>
              <td>{scoreLeaderboard[3]}</td>
              </tr>
               {/* row 4 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[4]}</td>
              <td>{scoreLeaderboard[4]}</td>
              </tr>
               {/* row 5 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[5]}</td>
              <td>{scoreLeaderboard[5]}</td>
              </tr>
               {/* row 6 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[6]}</td>
              <td>{scoreLeaderboard[6]}</td>
              </tr>
               {/* row 7 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[7]}</td>
              <td>{scoreLeaderboard[7]}</td>
              </tr>
               {/* row 8 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[8]}</td>
              <td>{scoreLeaderboard[8]}</td>
              </tr>
               {/* row 9 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[9]}</td>
              <td>{scoreLeaderboard[9]}</td>
              </tr>
               {/* row 10 */}
            <tr>
              <th>3
              </th>
              <td>{userLeaderboard[10]}</td>
              <td>{scoreLeaderboard[10]}</td>
              </tr>
          
          </tbody>
        </table>
      </div>

      <BottomNav />
    </>
  );
};
