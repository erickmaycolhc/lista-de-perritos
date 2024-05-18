import React from "react";
import Link from "next/link";
import LoginLayout from "../../components/layout/LoginLayout";

const Login = () => {
  return (
    <>
      <LoginLayout>
        <div className="caja-user">
          <div className="encapsulado-login">
            <div className="datos-login">
              <div className="campo-1">
                <h3>
                  Star<span>Admin</span>
                </h3>
              </div>

              <div className="campo-2">
                <input type="text" placeholder="Username" />
              </div>

              <div className="campo-3">
                <input type="text" placeholder="Username" />
              </div>

              <div className="campo-4">
                <Link href={"/admin/mascota"}>
                  <button type="button">SIGN IN</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LoginLayout>
    </>
  );
};
export default Login;
