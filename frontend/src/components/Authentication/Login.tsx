import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase"; // Import the firebaseConfig
import { Zap, Loader } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Log in user
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate('/dashboard');
    } catch (error:any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-gray-900 p-8 shadow-2xl">
        <div className="text-center">
          <Zap className="mx-auto h-12 w-12 text-yellow-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Don't have an account?{" "}
            <a className="font-medium text-yellow-400 hover:underline" href="/signup">
              Sign up
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full bg-gray-800 text-white placeholder-gray-500 focus:border-yellow-400 focus:ring-yellow-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-yellow-400 focus:ring-yellow-400"
              />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </Label>
            </div>

            <div className="text-sm">
              <a className="font-medium text-yellow-400 hover:underline" href="/forgot-password">
                Forgot your password?
              </a>
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
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}