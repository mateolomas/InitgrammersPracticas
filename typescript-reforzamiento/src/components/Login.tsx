import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";

interface AuthState {
  validado: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

type LoginPayload = { username: string; nombre: string };

type AuthAction =
  | {
      type: "logout";
    }
  | { type: "login"; payload: LoginPayload };

const initialState = {
  validado: true,
  token: null,
  username: "",
  nombre: "",
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validado: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      return {
        validado: false,
        token: "tokenABC",
        nombre: action.payload.nombre,
        username: action.payload.username,
      };
  }
};

export const Login = () => {
  const [{ validado, token, nombre }, dispatch] = useReducer(
    AuthReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { username: "pepe123", nombre: "Pepe" },
    });
  };

  const logout = () => {
      dispatch({ type: "logout" });
  }

  if (validado) {
    return (
      <>
        <h1>Login</h1>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h1>Login</h1>
      {token ? (
        <div className="alert alert-success">Exito, bienvenido {nombre}</div>
      ) : (
        <div className="alert alert-danger">No authenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick = {logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
