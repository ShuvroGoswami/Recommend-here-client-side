// import React from 'react';
// import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';

// const UpdateProduct = () => {

//     const {_id, name, Image, brand, title, Reason,}  = useLoaderData();

//     const handleUpdate = e =>{
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const UpdateProduct = Object.fromEntries(formData.entries())
//         console.log(UpdateProduct);

//         // update recipe send mongodb
//         fetch(`http://localhost:3000/product/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type':'application/json'
//             },
//             body: JSON.stringify(UpdateProduct)
//         })
//         .then(res => res.json())
//         .then(data => {
//            if(data.modifiedCount){
//              Swal.fire({
//               title: "Good job!",
//               text: "Your recipe updated successfully!",
//               icon: "success"

//             });
//            }
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={handleUpdate}>
//   <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
    
//     {/* name */}
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//       <label className="label">Name</label>
//       <input type="text" name='name' required className="input w-full"
//       defaultValue={name} 
//        placeholder="Name" />
//     </fieldset>

//     {/* Image URL */}
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//       <label className="label">Image</label>
//       <input type="text" name='Image' required className="input w-full"
//       defaultValue={Image} 
//       placeholder="Image URL" />
//     </fieldset>

//     {/* brand */}
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//       <label className="label">Brand</label>
//       <input type="text" name='brand' required className="input w-full"
//       defaultValue={brand}
//        placeholder="Brand" />
//     </fieldset>

//     {/*  title */}
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//       <label className="label">Query TItle</label>
//       <input type="text" name='title' required className="input w-full"
//       defaultValue={title}
//        placeholder="Is there any Better product that gives me the same quality?" />
//     </fieldset>

//     {/* Reason */}
//     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//       <label className="label">Boycotting Reason Details</label>
//       <input type="text" name='Reason' className="input w-full"
//       defaultValue={Reason}
//        required placeholder="Reason" />
//     </fieldset>
//   </div>
//   <input className='btn w-full mt-3' type="submit" value='Update' />
// </form>
//         </div>
//     );
// };

// export default UpdateProduct;

import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const defaultTheme = {
  primaryColor: '#5c6ac4',
  primaryHover: '#4f46e5',
  bgGradientFrom: '#ebf0ff',
  bgGradientTo: '#f9f7fe',
  inputBorder: '#c7d2fe',
  inputFocusRing: '#818cf8',
  textPrimary: '#3730a3',
};

const UpdateProduct = ({ theme = {} }) => {
  const {
    primaryColor,
    primaryHover,
    bgGradientFrom,
    bgGradientTo,
    inputBorder,
    inputFocusRing,
    textPrimary,
  } = { ...defaultTheme, ...theme };

  const { _id, name, Image, brand, title, Reason } = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdateProduct = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/product/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(UpdateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Good job!',
            text: 'Your product updated successfully!',
            icon: 'success',
            confirmButtonColor: primaryColor,
          });
        }
      });
  };

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${bgGradientFrom} 0%, ${bgGradientTo} 100%)`,
      }}
      className="min-h-screen flex justify-center items-start py-12 px-6"
    >
      <div
        style={{ borderColor: inputBorder }}
        className="bg-white shadow-xl rounded-xl p-10 w-full max-w-4xl border"
      >
        <h1
          style={{ color: textPrimary }}
          className="text-3xl font-bold text-center mb-8"
        >
          Update Product Details
        </h1>
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          noValidate
        >
          {/* Name */}
          <fieldset className="flex flex-col">
            <label
              style={{ color: textPrimary }}
              className="mb-2 font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue={name}
              placeholder="Name"
              style={{
                borderColor: inputBorder,
              }}
              className="input w-full px-4 py-3 rounded-md border focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = inputFocusRing)}
              onBlur={(e) => (e.target.style.borderColor = inputBorder)}
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="flex flex-col">
            <label
              style={{ color: textPrimary }}
              className="mb-2 font-semibold"
              htmlFor="Image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="Image"
              name="Image"
              required
              defaultValue={Image}
              placeholder="Image URL"
              style={{
                borderColor: inputBorder,
              }}
              className="input w-full px-4 py-3 rounded-md border focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = inputFocusRing)}
              onBlur={(e) => (e.target.style.borderColor = inputBorder)}
            />
          </fieldset>

          {/* Brand */}
          <fieldset className="flex flex-col">
            <label
              style={{ color: textPrimary }}
              className="mb-2 font-semibold"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              required
              defaultValue={brand}
              placeholder="Brand"
              style={{
                borderColor: inputBorder,
              }}
              className="input w-full px-4 py-3 rounded-md border focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = inputFocusRing)}
              onBlur={(e) => (e.target.style.borderColor = inputBorder)}
            />
          </fieldset>

          {/* Title */}
          <fieldset className="flex flex-col">
            <label
              style={{ color: textPrimary }}
              className="mb-2 font-semibold"
              htmlFor="title"
            >
              Query Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              defaultValue={title}
              placeholder="Is there any Better product that gives me the same quality?"
              style={{
                borderColor: inputBorder,
              }}
              className="input w-full px-4 py-3 rounded-md border focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = inputFocusRing)}
              onBlur={(e) => (e.target.style.borderColor = inputBorder)}
            />
          </fieldset>

          {/* Reason */}
          <fieldset className="flex flex-col md:col-span-2">
            <label
              style={{ color: textPrimary }}
              className="mb-2 font-semibold"
              htmlFor="Reason"
            >
              Boycotting Reason Details
            </label>
            <input
              type="text"
              id="Reason"
              name="Reason"
              required
              defaultValue={Reason}
              placeholder="Reason"
              style={{
                borderColor: inputBorder,
              }}
              className="input w-full px-4 py-3 rounded-md border focus:outline-none transition"
              onFocus={(e) => (e.target.style.borderColor = inputFocusRing)}
              onBlur={(e) => (e.target.style.borderColor = inputBorder)}
            />
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            style={{ backgroundColor: primaryColor }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = primaryHover)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = primaryColor)}
            className="md:col-span-2 w-full py-4 text-white font-semibold rounded-lg shadow-md transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
