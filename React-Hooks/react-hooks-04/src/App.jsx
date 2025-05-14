import { useEffect, useState } from "react";
import UserCard from "./components/UserCard/UserCard";

const App = () => {
  // ✅ State to hold all users
  const [users, setUsers] = useState([]);

  // ✅ State to control how many users are visible
  const [visibleCount, setVisibleCount] = useState(5);

  // ✅ State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fetching users using useEffect
  useEffect(() => {
    // useEffect runs ONCE when component mounts (empty dependency array [])
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data); // we set the data into state
      });
  }, []); // [] means this runs once on mount

  // ✅ Filtering users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Decide how many users to show (slice is like a short list)
  const usersToShow = filteredUsers.slice(0, visibleCount);
  
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Search</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full p-2 border border-gray-300 rounded mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* User Cards */}
      <div className="grid gap-4">
        {usersToShow.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Show More Button (only shows when hidden users remain) */}
      {visibleCount < filteredUsers.length && (
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setVisibleCount(filteredUsers.length)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default App;
