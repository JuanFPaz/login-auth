import React, { useState } from "react";
import SignUp from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import Button from "../../components/Button";
import { postLogin, postReset, postSignUp } from "../../service/api";
import type { propsForm } from "../../types/typeProps";
import type { stateForm } from "../../types/typeStates";
import type {
  ApiResponse,
  LoginResponse,
  UserLogin,
  UserRegister,
} from "../../types/typeService";
import "./Form.css";
import Reset from "./components/Reset/Reset";

export default function Form({ onLoad, onLogin }: propsForm) {
  const [form, setForm] = useState<stateForm>({ status: "login" });

  function handleLogin() {
    setForm({ status: "login" });
  }
  function handleRegister() {
    setForm({ status: "register" });
  }

  function handleReset(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setForm({ status: "reset" });
  }

  async function handleLoginSubmit(body: UserLogin) {
    try {
      const res: LoginResponse = await postLogin<LoginResponse>(
        "/api/auth/login",
        body,
      );
      onLogin(res.access_token);
    } catch (error) {
      console.log(error);
    }
    onLoad({ status: "idle" });
  }

  async function handleRegisterSubmit(body: UserRegister) {
    try {
      const res: ApiResponse = await postSignUp<ApiResponse>(
        "/api/auth/register",
        body,
      );
      alert(res.message);      
      setForm({ status: "login" });
    } catch (error) {
      console.log(error);
      alert(error);
    }
    onLoad({ status: "idle" });
  }

  async function handleResetSubmit(body: {
    username: string;
    email: string;
    password: string;
  }) {
    try {
      const res: ApiResponse = await postReset<ApiResponse>(
        "/api/auth/password/reset",
        body,
      );
      alert(res.message);
      setForm({ status: "login" });
    } catch (error) {
      alert(error);
    }
    onLoad({ status: "idle" });
  }
  return (
    <>
      <div className="form-page">
        <div className="form-card">
          <div className="form-buttons">
            <div className="buttons-container">
              <Button
                id="login"
                onClick={handleLogin}
                textContent="Iniciar Sesion"
              ></Button>
              <Button
                id="register"
                onClick={handleRegister}
                textContent="Registrarse"
              ></Button>
            </div>
          </div>
          <div className="form-titles">
            <div className="titles-container">
              <div className="title">
                <h1>Bienvenido</h1>
              </div>
              <div className="subtitle">
                <h2>
                  {form.status === "login"
                    ? "Iniciar Sesion"
                    : "Crear Nueva Cuenta"}
                </h2>
              </div>
            </div>
          </div>
          <div className="form-container">
            {form.status === "reset" && (
              <Reset onLoad={onLoad} onSubmit={handleResetSubmit} />
            )}
            {form.status === "login" && (
              <Login
                onLoad={onLoad}
                onSubmit={handleLoginSubmit}
                onClick={handleReset}
              />
            )}
            {form.status === "register" && (
              <SignUp onLoad={onLoad} onSubmit={handleRegisterSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
