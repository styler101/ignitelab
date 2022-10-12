import React from "react";
import "./styles/global.css";
export const App = () => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-2xl bg-cyan500">Design System</h1>;
      <button className="bg-violet-500 font-medium w-64  hover:bg-violet-800 ">
        {" "}
        Enviar
      </button>
    </React.Fragment>
  );
};
