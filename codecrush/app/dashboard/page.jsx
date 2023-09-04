"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";
import { Avatar } from "../profile/Avatar";
import { BottomNav } from "../components/BottomNav";
import Image from "next/image";
import Python from "@/public/images/python_logo.png";
import js from "@/public/images/js_logo.png";
import Streak from "@/public/images/streak.png";
import Score from "@/public/images/score.png";
import Trophy from "@/public/images/trophy.png";
import { CodingFacts } from "../components/CodingFacts";

export default function Dashboard() {
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);

  return (
    <main className="p-8 min-h-screen xl:pl-96 xl:pr-96">
    
      {/* WELCOME */}
      <div className="flex place-content-between">
        <div className="py-8 text-xl">
          <p className="text-base">Hello,</p>
          <UserName />
        </div>
        <Avatar />
      </div>

      <div className="p-3 bg-blue-100 rounded-md shadow-sm mb-5">
        <CodingFacts/>
      </div>

      {/* STATS */}
      <h2 className="dash-heading">Stats</h2>
      <div className="dash-stats-container">
        <div className="dash-stats-item">
          <p>Score</p>
          <div className="flex items-center gap-2">
            <b>
              <UserScore />
            </b>
            <Image src={Score} alt="Score" width={16} height={16} />
          </div>
        </div>

        <div className="dash-stats-item">
          <p>Streak</p>
          <div className="flex items-center gap-2">
            <b>
              <UserStreak />
            </b>
            <Image src={Streak} alt="Streak" width={16} height={16} />
          </div>
        </div>

        <div className="dash-stats-item">
          <p>Leaderboard</p>
          <div className="flex items-center gap-2">
            <p>
              <b>0</b>
            </p>
            <Image src={Trophy} alt="Trophy" width={16} height={16} />
          </div>
        </div>
      </div>

      <h2 className="dash-heading">Today's challenge</h2>

      {/* PYTHON CARD */}
      <div className="flex place-content-between gap-5">
        <button
          className="python-card"
          onClick={() => setIsPythonModalOpen(true)}
        >
          <div className="avatar">
            <div className="w-16 rounded-full p-2">
              <Image src={Python} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold">Python</h3>
          <p className="my-0 py-1 text-xs text-gray-400">
            Test your skills in today's Python challenge.
          </p>
        </button>

        <PythonDifficultySelect
          isOpen={isPythonModalOpen}
          setIsOpen={setIsPythonModalOpen}
        />

        {/* JAVASCRIPT CARD */}
        <button className="js-card">
          <div className="avatar">
            <div className="w-16 rounded-full p-2">
              <Image src={js} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold">JavaScript</h3>
          <p className="my-0 py-1 text-xs text-gray-400">
            Think you can take on today's JavaScript challenge?
          </p>
        </button>
      </div>

      <h2 className="dash-heading">Coming soon</h2>

      <BottomNav />
    </main>
  );
}
