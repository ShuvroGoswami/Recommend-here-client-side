

import React, { useEffect, useState } from 'react';
import AllProductCard from './AllProductCard';

const Queries = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const url = query
        ? `https://b11a11-server-side-shuvro-goswami.vercel.app/product?search=${encodeURIComponent(query)}`
        : 'https://b11a11-server-side-shuvro-goswami.vercel.app/product';
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search); // Set query on submit
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product name..."
          className="input input-bordered w-full max-w-md mr-2"
        />
        <button type="submit" className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
          Search
        </button>
      </form>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No results found.</p>
        ) : (
          products.map((product) => (
            <AllProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Queries;
