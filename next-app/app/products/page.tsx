import React from "react";
import Link from "next/link";
import { Product } from "../components/types";
import ProductGrid from "../components/ProductGrid";

const ProductsPage = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products: Product[] = await res.json();

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <Link href="/" className="btn btn-outline">
            Home
          </Link>
        </div>

        <ProductGrid products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          <span>Error loading products: {(error as Error).message}</span>
        </div>
        <Link href="/" className="btn btn-outline mt-4">
          Return Home
        </Link>
      </div>
    );
  }
};

export default ProductsPage;
