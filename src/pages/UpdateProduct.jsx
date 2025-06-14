import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    const {_id, name, Image, brand, title, Reason,}  = useLoaderData();

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const UpdateProduct = Object.fromEntries(formData.entries())
        console.log(UpdateProduct);

        // update recipe send mongodb
        fetch(`http://localhost:3000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount){
             Swal.fire({
              title: "Good job!",
              text: "Your recipe updated successfully!",
              icon: "success"

            });
           }
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
    
    {/* name */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Name</label>
      <input type="text" name='name' required className="input w-full"
      defaultValue={name} 
       placeholder="Name" />
    </fieldset>

    {/* Image URL */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Image</label>
      <input type="text" name='Image' required className="input w-full"
      defaultValue={Image} 
      placeholder="Image URL" />
    </fieldset>

    {/* brand */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Brand</label>
      <input type="text" name='brand' required className="input w-full"
      defaultValue={brand}
       placeholder="Brand" />
    </fieldset>

    {/*  title */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Query TItle</label>
      <input type="text" name='title' required className="input w-full"
      defaultValue={title}
       placeholder="Is there any Better product that gives me the same quality?" />
    </fieldset>

    {/* Reason */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Boycotting Reason Details</label>
      <input type="text" name='Reason' className="input w-full"
      defaultValue={Reason}
       required placeholder="Reason" />
    </fieldset>
  </div>
  <input className='btn w-full mt-3' type="submit" value='Update' />
</form>
        </div>
    );
};

export default UpdateProduct;