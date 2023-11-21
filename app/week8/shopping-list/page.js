//copy from abdullahanwar1
"use client"
import React, { useState } from 'react';
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsJson from './items.json';
import MealIdeas from './meal-ideas';  // Import the new MealIdeas component

const Page = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState(itemsJson);
    const [selectedIngredient, setSelectedIngredient] = useState('');

    const handleAddItem = newItem => {
        setItems(oldItems => [...oldItems, { ...newItem, id: Date.now().toString() }]);
    };

    const handleItemSelect = (itemName) => {
        const ingredient = itemName.split(',')[0].trim();
        setSelectedIngredient(ingredient);
    };

    return (
        <div>
            <h1 className="text-4xl font-mono mb-4 font-bold mt-8 ml-14">Shopping List</h1>
            <h2 className="text-2xl font-mono mb-4 font-bold mt-4 ml-14 text-white">Add New Item</h2>
            
            <NewItem onAddItem={handleAddItem} />

            <div className="ml-14 mb-4">
                <button onClick={() => setSortBy('name')} className={sortBy === 'name' ? 'border border-cyan-800 hover:bg-cyan-900 p-2 rounded bg-cyan-800 text-white': 'border border-cyan-800 hover:bg-cyan-900 p-2 rounded'}>Sort by Name</button>
                <button onClick={() => setSortBy('category')} className={sortBy === 'category' ? 'ml-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded bg-cyan-800 text-white': 'ml-4 border border-cyan-800 hover:bg-cyan-900 p-2 rounded'}>Sort by Category</button>
            </div>
            
            <ItemList items={items} sortBy={sortBy} onItemSelect={handleItemSelect}/>
            
            <MealIdeas ingredient={selectedIngredient}/>
        </div>
    );
}

export default Page;