import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const tasks = [
  {
    id: 1,
    title: "Art and Craft",
    category: "Arts and Craft",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "Pending",
    avatar: null,
  },
  {
    id: 2,
    title: "Art and Craft",
    category: "Nature",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "InProgress",
    avatar: "/avatar1.png",
  },
  {
    id: 3,
    title: "Art and Craft",
    category: "Family",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "Done",
    avatar: null,
  },
  {
    id: 4,
    title: "Art and Craft",
    category: "Sport",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "Pending",
    avatar: "/avatar2.png",
  },
  {
    id: 5,
    title: "Art and Craft",
    category: "Friends",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "Done",
    avatar: null,
  },
  {
    id: 6,
    title: "Art and Craft",
    category: "Meditation",
    description:
      "Select the role that you want to candidates for and upload your job description.",
    date: "Friday, April 19 - 2024",
    status: "Pending",
    avatar: "/avatar3.png",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "text-pink-500";
    case "InProgress":
      return "text-yellow-500";
    case "Done":
      return "text-green-500";
    default:
      return "";
  }
};

const statusOptions = ["Pending", "InProgress", "Done"];
const categoryOptions = [
  "Arts and Craft",
  "Nature",
  "Family",
  "Sport",
  "Friends",
  "Meditation",
];

const Home = () => {
  const [taskList] = useState(tasks);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);


  const filteredTasks = taskList.filter((task) => {
    const statusMatch =
      selectedStatus.length === 0 || selectedStatus.includes(task.status);
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(task.category);
    return statusMatch && categoryMatch;
  });

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // For closing dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown-status")) setShowStatusDropdown(false);
      if (!e.target.closest(".dropdown-category"))
        setShowCategoryDropdown(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">All Task List</h2>
        <div className="flex flex-wrap gap-4">

          <div className="relative dropdown-category">
            <button
              className="border px-4 py-2 rounded text-gray-600 flex items-center min-w-[180px]"
              onClick={() => setShowCategoryDropdown((prev) => !prev)}
              type="button"
            >
              {selectedCategory.length === 0
                ? "Select Task Category"
                : selectedCategory.join(", ")}
              <span className="ml-auto">
                {showCategoryDropdown ? "▲" : "▼"}
              </span>
            </button>
            {showCategoryDropdown && (
              <div className="absolute bg-white border rounded shadow-md mt-2 z-10 w-56 max-h-60 overflow-auto">
                {categoryOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center px-4 py-2 cursor-pointer ${
                      selectedCategory.includes(option) ? "bg-green-50" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategory.includes(option)}
                      onChange={() => handleCategoryChange(option)}
                      className="mr-2 accent-green-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="relative dropdown-status">
            <button
              className="border px-4 py-2 rounded text-gray-600 flex items-center min-w-[120px]"
              onClick={() => setShowStatusDropdown((prev) => !prev)}
              type="button"
            >
              {selectedStatus.length === 0
                ? "Select Status"
                : selectedStatus.join(", ")}
              <span className="ml-auto">{showStatusDropdown ? "▲" : "▼"}</span>
            </button>
            {showStatusDropdown && (
              <div className="absolute bg-white border rounded shadow-md mt-2 z-10 w-48 max-h-60 overflow-auto">
                {statusOptions.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center px-4 py-2 cursor-pointer ${
                      selectedStatus.includes(option) ? "bg-green-50" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedStatus.includes(option)}
                      onChange={() => handleStatusChange(option)}
                      className="mr-2 accent-green-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            ➕ Add New Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-lg p-5 shadow-sm bg-white relative"
          >
            <button className="absolute top-4 right-4 text-red-500 hover:text-red-600">
              <FaTrashAlt />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-full">
                <span className="font-bold text-lg">🧩</span>
              </div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
            </div>

            <p className="text-gray-600 text-sm mb-4">{task.description}</p>

            {/* Footer: date, avatar, status */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                {task.avatar ? (
                  <img
                    src={task.avatar}
                    alt="avatar"
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <FiCalendar className="text-gray-500" />
                )}
                <span>{task.date}</span>
              </div>

              <span className={`${getStatusStyle(task.status)} font-semibold`}>
                ● {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
