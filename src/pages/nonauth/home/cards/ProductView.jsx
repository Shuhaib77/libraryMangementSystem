import React from "react";

function ProductView({ title, author, key, image, availableCopie, published }) {
  return (
    <div>
      <div>
        <div
          key={key}
          className="lg:w-[260px] lg:h-[350px] bg-gray-200 p-3 overflow-auto"
        >
          <div className="bg-red-600 rounded w-full h-[240px]">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
          <div className="pl-2">
            <h1>{title}</h1>
            <h1>{author}</h1>
            <h1>{availableCopie}</h1>
            <h1>{published}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
