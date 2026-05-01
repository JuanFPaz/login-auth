import type { stateLoad } from "./typeStates";
import type { UserLogin, UserRegister, UserResponse } from "./typeService";

export type propsSignUp = {
  onLoad: (st: stateLoad) => void;
  onSubmit: (body:UserRegister) => void;
};

export type propsLogin = {
  onLoad: (st: stateLoad) => void;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>)=>void;
  onSubmit: (body:UserLogin) => Promise <void>;
};

export type propsForm = {
  onLoad: (stl: stateLoad) => void;
  onLogin: (token:string) => Promise<void>;
};

export type propsUser = {
  data: UserResponse;
  access_token: string,
  onEditPass: (token:string)=>Promise<void>
  onLoad: (st: stateLoad) => void;
  onDisconnect: () => void;
};

export type propsTablaUser = {
  userAuth: UserResponse;
};
