import type { stateLoad } from "../../../../types/typeStates";
import Input from "../../../../components/Input";

export default function Reset({
  onLoad,
  onSubmit,
}: {
  onLoad: (st: stateLoad) => void;
  onSubmit: (body: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
}) {
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoad({ status: "load" });
    const fd: FormData = new FormData(event.currentTarget);
    const bodyUser: { username: string; email: string; password: string } = {
      username: fd.get("username") as string,
      email: fd.get("email") as string,
      password: fd.get("password") as string,
    };
    onSubmit(bodyUser);
  };

  return (
    <form className="form-login" id="form-login" onSubmit={handleSubmit}>
      <Input
        id="username"
        className="input"
        type="text"
        textContent="Ingrese su nombre de usuario"
        required={true}
      />
      <Input
        id="email"
        className="input"
        type="email"
        textContent="Ingrese su Correo Electronico"
        required={true}
      />
      <Input
        id="password"
        className="input"
        type="password"
        textContent="Ingrese la nueva contraseña"
        required={true}
      />
      <button type="submit" className="submit">
        Recuperar Contraseña
      </button>
    </form>
  );
}
