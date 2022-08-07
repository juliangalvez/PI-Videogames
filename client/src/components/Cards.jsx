import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getGames } from "../redux/actions";


export default function Cards() {
  let gameState = useSelector(state => state.games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);



  return (
    <>
      <div>
        {gameState.length > 0 ? gameState.map(g =>
            <Link key={g.id}to={`/videogames/${g.id}`}>
                <Card rating={g.rating} name={g.name} image={g.image} genres={g.genres} platforms={g.platforms}/>
            </Link>)
             : <h2>Componente de error</h2>}
      </div>
    </>
  );
}
