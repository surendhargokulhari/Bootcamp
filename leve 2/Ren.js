import React from "react";

const ItemList = () => {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
    { id: 5, name: "Mango" },
  ];

  return (
    <div>
      <h2>Fruits List</h2>
      
        {items.map((item) => (
          <li className="bg-primary text-warning" key={item.id}>{item.name}</li>
        ))}
      
    </div>
  );
};

export default ItemList;
