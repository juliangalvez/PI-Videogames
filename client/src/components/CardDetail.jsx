import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../redux/actions";
import NavBar from "./NavBar";
import Error from "./Error";
import { Theme } from "./styles";
import "./styles.css";
import ico from "../img/StarBig.png";

export default function CardDetail() {
  let gameDetail = useSelector((state) => state.game);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <Theme>
        <div className="container">
          <div>
            <NavBar />
          </div>
          <div className="error-display">
            <Error />
          </div>

          <div>
            {gameDetail && <div className="detail-container">
            <div className="title">
              <h3>{gameDetail.name}</h3>
            </div>
            <div className="image">
              <img src={gameDetail.image} alt="img" width="700px" />
            </div>
            <div className="details">
              <div className="left-col">
                <div className="genres-detail">
                  <h1>
                    {gameDetail.genres
                      ? gameDetail.genres.map((g) => (
                          <div className="genre-item" key={g}>
                            {g}
                          </div>
                        ))
                      : null}
                  </h1>
                </div>
                <div className="description">
                  <h2>{gameDetail.description}</h2>
                </div>
              </div>
              <div className="right-col">
                <div className="rating-detail">
                  <img className="ico" src={ico} alt="i" />
                  <div>{gameDetail.rating ? gameDetail.rating : "-  -"}</div>
                </div>

                <div className="meta">
                  <div>Metascore</div>
                  <div className="meta-rating">{gameDetail.metacritic}</div>
                </div>
                <div className="esrb">
                  <div>ESRB RATING</div>
                  <div className="esrb-rating">{gameDetail.esrb}</div>
                </div>
                <div className="right-info">
                  <div className="release">{gameDetail.released}</div>
                  <div className="devs">
                    {gameDetail.developers
                      ? gameDetail.developers.map((g) => <div key={g}>{g}</div>)
                      : null}
                  </div>
                  <div className="right-spacer">.........</div>
                  <div className="platforms">
                    {gameDetail.platforms
                      ? gameDetail.platforms.map((g) => <div key={g}>{g}</div>)
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>}
          </div>

          
        </div>
      </Theme>
    </>
  );
}
