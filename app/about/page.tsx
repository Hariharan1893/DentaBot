"use client";

import Image from "next/image";
import Link from "next/link";
import { Bot, ShieldCheck, Brain, Smile, MessageCircle, PlusCircle } from "lucide-react";
import ScrollToTop from "@/components/scrollToTop";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b min-h-[90vh] from-purple-100 to-white text-purple-800 flex flex-col items-center py-10 px-6">
      {/* Title Section */}
      <h1 className="text-5xl font-bold mb-6 text-center">
        <Image 
          src="/dentaboticon.png" 
          alt="dentabot-icon" 
          width={10} 
          height={10} 
          className="w-25 h-25 md:w-25 md:h-25"
        /> Dental AI Assistant</h1>
      
      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl text-center md:text-left">
        {/* Larger Chatbot Image */}
        <Image 
          src="/chatbot.svg" 
          alt="Chatbot" 
          width={250} 
          height={250} 
          className="w-100 h-100 md:w-100 md:h-100"
        />

        {/* Text Content */}
        <div>
          <p className="text-lg text-gray-700">
          Meet <b>DentaBot</b>, your AI-powered dental assistant! Whether you&apos;re a student learning 
          about dental science, a professional seeking quick references, or a patient looking for 
          answers, DentaBot is here to help.
          </p>
          <p className="mt-4 text-gray-700">
            Get expert-backed responses on dental topics, treatment options, and oral care best practices.
            DentaBot uses advanced AI and verified medical sources to provide accurate and reliable
            information.
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Link href="/contact">
              <button className="bg-purple-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-700">
                <MessageCircle className="w-5 h-5" /> Contact
              </button>             
            </Link>
            <Link href="/chat">
              <button className="bg-gray-300 text-purple-800 px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-400">
                <PlusCircle className="w-5 h-5" /> New Chat
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl">
        
        {/* Feature 1 */}
        <div className="bg-purple-100 border border-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
          <Bot className="w-14 h-14 text-purple-600 mb-3" />
          <h2 className="text-xl font-semibold text-purple-800 mb-2">AI-Powered Chat</h2>
          <p className="text-gray-700">
            Get instant responses to your dental-related queries with an AI chatbot trained on verified 
            dental sources.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-purple-100 border border-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
          <ShieldCheck className="w-14 h-14 text-purple-600 mb-3" />
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Accurate & Reliable</h2>
          <p className="text-gray-700">
            Information is sourced from dental textbooks, research papers, and expert dentists 
            to ensure accuracy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-purple-100 border border-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
          <Brain className="w-14 h-14 text-purple-600 mb-3" />
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Smart Learning</h2>
          <p className="text-gray-700">
            Interactive quizzes and case studies to enhance learning for dental students.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-purple-100 border border-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
          <Smile className="w-14 h-14 text-purple-600 mb-3" />
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Treatment Suggestions</h2>
          <p className="text-gray-700">
            Get recommendations on common dental treatments based on symptoms.
          </p>
        </div>
      </div>
      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
