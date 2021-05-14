export const getJson = async ({url, body, method}) => {
   const res = await fetch(url,{
      method,
      body: null,
      headers: {
         'Content-type':'application/json; charset=UTF-8'
      }
   });
   const json = await res.json()

   return JSON.stringify(json)
}