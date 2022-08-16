import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getGames,
  getGenres,
  filterByGenre,
  filterCreated,
  sortName,
  sortRating,
  errorHandler,
} from "../redux/actions";

import Cards from "./Cards";
import NavBar from "./NavBar";
import Pager from "./Pager";
import Error from "./Error";
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
  BtnSort,
} from "./styles";

export default function Home() {
  let gamesState = useSelector((state) => state.games);
  let genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  const [order, setOrder] = useState("");
  const [originBtn, setOriginBtn] = useState("all");
  const [genreBtn, setGenreBtn] = useState("");
  const [doOnce, setDoOnce] = useState(false);

  useEffect(() => {
    dispatch(getGames());
    dispatch(errorHandler(""));
  }, [dispatch]);

  useEffect(() => {}, [order]);
  useEffect(() => {
    if (doOnce === false) {
      document.getElementById("all").disabled = true;
      setDoOnce(true);
    }
  }, [doOnce]);

  useEffect(() => {
    if (!genres.length) {
      dispatch(getGenres());
    }
  }, [genres, dispatch, doOnce]);

  // FILTERS

  function handleCreatedFilter(e) {
    e.preventDefault();

    document.getElementById("all").disabled = false;
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
    document.getElementById("name").value = "Sort by name";
  }

  function handleSortRating(e) {
    e.preventDefault();
    dispatch(sortRating(e.target.value));
    setOrder(`Order ${e.target.value}`);
    document.getElementById("rating").value = "Sort by rating";
  }

  return (
    <Theme>
      <Container>
        <div>
          <NavBar />
        </div>

        <div className="error-display">
          <Error />
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
                
              </div>
            </Filters>
          </LeftCol>

          <RightCol>
            <TopBar>
              <PagerWrap>
                <Pager pages={gamesState.length} />
              </PagerWrap>
              <Sorter>
                <div>
                  <BtnSort id="rating"
                    defaultValue="Sort by rating"
                    onChange={(e) => handleSortRating(e)}
                  >
                    <option disabled hidden>
                      Sort by rating
                    </option>
                    <option value="0">0 - 5</option>
                    <option value="5">5 - 0</option>
                  </BtnSort>
                </div>
                <div>
                  <BtnSort id="name"
                    defaultValue="Sort by name"
                    onChange={(e) => handleSortName(e)}
                  >
                    <option disabled hidden>
                      Sort by name
                    </option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                  </BtnSort>
                </div>
              </Sorter>
            </TopBar>
            <CardsWrap>
              <Cards/>
            </CardsWrap>
          </RightCol>
        </Content>
        <div>FOOTER</div>
      </Container>
    </Theme>
  );
}
