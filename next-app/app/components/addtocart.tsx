"use client";

import React, { useState } from "react";

interface AddToCartProps {
  productId: number;
  quantity: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ productId, quantity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Added ${quantity} of product ${productId} to cart`);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        className={`btn btn-primary ${isLoading ? "loading" : ""}`}
        onClick={handleAddToCart}
        disabled={isLoading || isSuccess}
      >
        {isSuccess ? "Added to Cart!" : "Add To Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
