import React, { useState, useContext } from "react";
import PageContext from "../PageContext";
import Card from "./Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Msg from "./Msg";
import { useSelector } from "react-redux";

export default function Cards() {
  const games = useSelector((state) => state.games);
  const { page } = useContext(PageContext);

  let allGamesPaged = [];
  const p = 15;

  function pager(a, b) {
    let aux = games.slice(a, b);
    if (aux.length) {
      allGamesPaged.push(aux);
    } else {
      return allGamesPaged;
    }
    return pager(a + p, b + p);
  }

  // function pager(a, b) {
  //   let aux = games.slice(a, b);
  //   if (aux.length) {

  //     setAllPages([
  //       ...allPages,
  //       ...aux
  //     ])

  //     console.log(allPages)
  //     allGamesPaged.push(aux);
  //   } else {
  //     return allGamesPaged;
  //   }
  //   return pager(a + p, b + p);
  // }

  if (games.length) {
    pager(0, 15);
  }

  return (
    <>
      <Cardswrap>
        {allGamesPaged.length > 0 ? (
          allGamesPaged[page - 1].map((g) => (
            <Link
              style={{ textDecoration: "none" }}
              key={g.id}
              to={`/videogames/${g.id}`}
            >
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
          <Msg />
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
