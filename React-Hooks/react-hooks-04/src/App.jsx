import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Fetch users only once when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Slice results: show only 5 unless showAll is true
  const visibleUsers = showAll ? filteredUsers : filteredUsers.slice(0, 5);
  return <div>App</div>;
};

export default App;
