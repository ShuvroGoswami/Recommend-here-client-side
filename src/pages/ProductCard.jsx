// import React from 'react';
// import Swal from 'sweetalert2';

// const ProductCard = ({product, Products, setProduct}) => {

//     const {
//     _id,
//      name,
//      brand,
//     title,
//     Image,
//     Reason,
//    } = product

// const handleDelete = (_id) => {


//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {

//         // connect to mongo
//         fetch(`http://localhost:3000/product/${_id}`, {
//           method: 'DELETE'
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount === 1) {
//               // const remainingRecipes = recipe.filter(recipes => recipe._id !== _id);
//               // recipe(remainingRecipes)

//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your recipe has been deleted.",
//                 icon: "success"
//               });

//               const remainingProducts = Products.filter(rec => rec._id !== _id);
//               setProduct(remainingProducts)
//             }
//           })
//       }
//     });
//   }

//     return (
//         <div>
//            <div className=" bg-cyan-900 mb-5">
//   <div className="hero-content flex-col lg:flex-row justify-between">
//     <img
//       src={Image}
//       className="w-[500px] rounded-lg shadow-2xl"
//     />
//     <div className='mr-100'>
//       <h1 className="text-5xl font-bold">{name} </h1>
//       <p className="py-6">
//         {title}
//       </p>
//       <p className="py-6">
//         {Reason}
//       </p>
//       <p className="py-6">
//         {brand}
//       </p>
//        <div>
            
//         <button
//               onClick={() => handleDelete(_id)}
//               className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//         </div>
//     </div>
//   </div>
// </div>
       
//         </div>
//     );
// };

// export default ProductCard;


import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ProductCard = ({ product, Products, setProduct }) => {
  const { _id, name, brand, title, Image, Reason } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/product/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });

              const remainingProducts = Products.filter(item => item._id !== _id);
              setProduct(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 transition-transform hover:scale-[1.01] border border-gray-200">
      <div className="flex flex-col lg:flex-row">
        <img
          src={Image}
          alt={name}
          className="w-full lg:w-[400px] h-64 object-cover"
        />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Product name:{name}</h2>
            <p className="text-gray-600 mb-2">{title}</p>
            <p className="text-gray-500 mb-2 italic">Reason: {Reason}</p>
            <p className="text-sm text-gray-400">Brand: {brand}</p>
          </div>
          <div className="flex ">
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition-colors mr-5"
            >
              Delete
            </button>
            <Link className='mr-5' to={`/ProductDetails/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Details
                </button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
            <button className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-5">
              Update
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
