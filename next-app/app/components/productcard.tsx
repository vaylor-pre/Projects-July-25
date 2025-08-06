"use client";

import React, { useState } from "react";
import AddToCart from "./addtocart";
import { Product } from "./types";

interface ProductCardProps {
  product?: Product; // Make optional for demo purposes
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Demo product data
  const demoProduct: Product = product || {
    id: 1,
    title: "Premium Headphones",
    price: 199.99,
    description: "High-quality noise-cancelling headphones",
    category: "electronics",
    image: "/headphones.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure></figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title">{demoProduct.title}</h2>
        </div>
        <p>{demoProduct.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"★".repeat(Math.round(demoProduct.rating.rate))}
            {"☆".repeat(5 - Math.round(demoProduct.rating.rate))}
          </span>
          <span className="text-sm ml-2">({demoProduct.rating.count})</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">${demoProduct.price}</span>
          <div className="join">
            <button
              className="join-item btn btn-sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <button className="join-item btn btn-sm">{quantity}</button>
            <button
              className="join-item btn btn-sm"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <AddToCart productId={demoProduct.id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
