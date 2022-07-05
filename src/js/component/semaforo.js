import React, { useEffect, useState } from "react";

const Semaforo = () => {


  const [color, setColor] = useState("");

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-success"
        onClick={() => setColor("green")}
      >
        Success
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setColor("red")}
      >
        Danger
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setColor("yellow")}
      >
        Warning
      </button>
      <h1>{color}</h1> */}

        <div className="child">
            <div className={(color=="red") ? 'rojo-claro' : "rojo"} onClick={() => setColor("red")}>  </div>
            <div className={(color=="yellow") ? 'amarillo-claro' : "amarillo"} onClick={() => setColor("yellow")}></div>
            <div className={(color=="green") ? 'verde-claro' : "verde"} onClick={() => setColor("green")}></div>
        </div>
        

    </>
  );
};

export default Semaforo;
