import { useEffect, useState, useRef } from "react";
import User from "./pages/User/User";
import Form from "./pages/Form/Form";
import Loading from "./components/Loading";
import { getUser, postLogut, postRefresh } from "./service/api";
import type { stateApp, stateLoad } from "./types/typeStates";
import type {
  AccessResponse,
  ApiResponse,
  LoginResponse,
} from "./types/typeService";

export default function App() {
  const [load, setLoad] = useState<stateLoad>({ status: "load" });
  const [app, setApp] = useState<stateApp>({ status: "none" });

  const didRun = useRef(false); // solucion al doble useEffect
  // Ocurre una sola vez, cuando toda la APP se renderice
  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    handleEffect()
  }, []);

  function handleLoading(stl: stateLoad) {
    setLoad(stl);
  }

  async function handleEffect() {
    const remember = localStorage.getItem("remember");

    if (!remember) {
      setApp({ status: "idle" });
      setLoad({ status: "idle" });
    } else {
      await handleRefreshToken()
    }
  }

  async function handleRefreshToken() {
    try {
      const res: LoginResponse =
        await postRefresh<LoginResponse>("/api/auth/refresh");
      const user: AccessResponse = await getUser<AccessResponse>(
        "/api/auth/profile",
        res.access_token,
      );
      setApp({
        status: "success",
        data: user.data,
        access_token: res.access_token,
      });
      setLoad({ status: "idle" });
    } catch (error) {
      console.error((error as Error).message);
      setApp({ status: "idle" });
      setLoad({ status: "idle" });
    }
  }

  async function handleSubmitAuth(token: string) {
    try {
      const res: AccessResponse = await getUser<AccessResponse>(
        "/api/auth/profile",
        token,
      );
      setApp({ status: "success", data: res.data, access_token: token });
    } catch (error) {
      console.log(error);
    }
    setLoad({ status: "idle" });
  }

  async function handleOnDisconnect() {
    try {
      const res: ApiResponse = await postLogut<ApiResponse>("/api/auth/logout");
      localStorage.removeItem("remember");
      alert(res.message);
    } catch (error) {
      alert((error as Error).message);
    }
    setApp({ status: "idle" });
    setLoad({ status: "idle" });
  }

  return (
    <>
      {app.status === "idle" && (
        <Form onLoad={handleLoading} onLogin={handleSubmitAuth} />
      )}
      {app.status === "success" && (
        <User
          data={app.data}
          access_token={app.access_token}
          onEditPass={handleSubmitAuth}
          onLoad={handleLoading}
          onDisconnect={handleOnDisconnect}
        />
      )}
      {load.status === "load" && <Loading />}
    </>
  );
}
