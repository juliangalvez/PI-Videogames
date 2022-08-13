import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../redux/actions";
import NavBar from "./NavBar";

export default function CardDetail() {
  let gameDetail = useSelector((state) => state.game);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
      <div>
        <NavBar/>
      </div>
        <div>
          <h4>{gameDetail.name}</h4>
        </div>
        <div>
          <img src={gameDetail.image} alt="img" />
        </div>
        <div>
          <h1>{gameDetail.genres}</h1>
        </div>
        <div>
          <h1>{gameDetail.description}</h1>
        </div>
        <div>
          <h1>{gameDetail.released}</h1>
        </div>
        <div>
          <h1>{gameDetail.rating}</h1>
        </div>
        <div>
          <h1>{gameDetail.platforms}</h1>
        </div>
      </div>
    </>
  );
}
