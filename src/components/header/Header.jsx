import React, { useContext } from "react";
import { Sparkles } from "lucide-react";
import { globalContext } from "../context/ContextProvider";
import { LogOut, Menu } from "lucide-react";

import "./Header.css";

export default function Header() {
  const { sharedData, deleteUserData } = useContext(globalContext);
  return (
    <div className="wraper">
      <header className="header">
        <div className="left">
          <div className="icon">
            <Sparkles className="sparcle-icon" />
            <Menu className="menu-icon" />
          </div>
          <h2 className="heading">Personal Dashboard</h2>
        </div>
        {sharedData.logged ? (
          <div className="right">
            <span className="display-none-on-mobile">Welcome back</span>{" "}
            <h4 className="display-none-on-mobile">
              {sharedData.userData.name}
            </h4>
            <button
              type="button"
              className="logout-btn"
              onClick={deleteUserData}
            >
              <LogOut className="form-icon" />
              Logout
            </button>
          </div>
        ) : (
          <p>Please log in to access your dashboard</p>
        )}
      </header>
    </div>
  );
}
