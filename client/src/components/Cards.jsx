import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Msg from "./Msg";

export default function Cards({ gamesState }) {

  return (
    <>
      <Cardswrap>
        {gamesState.length > 0 ? (
          gamesState.map((g) => (
            <Link style={{ textDecoration: 'none' }} key={g.id} to={`/videogames/${g.id}`}>
              <Card
                rating={g.rating}
                name={g.name}
                image={g.image}
                genres={g.genres}
                
                platforms={g.platforms}
              />
            </Link>
          ))
        ) : (
          <Msg/>
        )}
      </Cardswrap>
    </>
  );
}

const Cardswrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  
`;
