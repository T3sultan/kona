import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setLists(data.slice(0, 20)));
  }, []);

  return (
    <div>
      <h2 className="text-xl">Explore Products : {lists.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mr-3 ml-3">
        {lists.map(list => (
          <Product key={list.id} list={list}></Product>
        ))}
      </div>
      <Link to="/explore">
        <button className="bg-gray-300 my-4 w-2/6 rounded h-9 font-bold">
          Explore All Product
        </button>
      </Link>
    </div>
  );
};

export default Products;
