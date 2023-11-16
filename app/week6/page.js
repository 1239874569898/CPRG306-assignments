"use client"

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {
  const [items] = useState(itemsData);
  
    return (
      <main>
        <h1 className="text-4xl font-bold m-6 text-center text-white">
        Shopping List
        </h1>
        <Itemlist />
      </main>
    );
  }