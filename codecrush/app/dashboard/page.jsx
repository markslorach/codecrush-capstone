"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";

export default function Dashboard() {
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);

  return (
    <main className="p-6">
      <h2>Dashboard</h2>

      <h2 className="flex space-x-2">
        <span>Hello,</span>
        <UserName />
        <span>👋</span>
      </h2>

      <h2>Stats.</h2>

      <p>Score:</p>
      <UserScore />

      <p>Streak:</p>
      <UserStreak />

      <h2>Today's challenge.</h2>

      <button
        className="flex flex-col gap-2 items-center p-2 bg-red-700"
        onClick={() => setIsPythonModalOpen(true)}>
      
        <img src="image_url" alt="image" className="w-full h-1/3" />
        <h3 className="text-center my-0">Python</h3>
        <p className="my-0 py-1">Description</p>

      </button>

      <PythonDifficultySelect
        isOpen={isPythonModalOpen}
        setIsOpen={setIsPythonModalOpen}
      />

      <button className="p-2 bg-blue-300">JavaScript</button>
    </main>
  );
}
