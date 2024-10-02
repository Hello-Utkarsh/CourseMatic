import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { Zap, Loader, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: user.email,
        photo: "",
      });
      alert("Signup successful!");
      navigate('/dashboard'); // Navigate to dashboard after signup
    } catch (error: any) {
      alert(error.message); // Show error message in alert
    } finally {
      setIsLoading(false);
    }
  }

  async function googleSignup() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        });
        alert("Google Signup successful!");
        navigate('/dashboard'); // Use navigate instead of window.location
      }
    } catch (error: any) {
      alert(error.message); // Show error message in alert
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-gray-900 p-8 shadow-2xl">
        <div className="text-center">
          <Zap className="mx-auto h-12 w-12 text-yellow-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{" "}
            <a className="font-medium text-yellow-400 hover:underline" href="/login">
              Sign in
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label className="text-white" htmlFor="name">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full bg-gray-800 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label className="text-white" htmlFor="email">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full bg-gray-800 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label className="text-white" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full bg-gray-800 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              disabled={isLoading}
            >
              {isLoading && (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign up
            </Button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div>
          <Button
            type="button"
            onClick={googleSignup}
            className="w-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
