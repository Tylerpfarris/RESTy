// export const getJson = async ({url, body, method}) => {
//    const res = await fetch(url,{
//       method,
//       body,
//       headers: {
//          'Content-type':'application/json; charset=UTF-8'
//       }
//    });
//    const json = await res.json()

//    return JSON.stringify(json, null, 2)
// }

export const fetchJson = async ({ url, body, method }) => {
   if (method === 'GET' || method === 'DELETE') {
        const res = await fetch(url,{
      method,
      headers: {
         'Content-type':'application/json; charset=UTF-8'
      }
   });
   const json = await res.json()

   return JSON.stringify(json, null, 2) 
   } else {
      const res = await fetch(url,{
      method,
      body,
      headers: {
         'Content-type':'application/json; charset=UTF-8'
      }
   });
   const json = await res.json()

   return JSON.stringify(json, null, 2) 

   }

}

