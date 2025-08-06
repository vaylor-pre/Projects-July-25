import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      <div className="text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-10 mt-4">
          Discover amazing products at great prices
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/users" className="btn btn-primary">
            View Sellers
          </Link>
          <Link href="/products" className="btn btn-outline">
            Browse Products
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6">Featured Product</h2>
      </div>
    </main>
  );
}
