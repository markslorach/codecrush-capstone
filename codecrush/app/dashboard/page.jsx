"use client";
import React, { useState } from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";
import { UserScore } from "../profile/UserScore";
import { UserStreak } from "../profile/UserStreak";


export default function Dashboard() {
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);

  return (
    <main>
      <h2>Dashboard</h2>
      <h3 className="flex space-x-2">
        <span>Hello,</span>
        <UserName />
        <span>👋</span>
      </h3>
      <h3>Stats.</h3>
      <p>Score:</p>
      <UserScore />
      <p>Streak:</p>
      <UserStreak />
      <h3>Today's challenge.</h3>
      <button
        className="p-2 bg-red-300"
        onClick={() => setIsPythonModalOpen(true)}
      >
        Python
      </button>
      <PythonDifficultySelect
        isOpen={isPythonModalOpen}
        setIsOpen={setIsPythonModalOpen}
      />
      <button className="p-2 bg-blue-300">JavaScript</button>
    </main>
  );
}
