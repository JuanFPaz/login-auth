const DEV_URL = 'http://localhost:3000'
// const PROD_URL = "https://jwt-prueba.onrender.com";
import type { UserRegister, UserLogin } from "../types/typeService";
import { optionsDELETE, optionsGET, optionsPATCH, optionsPOST } from "../utils/options";

async function api<T>(url: string, options: RequestInit): Promise<T> {
  const res: Response = await fetch(DEV_URL + url, options);
  console.log(res);
  
  if (!res.ok) {
    if (res.status === 404) {
      const err: any = await res.json();
      console.log(err);
      
      throw new Error(`${err.status} - ${err.message}`);
    }

    throw new Error(`${res.status} - ${res.statusText}`);
  }
  return res.json() as T;
}

async function post<T>(url: string, options: RequestInit) {
  return await api<T>(url, options);
}

export async function getUser<T>(url: string, access_token:string): Promise<T> {
  return await api<T>(url, optionsGET(access_token));
}

export async function postLogin<T>(url: string, body: UserLogin) {
  return await post<T>(url, optionsPOST(body));
}

export async function postSignUp<T>(url: string, body: UserRegister) {
  return await post<T>(url, optionsPOST(body));
}

export async function postReset<T>(url: string, body:{username:string, email:string, password:string}){  
  return await post<T>(url, optionsPOST(body))
}

export async function postLogut<T>(url: string): Promise<T> {
  return await post<T>(url, optionsPOST());
}

export async function postRefresh<T>(url:string): Promise<T>{
  return await post<T>(url,optionsPOST())
}

export async function patchUser<T>(url:string,access_token:string,body:{currentPass:string, newPass:string}):Promise<T>{
  return await api<T>(url, optionsPATCH(access_token,body))
}

export async function deleteUser<T>(url:string, access_token:string,body:{password:string}){
  return await api<T>(url,optionsDELETE(access_token,body))
}