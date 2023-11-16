"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);

        alert(`You are buying ${quantity} ${name} in the ${category} category.`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main>
            <div className="justify-center flex items-center h-100 w-150 bg-grey-100">
                <form className="justify-center" onSubmit={handleSubmit}>
                    <div className="flex flex-row">
                        <input required className="text-black" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                        <input className="text-black" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    </div>
                    <select className="text-black" value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">beverages</option> 
                        <option value="Snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </main>
    )
}
