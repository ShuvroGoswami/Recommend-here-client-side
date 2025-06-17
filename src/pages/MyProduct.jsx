import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import ProductCard from './ProductCard';

const MyProduct = () => {
    const {user, loading} = useContext(AuthContext);
    const [products, setProduct] = useState([]); 

     useEffect(() => {
    if (!loading && user?.email) {
      // Fetch only this user's recipes
      fetch(`http://localhost:3000/products/user?email=${user.email}`
        ,{
        headers: {
          authorization : `Bearer ${user.accessToken}`
        }
      }
    )
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error("Error fetching user product:", err));
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;


    return (
        <div>
            <div className="p-10">
      {/* <Helmet>
        <title>My-recipe</title>
      </Helmet> */}
      <h2 className="text-xl font-bold mb-4">My Query</h2>
      {products.length === 0 ? (
        <p>You haven't added any query yet. <Link to='/addproduct' className="text-blue-600">Add Query</Link></p>
      ) : (
        products.map(product => (
          <ProductCard 
            key={product._id}
            product={product}
            Products={products}
            setProduct={setProduct}
          />
        ))
      )}
      <Link  to='/addproduct' className=" btn btn-secondary mr-20">Add Query</Link>
    </div>
    
        </div>
    );
};

export default MyProduct;