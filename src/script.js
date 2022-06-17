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
      } else if (result.status === 403) {
         throw new Error
            ("Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here.")
      } else if (result.status === 404) {
         throw new Error("There's no data. Try to reload page.")
      } else throw new Error("Something went wrong");
   }
}

//получаем куки
function getCookie() {
   let result;
   const cookie = 'token';
   const name = cookie + '=';
   const decode = decodeURIComponent(document.cookie);
   const array = decode.split('; ');
   array.forEach((value) => {
      if (value.indexOf(name) === 0) {
         result = value.substring(name.length);
      }
   });
  
   return result;
}

//записываем куки
function setCookie(name, value, options = {}) {
   options = {
      path: '/',
      SameSite: null,
      ...options,
   };
  
   if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
   }
  
   let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  
   for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
   }
  
   document.cookie = updatedCookie;
}

//получаем токен
async function getToken() {
   if (getCookie()) {
      return getCookie();
   } else {
      try {
         const res = await fetch('https://accounts.spotify.com/api/token', {
         method: 'POST',
         body: 'grant_type=client_credentials',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
         },
      });
      const result = await res.json();
      setCookie('token', result.access_token, { 'max-age': result.expires_in });
  
      return getCookie();
      } catch (e) {
        console.log(e);
      }
   }
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