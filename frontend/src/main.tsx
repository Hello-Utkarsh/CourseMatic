import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Editor from "./components/Editor.tsx"

//import Project from "./components/Project.tsx";
//import VideoToAudioConverter from "./components/VideoToAudio.tsx";
import Dashboard from "./components/Dashboard.tsx";
import VideoToAudioConverter from "./components/VideoToAudio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
     path:"/editor/:courseId",
     element:<Editor />

  },
  {
    path: "/audio",
    element: <VideoToAudioConverter />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
