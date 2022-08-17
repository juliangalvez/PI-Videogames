import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "../redux/actions";
import styled from "styled-components";

export default function Error() {
  let error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  if (!error.length) return null;

  setTimeout(() => {
    dispatch(errorHandler(""));
  }, 5000);

  return (
    <>
      <ErrorDisplay>
        <div className="error">{error}</div>
      </ErrorDisplay>
    </>
  );
}

const ErrorDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  height: 100px;

  .error {
    color: red;
    justify-content: center;
    align-items: center;
    padding-bottom: 4px;
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;
    //height: 40px;
    background-color: rgba(255, 0, 0, 0.2);
    border: solid 1px red;
  }
`;
