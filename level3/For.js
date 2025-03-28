import React, { useState } from "react";
import './App.css'
const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
  { id: 5, name: "Orange", category: "Fruit" },
];

const FilterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter logic based on search term and category
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory)
    );
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Filter & Search List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="form-select mb-3"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Fruit">Fruits</option>
        <option value="Vegetable">Vegetables</option>
      </select>

      {/* Filtered List */}
      <ul className="list-group">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name} - <strong>{item.category}</strong>
            </li>
          ))
        ) : (
          <li className="list-group-item text-danger">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default FilterSearch;
