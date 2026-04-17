export function optionsPOST(body?:unknown): RequestInit {
  if (!body) {
    return {
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  }
  return {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

export function optionsGET(access_token:string):RequestInit{
    return {
    method: "GET",
    mode: "cors",
    headers:{
      Authorization: `Bearer ${access_token}`
    },
    credentials: "include",
  };
}