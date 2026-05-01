import Input from "../../../components/Input";
import type { stateLoad } from "../../../types/typeStates";

export default function DeleteUser({onLoad, onSubmit}:{onLoad:(st:stateLoad)=>void,onSubmit:(body:{password:string})=>Promise<void>}) {
  
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoad({ status: "load" });
    const fd: FormData = new FormData(event.currentTarget);
    const bodyUser: {password:string} = {
      password: fd.get("password") as string,
    };

    onSubmit(bodyUser);
  };
  return (
    <div className="user-edit">
      <form className="form-edit" onSubmit={handleSubmit}>
        <div className="edit-titulo">
          <h2>Borrar Cuenta</h2>
        </div>
        <Input
          id="password"
          className="input"
          type="password"
          textContent="Ingrese el nombre de usuario"
          required={true}
        />
        <button type="submit" className="submit">
          Borrar
        </button>
      </form>
    </div>
  );
}
