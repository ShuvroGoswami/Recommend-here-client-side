// import React from 'react';
// import Swal from 'sweetalert2';

// const RecomendListCard = ({recommend,  product, Products, setProduct }) => {
//     const {_id} = product

//     const handleDelete = (_id) => {
//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//           if (result.isConfirmed) {
//             fetch(`http://localhost:3000/recommends/${_id}`, {
//               method: 'DELETE'
//             })
//               .then(res => res.json())
//               .then(data => {
//                 if (data.deletedCount === 1) {
//                   Swal.fire({
//                     title: "Deleted!",
//                     text: "Your product has been deleted.",
//                     icon: "success"
//                   });
    
//                   const remainingProducts = Products.filter(item => item._id !== _id);
//                   setProduct(remainingProducts);
//                 }
//               });
//           }
//         });
//       };
//     return (
//         <div>
            
//             <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src={product.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{product.name}</h2>
//     <p>{product.title} </p>
//     <p>{}</p>
//     <div className="card-actions justify-end">
//       <button
//               onClick={() => handleDelete(_id)}
//               className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition-colors mr-5"
//             >
//               Delete
//             </button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default RecomendListCard;

// import React from 'react';
// import Swal from 'sweetalert2';

// const RecomendListCard = ({ product, products, setProducts }) => {
//     const { _id, image, name, title, reason } = product;

//     const handleDelete = (_id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:3000/recommends/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.deletedCount === 1) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your product has been deleted.",
//                                 icon: "success"
//                             });

//                             const remaining = products.filter(item => item._id !== _id);
//                             setProducts(remaining);
//                         }
//                     });
//             }
//         });
//     };

//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto transition transform hover:scale-[1.02] hover:shadow-xl mb-10">
//             <figure className="h-56 overflow-hidden">
//                 <img
//                     src={image}
//                     alt={name}
//                     className="object-cover w-full h-full"
//                 />
//             </figure>
//             <div className="p-5">
//                 <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
//                 <p className="text-gray-600 mt-1">{title}</p>
//                 <p className="text-sm text-gray-500 mt-2">{reason}</p>

//                 <div className="mt-4 flex justify-end">
//                     <button
//                         onClick={() => handleDelete(_id)}
//                         className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition-colors"
//                     >
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecomendListCard;


import React from 'react';
import Swal from 'sweetalert2';

const RecomendListCard = ({ product, products, setProducts }) => {
    const { _id, image, name, title, reason } = product;

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
                fetch(`http://localhost:3000/recommends/${_id}`, {
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

                            const remaining = products.filter(item => item._id !== _id);
                            setProducts(remaining);
                        }
                    });
            }
        });
    };

    return (
        <tr className="border-b hover:bg-gray-50 mb-5">
            <td className="py-2 px-4">
                <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />
            </td>
            <td className="py-2 px-4 text-black">Name: {name}</td>
            <td className="py-2 px-4 text-black">Title: {title}</td>
            <td className="py-2 px-4 text-black">Reason: {reason}</td>
            <td className="py-2 px-4 text-black">
                <button
                    onClick={() => handleDelete(_id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default RecomendListCard;

