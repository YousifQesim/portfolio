// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yusif Qasim - Portfolio",
  description: "Yusif Qasim - Portfolio",
};

export default function RootLayout({}) {
  return (
    <html lang="en" className="scroll-smooth bg-ProjectBackground">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {/* {children} */}
        <div className="dark:bg-ProjectBackground animate-pulse">
          <h1 className=" w-full h-screen text-white text-3xl flex justify-center items-center">
            website under update....
          </h1>
        </div>
      </body>
    </html>
  );
}
