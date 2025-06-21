import { FaListUl, FaRegCompass } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import tasklogo from "../assets/task logo.png";
import { useAuth } from "./context/AuthContext";
const Header = () => {
  const { user } = useAuth();
  return (
    <div className="bg-gradient-to-r from-[#1d2b2b] to-[#1d1b2b] text-white">
      <div className="flex justify-between items-center px-6 py-4">
        
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold text-white">
            <img src={tasklogo} alt="logo" className="w-28 h-8" />
          </div>


          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/tasks"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <FaListUl className="text-base" />
              Task List
            </Link>
            <Link
              to="/spin"
              className="flex items-center gap-2 hover:text-green-300"
            >
              <FaRegCompass className="text-base" />
              Spin
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center gap-2 hover:text-green-300"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/avatar.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full border border-white"
              />
              <span className="text-sm font-medium">{user.name}</span>
              <FiChevronDown className="text-sm" />
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
