import { useState, useEffect } from "react";
import {
  postUserAuth,
  type resLogin,
  type userLogin,
} from "../../../../../../login-form/src/utils/api";
import Input, { CheckBox } from "../../../../components/Input";
import type { stateLoad, stateMessage } from "../../../../types/typeStates";

type propsLogin = {
  onLoad: (st: stateLoad) => void;
  onSubmit: () => void;
};

export default function Login({ onLoad, onSubmit }: propsLogin) {
  const [message, setMessage] = useState<stateMessage>({ status: "idle" });

  useEffect(() => {
    if (message.status === "success") alert(message.data);
    if (message.status === "error") alert(message.error);
  }, [message]);

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoad({ status: "load" });
    const fd: FormData = new FormData(event.currentTarget);
    console.log(fd)
    const bodyUser: userLogin = {
      username: fd.get('username') as string,
      password: fd.get('password') as string
    }
    const rememberUser = fd.get('rememberme')
    console.log(rememberUser);
    
    try {
      const res: resLogin = await postUserAuth<resLogin>(
        "/api/auth/login",
        bodyUser,
      );
      setMessage({ status: "success", data: res.message });
      if(rememberUser) localStorage.setItem('remember','on')
      onSubmit();
    } catch (err) {
      setMessage({ status: "error", error: (err as Error).message });
      onLoad({ status: "idle" });
    }
  };

  return (
    <form className="form-login" id="form-login" onSubmit={handleSubmit}>
      <Input
        id="username"
        className="input"
        type="text"
        textContent="Username"
        required={true}
      />
      <Input
        id="password"
        className="input"
        type="password"
        textContent="Password"
        required={true}
      />
      <CheckBox
        id="rememberme"
        className="checkbox"
        type="checkbox"
        textContent="Remember me"
        required={false}
      />
      <button type="submit" className="submit">
        Log In
      </button>
    </form>
  );
}
