import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [details]);

  console.log(productId);
  return (
    <div className="border p-4 rounded-lg relative mt-10 mr-10 ml-10">
      <div>
        <p className="font-bold">
          Product Title: <span className="text-gray-400"> {details.title}</span>{" "}
        </p>
      </div>
      <div className="flex items-center justify-center w-64 mx-auto mt-2">
        <img src={details.thumbnailUrl} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
