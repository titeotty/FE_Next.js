import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="navbar"> 
        <Link href="/" className="logo">포럼만들기</Link> 
        <Link href="/list">List</Link> 
        <LoginBtn></LoginBtn>
        </div>  
        {children}
      </body>
    </html>
  );
}
