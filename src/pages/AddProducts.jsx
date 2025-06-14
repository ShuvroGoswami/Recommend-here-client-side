import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
// import { Helmet } from 'react-helmet-async';

const AddProducts = () => {
  const  {user} = use(AuthContext)

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const NewProject = Object.fromEntries(formData.entries())
        console.log(NewProject);

        // send data to db
        fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({...NewProject, email:user.email,
         userName: user.displayName,
         userImage: user.photoURL,
         createdAt: new Date().toISOString(), // You can format this if needed
            })
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
              Swal.fire({
  title: "Good job!",
  text: "Your recipe added successfully!",
  icon: "success"
});
            }
        })

    }

    return (
        <div className='p-20'>
          {/* <Helmet>
            <title>Add-recipe</title>
          </Helmet> */}
            <div className='p-8'>
                <h1 className='text-center font-bold text-2xl m-4'>Add Product</h1>
            <p className='text-center font-bold'>You can add your product here.</p>
            </div>

            <form onSubmit={handleAddProduct}>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    
    {/* name */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Name</label>
      <input type="text" name='name' required className="input w-full" 
       placeholder="Name" />
    </fieldset>

    {/* Image URL */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Image</label>
      <input type="text" name='Image' required className="input w-full" placeholder="Image URL" />
    </fieldset>

    {/* brand */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Brand</label>
      <input type="text" name='brand' required className="input w-full" placeholder="Brand" />
    </fieldset>

    {/*  title */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Query TItle</label>
      <input type="text" name='title' required className="input w-full" placeholder="Is there any Better product that gives me the same quality?" />
    </fieldset>

    {/* Reason */}
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
      <label className="label">Boycotting Reason Details</label>
      <input type="text" name='Reason' className="input w-full" required placeholder="Reason" />
    </fieldset>
  </div>
  <input className='btn w-full mt-3' type="submit" value='Add Recipe' />
</form>


        </div>
    );
};

export default AddProducts;