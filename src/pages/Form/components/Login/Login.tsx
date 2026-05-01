import Input, { CheckBox } from "../../../../components/Input";
import type { propsLogin } from "../../../../types/typeProps";
import type {  UserLogin } from "../../../../types/typeService";

export default function Login({ onLoad, onSubmit,onClick }: propsLogin) {
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoad({ status: "load" });
    const fd: FormData = new FormData(event.currentTarget);
    const bodyUser: UserLogin = {
      username: fd.get("username") as string,
      password: fd.get("password") as string,
    };
    const rememberUser = fd.get("rememberme");
    if (rememberUser) localStorage.setItem("remember", "on");
    onSubmit(bodyUser);
  };

  return (
    <form className="form-login" id="form-login" onSubmit={handleSubmit}>
      <Input
        id="username"
        className="input"
        type="text"
        textContent="Usuario"
        required={true}
      />
      <Input
        id="password"
        className="input"
        type="password"
        textContent="Contraseña"
        required={true}
      />
      <CheckBox
        id="rememberme"
        className="checkbox"
        type="checkbox"
        textContent="Mantener sesion iniciada"
        required={false}
      />
      <a href="#" onClick={onClick}>
        Olvide la contraseña
      </a>
      <button type="submit" className="submit">
        Iniciar Sesion
      </button>
    </form>
  );
}
