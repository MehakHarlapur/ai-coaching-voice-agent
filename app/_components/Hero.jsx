import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { AuroraText } from '@/components/magicui/aurora-text'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Mic, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice-Activated Learning",
    description: "Interact naturally with your AI tutor using voice commands and responses."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Personalized Coaching",
    description: "Get tailored learning experiences based on your progress and needs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Interactive Sessions",
    description: "Engage in meaningful discussions and get instant feedback."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Smart Summaries",
    description: "Get concise summaries of your learning sessions for quick review."
  }
];

function Hero() {
    return (
        <div className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                AI-Powered Learning Assistant
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                  <AuroraText> AI-Powered Voice Agent </AuroraText>🎙️
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  with AI Voice Coaching
                </span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of education with our AI-powered voice assistant that provides personalized, interactive learning experiences anytime, anywhere.
              </p>
              
              <div className="mt-10 flex flex-col items-center gap-4">
                <Link href="/dashboard" className="w-full max-w-xs">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-2">No credit card required</p>
              </div>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-white group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-72 -mr-24 -mt-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-1/3 h-72 -ml-24 -mb-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>
    )
}

export default Hero