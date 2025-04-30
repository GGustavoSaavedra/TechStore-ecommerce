"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim().length) {
      router.push(`/products/${searchQuery.trim()}`);
    } else {
      toast("Por favor, escribe algo para buscar.");
    }
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Buscar..."
        className="w-40 sm:w-48 text-sm bg-transparent border-b border-gray-300 placeholder-gray-500 focus:border-gray-800 focus:outline-none py-1"
      />
      <button
        type="submit"
        className="p-1 rounded hover:bg-gray-200 transition"
        aria-label="Buscar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="text-gray-800 hover:text-black transition-colors"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
