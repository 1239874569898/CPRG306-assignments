//copy from abdullahanwar1
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  // Initialize State Variables
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Create a Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an item object with current values
    const item = { name, quantity, category };

    // Call the onAddItem prop to add the item to the list
    onAddItem(item);

    // Reset state variables
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-grey rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-black"
          />
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-white">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-black"
          />
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-white">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 text-black"
          >
            {/* Add your category options here */}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;