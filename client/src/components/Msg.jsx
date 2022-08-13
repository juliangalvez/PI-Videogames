import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Msg() {
  let res = useSelector((state) => state.result);
  //let error = useSelector((state) => state.error);

  return (
    <>
    {/* {error.length ? <div className="error">{error}</div> : null} */}
    
      {res ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="nores">No results found...</div>
      )}
    </>
  );
}
