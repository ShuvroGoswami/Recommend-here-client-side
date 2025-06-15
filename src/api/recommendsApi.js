
 export const myRecommendsPromise = email =>{
    return fetch(`http://localhost:3000/recommends?email=${email}`).then(res => res.json())
}