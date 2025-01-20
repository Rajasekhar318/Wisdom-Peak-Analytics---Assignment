import React, { useState } from "react";

const SearchBar = ({ onSearch, onSort, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onSort(e.target.value);
  };

  const handleFilterCity = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={searchText}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent outline-none transition-all dark:text-white"
          />
        </div>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent outline-none transition-all dark:text-white"
        >
          <option value="A-Z">Sort by Name (A-Z)</option>
          <option value="Z-A">Sort by Name (Z-A)</option>
        </select>
        <input
          type="text"
          placeholder="Filter by City"
          onChange={handleFilterCity}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent outline-none transition-all dark:text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;

