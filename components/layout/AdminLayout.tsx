import React from "react";
type Props = {
  children: React.ReactNode;
};
const AdminLayout = ({ children }: Props) => {
  return (
    <main>
      <div className="admin-menu">
        <div className="wrapper-logo">
          <img src="http://localhost:3001/img/logo.png" alt="" />
        </div>
        <div className="wrapper-menu">
          <ul>
            <li className="menu-title">
              <span>Dashboard</span>
            </li>
            <li>
              <a href="#">
                <img src="http://localhost:3001/img/1.svg" alt="" /> Dashboard
              </a>
            </li>

            <li className="menu-title">
              <span>Dashboard</span>
            </li>
            <li>
              <a href="#">
                <img src="http://localhost:3001/img/1.svg" alt="" /> Mascota
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper-user">
        <div className="captulado-logo">
          <div className="logo-user">
            <img src="http://localhost:3001/img/icon.png" alt=""></img>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
