export function optionsPOST(body: any = null): RequestInit {
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

export function optionsGET():RequestInit{
    return {
    method: "GET",
    mode: "cors",
    credentials: "include",
  };
}