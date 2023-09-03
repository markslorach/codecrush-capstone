"use client";
import React from "react";
import { SignOut } from "./SignOut";
import { UserName } from "../dashboard/UserName";
import LightDarkSwitch from "../components/LightDarkSwitch";
import { Avatar } from "./Avatar";
import { UserScore } from "./UserScore";
import { UserStreak } from "./UserStreak";


export default function Profile() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2>Profile Page</h2>
      <Avatar/>
      <p>Score:</p><UserScore/>
      <p>Streak:</p><UserStreak/>
      <UserName />
      {/* <LightDarkSwitch /> */}
      <SignOut />
    </main>
  );
}
