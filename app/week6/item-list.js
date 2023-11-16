"use client"

import React from "react";
import Item from "./item";
import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    if (sortBy == "name"){
        items.sort((a,b) => a.name.localeCompare(b.name))
    }
    else if (sortBy == "category"){
        items.sort((a,b) => a.category.localeCompare(b.category))
    }
    else if(sortBy == "groupedcategory"){
        items.sort((a,b) => a.category.localeCompare(b.category))
        items.reduce((groupedcat, category) => {
        const cat = category.category
        if (groupedcat[cat] == null) groupedcat[cat] = []
        groupedcat[cat].push(category)
        return groupedcat    
        }, {});
    }

    return(
        <main>
            <div className="flex flex-row">
                <button className="btn" onClick={() => setSortBy("name")}>name</button>
                <button className="btn" onClick={() => setSortBy("category")}>category</button>
                <button className="btn" onClick={() => setSortBy("groupedcategory")}>grouped category</button>
            </div>
            <ul>
                {items.map((item) => (
                    <React.Fragment key={item.id}>
                        {sortBy === "groupedcategory" ? (
                            <h2>{item.category}</h2>
                        ) : null}
                        <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    </React.Fragment>
                ))}
            </ul>
        </main>
    )
}