"use client";
import React from "react";
import BeginnerQuestion from "./BeginnerQuestion";
import { DayDate } from "../components/DayDate";
import { UserScore } from "../profile/UserScore";

export default function Beginner() {
  return (
    <main className="p-8 min-h-screen min-w-full w-1/2">
      <BeginnerQuestion />
    </main>
  );
}
