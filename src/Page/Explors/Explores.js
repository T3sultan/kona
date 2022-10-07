import React, { useEffect, useState } from "react";
import Product from "../Home/Product/Product";

const Explores = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl">Total Products : {lists.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mr-3 ml-3">
        {lists.map(list => (
          <Product key={list.id} list={list}></Product>
        ))}
      </div>
    </div>
  );
};

export default Explores;
