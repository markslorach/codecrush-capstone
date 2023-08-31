"use client";
import React from "react";
import { SignOut } from "./SignOut";
import { UserName } from "../dashboard/UserName";
import LightDarkSwitch from "../components/LightDarkSwitch";
import { Avatar } from "./Avatar";


export default function Profile() {
  return (
    <main>
      <h2>Profile Page</h2>
      <Avatar/>
      <UserName />
      <LightDarkSwitch />
      <SignOut />
    </main>
  );
}
