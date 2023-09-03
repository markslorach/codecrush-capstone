"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";
import { Avatar } from "../profile/Avatar";
import Image from "next/image";
import Python from "@/public/images/python_logo.png";
import js from "@/public/images/js_logo.png";

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
        <Avatar />
      </div>

      {/* STATS */}
      <h2 className="dash-heading">Stats</h2>
      <div className="dash-stats-container">
        <div className="dash-stats-item">
          <p>Score</p>
          <UserScore />
        </div>

        <div className="dash-stats-item">
          <p>Streak</p>
          <UserStreak />
        </div>

        <div className="dash-stats-item">
          <p>Leaderboard</p>
          <p>0</p>
        </div>
      </div>

      <h2 className="dash-heading">Today's challenge</h2>

      {/* PYTHON CARD */}
      <div className="flex place-content-between gap-5">
        <button
          className="flex flex-col gap-1 items-center bg-white rounded-md shadow-md py-5 pl-3 pr-3 w-1/2"
          onClick={() => setIsPythonModalOpen(true)}>
        
          <div className="avatar">
            <div className="w-16 rounded-full p-2">
            <Image src={Python} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold">Python</h3>
          <p className="my-0 py-1 text-xs">Test your skills in today's Python challenge.</p>
        </button>

        <PythonDifficultySelect
          isOpen={isPythonModalOpen}
          setIsOpen={setIsPythonModalOpen}
        />

        {/* JAVASCRIPT CARD */}
        <button
          className="flex flex-col gap-1 items-center bg-white rounded-md shadow-md py-5 pl-3 pr-3 w-1/2">
        
          <div className="avatar">
            <div className="w-16 rounded-full p-2">
            <Image src={js} alt="Python" placeholder="blur" />
            </div>
          </div>

          <h3 className="text-center my-0 font-semibold">JavaScript</h3>
          <p className="my-0 py-1 text-xs">Think you can take on today's JavaScript challenge?</p>
        </button>
      </div>
    </main>
  );
}
