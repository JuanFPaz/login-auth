import type { stateLoad, stateApp } from "./typeStates";
import type { userAuth } from "./typeService";
export type propsSignUp = {
  onLoad: (st: stateLoad) => void;
  onSubmit: () => void;
};

export type propsLogin = {
  onLoad: (st: stateLoad) => void;
  onSubmit: () => void;
};

export type propsForm = {
  onLoad: (stl: stateLoad) => void;
  onSubmit: (sta: stateApp) => void;
};

export type propsUser = {
  data: userAuth;
  onDisconnect: () => void;
};
