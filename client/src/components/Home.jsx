import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getGames,
  getGenres,
  filterByGenre,
  filterCreated,
  sortName,
  sortRating,
} from "../redux/actions";

import Cards from "./Cards";
import NavBar from "./NavBar";
import Pager from "./Pager";
import {
  Container,
  Content,
  Btn,
  RightCol,
  LeftCol,
  Sorter,
  CardsWrap,
  Filters,
  TopBar,
  PagerWrap,
  BtnOrigin,
  Theme,
  
} from "./styles";

export default function Home() {
  let gameState = useSelector((state) => state.games);
  let genres = useSelector((state) => state.genres); // Selecciona el estado global
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");
  const [originBtn, setOriginBtn] = useState('all');
  const [genreBtn, setGenreBtn] = useState("");
  //const [disab, setDisab] = useState("");


  // useEffect(() => {
  //   dispatch(getGames());
  //   document.getElementById('all').disabled = true;
  //   dispatch(getGenres());
  // }, [dispatch]);


  useEffect(() => {
    if (!gameState.length) {
      dispatch(getGames());
    }
    dispatch(getGenres());
  }, [gameState, dispatch]);

  useEffect(() => {}, [order]);


  // FILTERS
 
  //document.querySelector('#all').disabled=true;
  
  function handleCreatedFilter(e) {
    e.preventDefault();
    if (originBtn) document.getElementById(originBtn).disabled = false;
    document.getElementById(e.target.value).disabled = true;
    setOriginBtn(e.target.value);
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterGenres(e) {
    e.preventDefault();
    if (genreBtn) document.getElementById(genreBtn).disabled = false;
    document.getElementById(e.target.value).disabled = true;
    setGenreBtn(e.target.value);
    dispatch(filterByGenre(e.target.value));
  }

  // SORTS
  function handleSortName(e) {
    e.preventDefault();
    dispatch(sortName(e.target.value));
    setOrder(`Order ${e.target.value}`);
  }

  function handleSortRating(e) {
    e.preventDefault();
    dispatch(sortRating(e.target.value));
    setOrder(`Order ${e.target.value}`);
  }

  return (
    <Theme>
    <Container>
      <div>
        <NavBar />
      </div>
      <div className="spacer">
    
      </div>
      <Content>
        <LeftCol>
          <Filters>
            <div className="filters-container">
              <div className="created">
                <BtnOrigin
                  id="all"
                  value="all"
                  onClick={(e) => handleCreatedFilter(e)}
                >
                  ALL
                </BtnOrigin>
                <BtnOrigin
                  id="api"
                  value="api"
                  onClick={(e) => handleCreatedFilter(e)}
                >
                  API
                </BtnOrigin>
                <BtnOrigin
                  id="created"
                  value="created"
                  onClick={(e) => handleCreatedFilter(e)}
                >
                  CREATED
                </BtnOrigin>
              </div>

              <div className="genres">
                <div className="genres-title">GENRE</div>
                <div>
                  <form>
                    {genres.map((g, i) => {
                      return (
                        <div className="genres-map" key={g}>
                          <Btn
                            id={g}
                            value={g}
                            key={i}
                            onClick={(e) => handleFilterGenres(e)}
                          >
                            {g.split(" ", 1)}
                          </Btn>
                        </div>
                      );
                    })}
                  </form>
                </div>
              </div>
              <div>PLATFORMS</div>

            </div>
          </Filters>
        </LeftCol>
        <RightCol>
          <TopBar>
            <PagerWrap>
              <Pager />
            </PagerWrap>
            <Sorter>
              <div>
                <select
                  defaultValue="Sort by rating"
                  onChange={(e) => handleSortRating(e)}
                >
                  <option disabled hidden>
                    Sort by rating
                  </option>
                  <option value="0">0 - 5</option>
                  <option value="5">5 - 0</option>
                </select>
              </div>
              <div>
                <select
                  defaultValue="Sort by name"
                  onChange={(e) => handleSortName(e)}
                >
                  <option disabled hidden>
                    Sort by name
                  </option>
                  <option value="asc">A - Z</option>
                  <option value="desc">Z - A</option>
                </select>
              </div>
            </Sorter>
          </TopBar>
          <CardsWrap>
            <Cards gameState={gameState} />
          </CardsWrap>
        </RightCol>
      </Content>
      <div>FOOTER</div>
      
    </Container>
    </Theme>
  );
}
