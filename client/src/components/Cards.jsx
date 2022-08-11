import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Cards({ gameState }) {
  // Detecta el cambio y se ejecuta el render
  return (
    <>
      <Cardswrap>
        {gameState.length > 0 ? (
          gameState.map((g) => (
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
          <h2>Componente de error</h2>
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
