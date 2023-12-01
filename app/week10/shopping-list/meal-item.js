//copy from abdullahanwar1
"use client"
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const getMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    if (ingredient) {
      getMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="ml-10 p-5 rounded shadow">
      <h2 className="text-2xl font-mono mb-4 font-bold mt-4 text-white-800">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal} className="font-mono text-lg">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;