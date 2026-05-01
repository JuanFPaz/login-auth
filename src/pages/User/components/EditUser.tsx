import Input from "../../../components/Input";
import type { stateLoad} from "../../../types/typeStates";

export default function EditUser({
  onLoad,
  onSubmit,
}: {
  onLoad: (st: stateLoad) => void;
  onSubmit: (body: { currentPass: string; newPass: string }) => Promise<void>;
}) {

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoad({ status: "load" });
    const fd: FormData = new FormData(event.currentTarget);
    const bodyUser: { currentPass: string; newPass: string } = {
      currentPass: fd.get("currentPass") as string,
      newPass: fd.get("newPass") as string,
    };

    onSubmit(bodyUser);
  };

  return (
    <div className="user-edit">
      <form className="form-edit" onSubmit={handleSubmit}>
        <div className="edit-titulo">
          <h2>Cambiar Contraseña</h2>
        </div>
        <Input
          id="currentPass"
          className="input"
          type="password"
          textContent="Contraseña Actual"
          required={true}
        />
        <Input
          id="newPass"
          className="input"
          type="password"
          textContent="Nueva Contraseña"
          required={true}
        />
        <Input
          id="repeatNewPass"
          className="input"
          type="password"
          textContent="Repetir Contraseña"
          required={true}
        />
        <button type="submit" className="submit">
          Cambiar contraseña
        </button>
      </form>
    </div>
  );
}
