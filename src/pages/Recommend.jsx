import React, { use } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Recommend = () => {
    const {id: recommendId} = useParams();
    const {user} = use(AuthContext)
    console.log(recommendId, user);

    const handleAddRecommend = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const image = form.image.value;
        const reason = form.reason.value;

        console.log(title, name, image, reason);

        const recommend = {
            recommendId,
            recommender: user.email,
            name,
            title,
            image,
            reason
        }

        axios.post('http://localhost:3000/recommends', recommend)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
        .catch(error => {
            console.log(error);
        })


    }

    return (
        <div>
            <h3>Recommend here</h3>
            <form onSubmit={handleAddRecommend}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <label className="label">Title</label>
  <input type="text" className="input" name='title' required placeholder="title" />

  <label className="label">Name</label>
  <input type="text" className="input" name='name' required placeholder="name" />

  <label className="label">Image</label>
  <input type="text" className="input" name='image' required placeholder="image url" />

  <label className="label">Reason</label>
  <input type="text" className="input" name='reason' required placeholder="reason" />

  <input type="submit" className='btn btn-secondary' value="Recommend" />

</fieldset>


            </form>
        </div>
    );
};

export default Recommend;