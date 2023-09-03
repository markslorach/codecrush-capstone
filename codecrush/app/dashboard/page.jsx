"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";
import { Avatar } from "../profile/Avatar";

export default function Dashboard() {
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);

  return (
    <main className="p-8 min-h-screen">

      {/* WELCOME */}
      <div className="flex place-content-between">
        <div className="pt-8 pb-8 text-xl">
          <p className="text-base">Hello,</p>
          <UserName />
        </div>
        <Avatar/>
      </div>


      {/* STATS */}
      <h2 className="dash-heading">Stats</h2>
      <div className="flex place-content-between mb-5 p-4 rounded-md shadow-md">
        <div className="flex flex-col items-center justify-center">
          <p>Score</p>
          <UserScore />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p>Streak</p>
          <UserStreak />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p>Leaderboard</p>
          <p>0</p>
        </div>
      </div>

      <h2 className="dash-heading">Today's challenge</h2>

      {/* PYTHON CARD */}
      <div className="flex place-content-between">
        <button
          className="flex flex-col gap-2 items-center bg-red-700 rounded-md p-8"
          onClick={() => setIsPythonModalOpen(true)}
        >
          <img src="image_url" alt="image" className="w-full h-1/3" />
          <h3 className="text-center my-0">Python</h3>
          <p className="my-0 py-1">Description</p>
        </button>

        <PythonDifficultySelect
          isOpen={isPythonModalOpen}
          setIsOpen={setIsPythonModalOpen}
        />

        {/* JAVASCRIPT CARD */}
        <button className="flex flex-col gap-2 items-center bg-red-700 rounded-md p-8">
          JavaScript
        </button>
      </div>
    </main>
  );
}
