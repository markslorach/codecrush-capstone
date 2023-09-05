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

  const scoreLeaderboard = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];
    return (
      <div key={index}>
        <p className="py-1">
          {firstName} - {user.score}
        </p>
      </div>
    );
  });

  const streakLeaderboard = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];

    return (
      <div key={index}>
        <p className="py-1">
          {firstName} - {user.streak}
        </p>
      </div>
    );
  });

  return (
    <>
      <h1 className="pb-8 text-xl font-semibold underline ">Leaderboard</h1>

      <div className="flex gap-3">
        <div className="w-1/2">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="font-semibold text-xl">Score</p>
              <Image src={Score} alt="Score" width={16} height={16} />
            </div>

            <div className="bg-red-100">{scoreLeaderboard}</div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="font-semibold text-xl">Streak</p>
              <Image src={Streak} alt="Streak" width={16} height={16} />
            </div>

            <div className="bg-blue-100">{streakLeaderboard}</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BottomNav />
    </>
  );
};
