"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-[82vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-purple-100 to-white px-6 text-center md:text-left">
      {/* Left Side: Doctors SVG */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/doctors.svg"
          alt="Doctors Illustration"
          width={500}
          height={500}
          className="mb-6 md:mb-0"
        />
      </div>

      {/* Right Side: Hero Text & Button */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-700 leading-tight">
          Welcome to DentaBot
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Your AI-powered dental assistant. Get instant answers, expert advice, and more!
        </p>

        <button
          className=" px-8 py-3 mb-5 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg flex items-center gap-2 transition-all"
          onClick={() => router.push("/chat")}
        >
          <PlusCircle className="w-5 h-5" />
          New Chat
        </button>
      </div>
    </div>
  );
}
