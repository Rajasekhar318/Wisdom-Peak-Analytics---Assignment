import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [filterCity, setFilterCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = window.innerWidth < 768 ? 3 : 6; // Adjust users per page based on screen size

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Apply search, sort, and filter logic
  useEffect(() => {
    let result = [...users]; // Create a new copy of the users array

    // Filter by search query
    if (searchQuery) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by city
    if (filterCity) {
      result = result.filter((user) =>
        user.address.city.toLowerCase().includes(filterCity.toLowerCase())
      );
    }

    // Sort by name
    result = result.sort((a, b) => {
      if (sortOrder === "A-Z") return a.name.localeCompare(b.name);
      if (sortOrder === "Z-A") return b.name.localeCompare(a.name);
      return 0;
    });

    setFilteredUsers(result);
  }, [users, searchQuery, sortOrder, filterCity]);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <div className="text-center mt-8 text-lg text-gray-500 animate-pulse">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-8 text-red-500">
        Error: {error}. Please try again later.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto p-6">
        {/* Search, Sort, and Filter Bar */}
        <SearchBar
          onSearch={setSearchQuery}
          onSort={setSortOrder}
          onFilter={setFilterCity}
        />

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={filteredUsers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6 flex justify-center">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded shadow transition ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Home;
