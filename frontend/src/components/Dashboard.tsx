import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Edit, Video, FileText, PenTool, BarChart, Plus } from "lucide-react";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "./Authentication/Firebase"; // Import Firebase config
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const navigate = useNavigate();  
  // Function to handle form submission
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    
    if (courseName && courseDescription && courseCategory) {
      try {
        const docRef = await addDoc(collection(db, "courses"), {
          name: courseName,
          description: courseDescription,
          category: courseCategory,
          createdAt: new Date(),
        });
        alert("Course created successfully!");
        navigate(`/editor/${docRef.id}`); 
        // Reset form after submission
        setCourseName("");
        setCourseDescription("");
        setCourseCategory("");
      } catch (error) {
        console.error("Error adding course: ", error);
        alert("Failed to create course. Please try again.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6">
        <div className="flex items-center mb-8">
          <BookOpen className="h-8 w-8 text-yellow-400 mr-2" />
          <span className="text-2xl font-bold">CourseMatic</span>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-yellow-400">
            <Edit className="h-5 w-5 mr-2" />
            Dashboard
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-yellow-400">
            <Video className="h-5 w-5 mr-2" />
            My Courses
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-yellow-400">
            <BarChart className="h-5 w-5 mr-2" />
            Analytics
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-yellow-400">
            <FileText className="h-5 w-5 mr-2" />
            Resources
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome back, Creator!</h1>
        
        <Tabs defaultValue="features" className="space-y-6">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="create">Create Course</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Edit className="h-8 w-8 text-yellow-400" />}
                title="Intuitive Course Builder"
                description="Drag-and-drop interface for easy course creation and organization."
              />
              <FeatureCard
                icon={<Video className="h-8 w-8 text-yellow-400" />}
                title="Video Hosting"
                description="Upload and host your course videos directly on our platform."
              />
              <FeatureCard
                icon={<PenTool className="h-8 w-8 text-yellow-400" />}
                title="Quiz Creator"
                description="Create engaging quizzes and assessments for your students."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-yellow-400" />}
                title="Analytics Dashboard"
                description="Track student progress and course performance with detailed analytics."
              />
              <FeatureCard
                icon={<FileText className="h-8 w-8 text-yellow-400" />}
                title="Resource Library"
                description="Manage and share additional learning materials with your students."
              />
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-yellow-400" />}
                title="Learning Path Creator"
                description="Design custom learning paths to guide your students' journey."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
              <CardTitle>Create a New Course</CardTitle>
                <CardDescription>Get started with your new course by filling out the basic details.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCourse}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="courseName">Course Name</Label>
                      <Input
                        id="courseName"
                        placeholder="Enter course name"
                        className="bg-gray-700 text-white border-gray-600"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="courseDescription">Course Description</Label>
                      <textarea
                        id="courseDescription"
                        placeholder="Enter course description"
                        className="w-full h-24 px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md"
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="courseCategory">Category</Label>
                      <select
                        id="courseCategory"
                        className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md"
                        value={courseCategory}
                        onChange={(e) => setCourseCategory(e.target.value)}
                      >
                        <option>Select a category</option>
                        <option>Technology</option>
                        <option>Business</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Personal Development</option>
                      </select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500" onClick={handleCreateCourse}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center text-yellow-400">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}