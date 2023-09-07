"use client"
import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.className} min-h-screen bg-slate-50`}>
  
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
       
      </body>
    </html>
  );
}

// data-theme="dark
