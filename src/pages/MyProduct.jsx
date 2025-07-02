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
      fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/products/user?email=${user.email}`
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
            <div className="p-10 bg-gradient-to-r from-white via-blue-100 to-purple-100">
      {/* <Helmet>
        <title>My-recipe</title>
      </Helmet> */}
      <h2 className="text-xl font-bold mb-4">My Query</h2>
      {products.length === 0 ? (
        <p>You haven't added any query yet. <Link to='/addproduct' className="text-indigo-600">Add Query</Link></p>
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
      <Link  to='/addproduct' className=" btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mr-20">Add Query</Link>
    </div>
    
        </div>
    );
};

export default MyProduct;