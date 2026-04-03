export type responseApi = {
  status: number;
  message: string;
};

export type userRegister = {
  username: string;
  password: string;
  info: {
    name: string;
    lastname: string;
    email: string;
    birthday: string;
    country: string;
  };
};

export type userLogin = {
  username: string;
  password: string;
};

export type userAuth = {
  id: string;
  username: string;
  createdAt: string;
  lastSession: string;
  info: {
    name: string;
    lastname: string;
    email: string;
    birthday: string;
    country: string;
  };
};
