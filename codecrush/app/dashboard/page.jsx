"use client";
import React from "react";
import { UserName } from "./UserName";
import { PythonDifficultySelect } from "./PythonDifficultySelect";

export default function Dashboard() {
  return (
    <main>
      <h2>Dashboard</h2>
      <h3 className="flex space-x-2">
        <span>Hello,</span><UserName />
      </h3>

      <h3>Stats.</h3>
      <h3>Today's challenge.</h3>
      <PythonDifficultySelect />
      <button className="p-2 bg-blue-300">JavaScript</button>
    </main>
  );
}
