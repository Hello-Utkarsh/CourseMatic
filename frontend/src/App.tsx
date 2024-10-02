import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {BookOpen, ArrowRight, CheckCircle, Play } from "lucide-react";

 function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between fixed top-0 left-0 w-full backdrop-blur-lg ">
        <div className="flex items-center space-x-4">
          <BookOpen className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold">CourseMatic</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-yellow-400 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-yellow-400 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-yellow-400 transition-colors">
            Testimonials
          </a>
        </nav>
        <a href="/signup" className="hidden md:inline-flex border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-md">
          Sign Up
        </a>
      </header>
      <main className="flex-grow m-6">
        <section className="container mx-auto px-4 py-20 text-center">
          <Badge variant="outline" className="mb-4 text-yellow-400 border-yellow-400">
            AI-Powered Course Creation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Create Engaging Online Courses <br className="hidden md:inline" />
            in Minutes, Not Months
          </h1>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Transform your expertise into professional online courses with our AI-driven platform. 
            Effortlessly design, build, and publish courses that captivate learners.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="max-w-xs bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
            <a href="/signup" className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-md inline-flex items-center">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required</p>
          </section>
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Revolutionize Your Course Creation Process</h2>
              <ul className="space-y-4">
                {[
                  "AI-powered content generation",
                  "Drag-and-drop course builder",
                  "Interactive quizzes and assessments",
                  "Automated video transcription and subtitles",
                  "Real-time analytics and student insights"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500">
                Explore All Features
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Course creation demo"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" className="rounded-full w-16 h-16">
                    <Play className="h-8 w-8 text-yellow-400" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by Educators Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=40&width=120&text=LOGO`}
                    alt={`Partner logo ${index + 1}`}
                    className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 CourseForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App