"use client";
import React from "react";
import { motion } from "framer-motion";
import { SignOut } from "./SignOut";
import LightDarkSwitch from "../components/LightDarkSwitch";
import { UserScore } from "./UserScore";
import { UserStreak } from "./UserStreak";
import { BottomNav } from "../components/BottomNav";
import { DashAvatar } from "../dashboard/DashAvatar";
import { UserName } from "../dashboard/UserName";
import Image from "next/image";
import Streak from "@/public/images/streak.png";
import Score from "@/public/images/score.png";
import Trophy from "@/public/images/trophy.png";
import Dark from "@/public/images/darkmode.png";
import { UserRank } from "./UserRank";

const sectionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: "easeIn" },
};

export default function Profile() {
  return (
    <main className="main">
      <div className="flex place-content-between mt-4 mb-6">
        <h2 className="py-8 text-xl font-semibold">Profile Page</h2>
        <div className="flex items-center">
          <Image className="opacity-70 mr-2" src={Dark} alt="Trophy" width={25} height={25} />
          <LightDarkSwitch />
        </div>
      </div>

      <motion.section className="flex justify-center" {...sectionAnimation}>
        <div className="min-w-full max-w-sm bg-white shadow-md rounded-md py-10 bg-gradient-to-r from-red-100 to-blue-100 ...">
          <div className="flex justify-end"></div>
          <div className="flex flex-col items-center gap-2">
            <DashAvatar />
            <h5 className="mb-1 text-xl font-medium text-gray-800 ">
              <UserName />
            </h5>

            <div className="flex place-content-between w-5/6 my-6 p-4 bg-white rounded-md shadow-md">
              <div className="dash-stats-item">
                <p className="text-sm">Score</p>
                <div className="flex items-center gap-2">
                  <b>
                    <UserScore />
                  </b>
                  <Image src={Score} alt="Score" width={16} height={16} />
                </div>
              </div>

              <div className="dash-stats-item">
                <p className="text-sm">Streak</p>
                <div className="flex items-center gap-2">
                  <b>
                    <UserStreak />
                  </b>
                  <Image src={Streak} alt="Streak" width={16} height={16} />
                </div>
              </div>

              <div className="dash-stats-item">
                <p className="text-sm">Leaderboard</p>
                <div className="flex items-center gap-2">
                  
                    <UserRank/>
                  
                  <Image src={Trophy} alt="Trophy" width={16} height={16} />
                </div>
              </div>
            </div>

            <div className="flex mt-4 space-x-3 md:mt-6">
              <SignOut />
            </div>
          </div>
        </div>
      </motion.section>

      <BottomNav />
    </main>
  );
}