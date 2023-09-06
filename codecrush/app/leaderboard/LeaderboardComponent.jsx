import React, { useState, useEffect } from "react";
import Request from "../helpers/Request";
import Image from "next/image";
import { BottomNav } from "../components/BottomNav";
import Score from "@/public/images/score.png";
import Streak from "@/public/images/streak.png";
import cLogo from "@/public/images/c_logo.png";
import Trophy from "@/public/images/trophy.png";
import userIcon from "@/public/images/userIcon.png";
import bronzecup from "@/public/images/bronzecup.png";
import slivercup from "@/public/images/silvercup.png";
import goldcup1 from "@/public/images/goldcup1.png";
import { Avatar } from "../profile/Avatar";





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

  // const rankLeaderboard = orderedUsers.map((user, index) => {
  //   const rankPosition = user.userRank[0];

  //   return (
  //   <div key={index}>
  //     {/* <p> {++index}</p> */}
  //     <p>{user.rank}</p>
  //   </div>
  //   );
  // })



  return (
    <>
    <section className="flex place-content-between py-0">
    <div className="flex gap-2">
      <p className="flex gap-3 space place-content-between font-semibold ">
        Leaderboard
        </p>
        <span className="wave">🚀</span>
        </div>
        <div>
        <Avatar />
        </div>
        </section>
      
            <div className="flex items-center gap-2 mb-5">
              {/* <p className="font-semibold text-xl">Score</p> */}
              {/* <Image src={Score} alt="Score" width={16} height={16} /> */}
              
            </div>

          <div className="flex gap-3 pt-4 pb-6">
          {/* player 1 card */}

          <div className="c-card gold-card">
          {userLeaderboard[0]}
          <div className="avatar">
            <div className="w-16 rounded-full p-2 bg-slate-50">

            <Image src={goldcup1} alt="Trophy Gold" width={16} height={16} />
              
            </div>
          </div>
          </div>

            {/* player 2 card */}

            <div className="c-card silver-card">
            {userLeaderboard[1]}
          <div className="avatar">
            <div className="w-16 rounded-full p-2 bg-slate-50">
              <Image src={slivercup} alt="Trophy Silver" placeholder="blur" />
            </div>
          </div>
          </div>

            {/* player 3 card */}

            <div className="c-card bronze-card">
            {userLeaderboard[3]}
          <div className="avatar">
            <div className="w-16 rounded-full p-2 bg-slate-50">
              <Image src={bronzecup} alt="Trophy Bronze" placeholder="blur" />
            </div>
          </div>
          </div>
          </div>
  
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}

          <thead>
      <tr>
        <th className="flex gap-2">
          Rank
        <Image src={Trophy} alt="Trophy" width={14} height={14} />
        </th>
        
        <th>
          Username
          {/* <Image src={userIcon} alt="userIcon" width={16} height={16} /> */}
        </th>
      
        <th className="flex gap-2">
          Score 
        <Image src={Score} alt="Score" width={14} height={14} />
        </th>
      </tr>
    </thead>

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

