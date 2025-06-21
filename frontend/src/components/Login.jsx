import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginUi from "../assets/login.png";
import { useAuth } from "./context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }
      login(data.token, rememberMe);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-cover bg-center">
        <img src={loginUi} alt="Login" />
      </div>
      <div className="w-1/2 p-8">
        <div className="items-center justify-center flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Login</h1>
          <p className="text-gray-600 mb-4">
            Welcome Back, Please Enter Your Details to Log in
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Remember me</label>
            </div>
            <Link to="#" className="text-sm text-blue-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-center my-4 mx-auto w-[472px] ">
          <hr className="flex-grow border-t border-gray-300 " />
          <span className="mx-4 text-gray-600">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
