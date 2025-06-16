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

