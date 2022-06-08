const client_id = '239c7818658542b2ade3a6294a027c07';
const client_secret = '0c9d6cda69104b13be981ecb33ac4e55';

const fetchTemplate = async (url) => {
   let token = await getToken();
   const result = await fetch(`https://api.spotify.com/v1/` + url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token
      }
   })
   if (result.ok) {
      const data = await result.json();
      return data
   } else {

      if (result.status === 401) {
         throw new Error("Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user.")
      } else
         if (result.status === 403) {
            throw new Error
               ("Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here.")
         } else
            if (result.status === 404) {
               throw new Error("There's no data. Try to reload page.")
            } else throw new Error("Something went wrong");
   }
}

const getToken = async () => {
   const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      body: 'grant_type=client_credentials'
   });

   const data = await result.json();
   return data.access_token;
}

export const getAlbums = async () => {

   try {
      const limit = 20;
      const url = `browse/new-releases?limit=${limit}`;
      return await fetchTemplate(url);
   }

   catch (e) {
      alert(e);
   }
}

export const getTracks = async (id) => {

   try {
      const url = `albums/${id}/tracks`;
      let data = await fetchTemplate(url);
      return data.items;
   }

   catch (e) {
      alert(e);
   }
}