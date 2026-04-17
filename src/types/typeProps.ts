import type { stateLoad, stateApp } from "./typeStates";
import type { UserResponse } from "./typeService";
export type propsSignUp = {
  onLoad: (st: stateLoad) => void;
  onSubmit: () => void;
};

export type propsLogin = {
  onLoad: (st: stateLoad) => void;
  onSubmit: (a_t:string) => void;
};

export type propsForm = {
  onLoad: (stl: stateLoad) => void;
  onSubmit: (sta: stateApp) => void;
};

export type propsUser = {
  data: UserResponse;
  onDisconnect: () => void;
};

export type propsTablaUser = {
  userAuth: UserResponse;
};
