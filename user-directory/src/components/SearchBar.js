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
    <div className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4">
      <input
        type="text"
        placeholder="Search users..."
        value={searchText}
        onChange={handleInputChange}
        className="w-full md:w-auto p-2 border rounded"
      />
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="p-2 border rounded"
      >
        <option value="A-Z">Sort by Name (A-Z)</option>
        <option value="Z-A">Sort by Name (Z-A)</option>
      </select>
      <input
        type="text"
        placeholder="Filter by City"
        onChange={handleFilterCity}
        className="w-full md:w-auto p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
