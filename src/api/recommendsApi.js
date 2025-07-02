
 export const myRecommendsPromise = (email, accessToken) =>{
    return fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/recommends/by-email?email=${email}` , {
      headers: {
         authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => res.json())
}