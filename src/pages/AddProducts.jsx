
import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const AddProducts = () => {
  const { user } = use(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const NewProject = Object.fromEntries(formData.entries());
    console.log(NewProject);

    fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...NewProject,
        email: user.email,
        userName: user.displayName,
        userImage: user.photoURL,
        createdAt: new Date().toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Your product was added successfully!',
            icon: 'success',
            confirmButtonColor: '#4f46e5',
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center py-16 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl max-w-3xl w-full p-10">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
          Add New Product
        </h1>
        <p className="text-center mb-10 text-gray-600 text-lg">
          Fill the form below to add your product.
        </p>

        <form onSubmit={handleAddProduct} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-indigo-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter product name"
                className="input input-bordered w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="Image"
                className="block mb-2 text-sm font-semibold text-indigo-700"
              >
                Image URL
              </label>
              <input
                type="text"
                id="Image"
                name="Image"
                required
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-semibold text-indigo-700"
              >
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                required
                placeholder="Enter brand name"
                className="input input-bordered w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-semibold text-indigo-700"
              >
                Query Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="Is there any better product with similar quality?"
                className="input input-bordered w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Reason (full width) */}
            <div className="md:col-span-2">
              <label
                htmlFor="Reason"
                className="block mb-2 text-sm font-semibold text-indigo-700"
              >
                Boycotting Reason Details
              </label>
              <textarea
                id="Reason"
                name="Reason"
                required
                placeholder="Please provide the reason for boycotting this product"
                rows={4}
                className="input input-bordered w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
