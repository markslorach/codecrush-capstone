import React, { useState, useEffect } from "react";
import Request from "../helpers/Request";
import Image from "next/image";
import { BottomNav } from "../components/BottomNav";
import Score from "@/public/images/score.png";
import Trophy from "@/public/images/trophy.png";
import bronzecup from "@/public/images/bronzecup.png";
import slivercup from "@/public/images/silvercup.png";
import goldcup1 from "@/public/images/goldcup1.png";
import { UserScore } from "../profile/UserScore";

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
        <p>{firstName}</p>
      </div>
    );
  });

  const leaderboardRows = orderedUsers.map((user, index) => {
    const firstName = user.username.split(" ")[0];

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{firstName}</td>
        <td>{user.score}</td>
      </tr>
    );
  });

  return (
    <>
      <section className="flex place-content-between mt-4 mb-6">
        <div className="flex">
          <h2 className="py-8 text-xl font-semibold text-gray-700">Leaderboard</h2>
        </div>
        
        <div className="flex items-center">
          <div className="bg-slate-200 rounded-full py-1 px-3">
            <div className="flex items-center gap-2">
              <b className="text-gray-700">
                <UserScore />
              </b>
              <Image
                className="mb-1"
                src={Score}
                alt="Score"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PLAYER CARDS */}
      <div className="flex gap-3 pb-8">

        {/* player 1 card */}
        <section className="c-card gold-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50">
              <Image src={goldcup1} alt="Trophy Gold" width={16} height={16} />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[0]}</p>
        </section>

        {/* player 2 card */}
        <section className="c-card silver-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50">
              <Image
                src={slivercup}
                alt="Trophy Silver"
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[1]}</p>
        </section>

        {/* player 3 card */}
        <section className="c-card bronze-card">
          <div className="avatar">
            <div className="w-14 rounded-full p-2 bg-slate-50">
              <Image
                src={bronzecup}
                alt="Trophy Bronze"
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className="font-semibold">{userLeaderboard[2]}</p>
        </section>
      </div>


      {/* TABLE */}
      <table className="table table-zebra shadow-md">
        <thead>
          <tr>
            <th className="flex gap-2">
              Rank
              <Image src={Trophy} alt="Trophy" width={14} height={14} />
            </th>
            <th>Player</th>
            <th className="flex gap-2">
              Score
              <Image src={Score} alt="Score" width={14} height={14} />
            </th>
          </tr>
        </thead>
        <tbody>{leaderboardRows}</tbody>
      </table>

      <BottomNav />
    </>
  );
};
