export function optionsPOST(body?: unknown): RequestInit {
  if (!body) {
    return {
      method: "POST",
      mode: "cors",
      credentials: "include",
    };
  }
  return {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

export function optionsGET(access_token: string): RequestInit {
  return {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    credentials: "include",
  };
}

export function optionsDELETE(
  access_token: string,
  body: unknown,
): RequestInit {
  return {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  };
}

export function optionsPATCH(access_token: string, body: unknown): RequestInit {
  return {
    method: "PATCH",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  };
}
