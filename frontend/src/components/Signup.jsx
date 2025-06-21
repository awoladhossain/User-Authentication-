import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupUi from "../assets/signup.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      // Registration successful, redirect to login or home
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2 bg-cover bg-center">
        <img src={signupUi} alt="Signup" />
      </div>
      <div className="w-1/2 p-8">
        <div className="items-center justify-center flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-4">
            To Create Account, Please Fill in the form below
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="Enter your Full Name"
              required
            />
          </div>
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="Retype password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center justify-center my-4 mx-auto w-[472px] ">
          <hr className="flex-grow border-t border-gray-300 " />
          <span className="mx-4 text-gray-600">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
