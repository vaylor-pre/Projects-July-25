import React from "react";
import Link from "next/link";
import { User } from "../components/types";
import UsersTable from "../components/UsersTable";

const UsersPage = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await res.json();

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Sellers Dashboard</h1>
          <div className="flex gap-4">
            <Link href="/" className="btn btn-outline">
              Home
            </Link>
            <Link href="/products" className="btn btn-primary">
              View Products
            </Link>
          </div>
        </div>

        <div className="bg-base-100 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Seller List</h2>
            <p className="text-sm">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>
          <UsersTable users={users} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">
          <span>Error loading users: {(error as Error).message}</span>
        </div>
        <Link href="/" className="btn btn-outline mt-4">
          Return Home
        </Link>
      </div>
    );
  }
};

export default UsersPage;
