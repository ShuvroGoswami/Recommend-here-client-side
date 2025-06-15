import RecommendList from './RecommendList';
import { AuthContext } from '../provider/AuthProvider';
import { Suspense, use } from 'react';
import { myRecommendsPromise } from '../api/recommendsApi';



const Myrecommends = () => {

    const {user} = use(AuthContext);
    console.log(user?.email);



    return (
        <div>
            
           {user && <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <RecommendList
                myRecommendsPromise={myRecommendsPromise(user?.email)}
                ></RecommendList>
            </Suspense>}
        </div>
    );
};

export default Myrecommends;