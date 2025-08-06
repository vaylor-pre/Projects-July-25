"use client";

import React, { useState } from "react";
import { Product } from "./types";
import ProductCard from "./productcard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        <button
          className={`btn btn-sm ${
            filter === "all" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-sm ${
              filter === category ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
