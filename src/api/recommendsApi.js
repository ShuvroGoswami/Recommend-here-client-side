
 export const myRecommendsPromise = (email, accessToken) =>{
    return fetch(`http://localhost:3000/recommends?email=${email}` , {
      headers: {
         authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => res.json())
}