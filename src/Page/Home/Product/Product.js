import React from "react";
import { useNavigate } from "react-router-dom";

const Product = props => {
  const { title, thumbnailUrl, id } = props.list;
  const navigate = useNavigate();

  const handleClickedButton = id => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white border  border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <img
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src={thumbnailUrl}
        alt=""
      />
      <h2 className="text-center mt-2">{title.slice(0, 30)}</h2>
      <button
        onClick={() => handleClickedButton(id)}
        className="border bg-gray-200 rounded mt-2 w-2/4"
      >
        Product Details
      </button>
    </div>
  );
};

export default Product;
