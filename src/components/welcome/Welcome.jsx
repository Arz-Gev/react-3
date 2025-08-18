import React, { useContext } from "react";
import { globalContext } from "../context/ContextProvider";
import { CirclePoundSterling } from "lucide-react";

import "./Welcome.css";

export default function Welcome() {
  const { sharedData } = useContext(globalContext);

  let date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="welcome-container">
      {sharedData.logged ? (
        <>
          <h1>Welcome Back, {sharedData.userData.name}</h1>
          <p>Today is {" " + date}</p>
        </>
      ) : (
        <>
          <h1>Welcome Back</h1>
          <p>Sign in to access your personal dashboard</p>
        </>
      )}
    </div>
  );
}
