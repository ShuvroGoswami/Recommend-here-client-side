// import React, { use, useContext, useEffect, useState } from 'react';
// import RecomendListCard from './RecomendListCard';
// import { AuthContext } from '../provider/AuthProvider';
// import { Link } from 'react-router';

// const RecommendList = ({myRecommendsPromise}) => {
//     const {user, loading} = useContext(AuthContext);

//     const recommends = use(myRecommendsPromise)
//     console.log(recommends);

//     const [products, setProduct] = useState(recommends); 

//     useEffect(() => {
//         if (!loading && user?.email) {
//           // Fetch only this user's recipes
//           fetch(`http://localhost:3000/recommends?email=${user.email}`)
//             .then(res => res.json())
//             .then(data => setProduct(data))
//             .catch(err => console.error("Error fetching user product:", err));
//         }
//       }, [user, loading]);
    
//       if (loading) return <p>Loading...</p>;
   
//     return (
//         <div>
//             <h3>My recommends</h3>
            
//             {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
//                 {
//             recommends.map(recommend => <RecomendListCard recommend={recommend}></RecomendListCard>)
//            }
//             </div> */}

//              {products.length === 0 ? (
//         <p>You haven't added any product yet. <Link  className="text-blue-600">Add Product</Link></p>
//       ) : (
//         products.map(product => (
//           <RecomendListCard 
//             key={product._id}
//             product={product}
//             Products={products}
//             setProduct={setProduct}
//           />
//         ))
//       )}
           
//         </div>
//     );
// };

// export default RecommendList;


import React, { use, useContext, useEffect, useState } from 'react';
import RecomendListCard from './RecomendListCard';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const RecommendList = ({ myRecommendsPromise }) => {
    const { user, loading } = useContext(AuthContext);
    const recommends = use(myRecommendsPromise);
    const [products, setProducts] = useState(recommends);

    useEffect(() => {
        if (!loading && user?.email) {
            fetch(`http://localhost:3000/recommends?email=${user.email}`)
                .then(res => res.json())
                .then(data => setProducts(data))
                .catch(err => console.error("Error fetching user product:", err));
        }
    }, [user, loading]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-5">
            <h3 className="text-xl font-semibold mb-4">My Recommends</h3>

            {products.length === 0 ? (
                <p>
                    You haven't added any product yet.{' '}
                    <Link className="text-blue-600">Add Product</Link>
                </p>
            ) : (
                <div className="overflow-x-auto ">
                    <table className="min-w-full bg-white border border-gray-200 ">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left py-2 px-4 border-b text-black">Image</th>
                                <th className="text-left py-2 px-4 border-b text-black">Name</th>
                                <th className="text-left py-2 px-4 border-b text-black">Title</th>
                                <th className="text-left py-2 px-4 border-b text-black">Reason</th>
                                <th className="text-left py-2 px-4 border-b text-black">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {products.map(product => (
                                <RecomendListCard
                                    key={product._id}
                                    product={product}
                                    products={products}
                                    setProducts={setProducts}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecommendList;
