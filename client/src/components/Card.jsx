import React from "react";
import styled from "styled-components";
import { colors } from "../theme/variables";
import ico from "../img/Star.png";

export default function Card({ name, image, rating, genres, platforms }) {
  return (
    <CardWrap>
      <div className="name">
        <p>{name}</p>
      </div>

      <div className="img">
        <img className="image" src={image} alt="img" />
      </div>
      <div className="card-bottom">
        <div className="genres">
          {genres.map((g) => (
            <div key={g} className="genres-items">
              {g}
            </div>
          ))}
        </div>
        <div className="rating">
          <div>{rating ? rating : '-  -'}</div>

          <img className="ico" src={ico} alt="i" />
        </div>
      </div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.yellow};
  margin: 10px;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border: solid black;
  border-width: 1px 3px 5px 1px;
  position: relative;

  .name {
    display: flex;
    align-items: center;
    color: black;
    justify-content: space-around;
    font-size: 32px;
    text-align: center;
    //font-smooth: 2em;
    text-decoration: none;
    position: relative;
    min-height: 100px;
    padding-left: 5px;
    padding-right: 5px;
    /* width: 200px;
    height: 100px;
    position: static; */
  }

  .img {
    /* left: -25%;
    display: block; */
    //width: 200px;
    //display: flex;
    display: flex;
    justify-content: center;
    position: relative;

    .image {
      height: 200px;
    }
    //left: -25%;

    /* margin: auto; */
    /* min-height: 100%;
    min-width: 100%; */
  }

  .card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    height: 300px;
    width: 200px;

    .rating {
      color: ${colors.grey800};
      display: flex;
      align-content: flex-end;
      background-color: ${colors.grey50};
      align-items: flex-end;
      position: relative;
      width: 65px;
      padding: 3px 0px 3px 5px;
      margin-bottom: 5px;
      .ico {
        padding: 3px 0px 4px 5px;
      }
    }

    .genres {
      color: ${colors.grey800};
      display: flex;
      flex-direction: column;
      flex-wrap: wrap-reverse;
      //bottom: -80px;

      font-size: 1em;
      width: 125px;
      padding: 3px 3px 0px 0px;
      margin-bottom: 5px;
      position: relative;
      align-items: flex-end;
      .genres-items {
        background-color: ${colors.sky};
        position: relative;
        padding: 0px 5px 0px 4px;
        margin-top: 3px;
      }
    }
  }
`;

// import React from "react";
// import styled from "styled-components";
// import { colors } from "../theme/variables";

// export default function Card({ name, image, rating, genres, platforms }) {
//   return (
//     <CardWrap>
//       <div className="name">
//         <p>{name}</p>
//       </div>

//       <div className="img">
//         <img src={image} alt="img" height="200px" />
//       </div>
//       <div className="card-bottom">
//         <div className="genres">
//           <div className="genres-items">{genres}</div>
//         </div>
//         <div className="rating">
//           <div>{rating}</div>
//         </div>
//       </div>
//     </CardWrap>
//   );
// }

// const CardWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: ${colors.yellow};
//   margin: 10px;
//   width: 200px;
//   height: 300px;
//   overflow: hidden;
//   position: relative;

//   .name {
//     display: flex;
//     align-items: center;
//     color: black;
//     justify-content: space-around;
//     font-size: 32px;
//     text-align: center;
//     //font-smooth: 2em;
//     text-decoration: none;
//     position: relative;
//     min-height: 100px;
//     /* width: 200px;
//     height: 100px;
//     position: static; */
//   }
//   .imgcont {
//     width: 200px;
//     height: 200px;
//     //margin-bottom:50px;
//     position: absolute;
//   }
//   .img {
//     /* left: -25%;
//     display: block; */
//     //width: 200px;
//     //display: flex;
//     display: flex;
//     justify-content: center;
//     position: relative;

//     //left: -25%;

//     /* margin: auto; */
//     /* min-height: 100%;
//     min-width: 100%; */
//   }

//   .card-bottom {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: flex-end;
//     position: absolute;
//     height: 300px;
//     width: 200px;

//     .rating {
//       display: flex;
//       align-content: flex-end;
//       background-color: ${colors.yellow};
//       align-items: flex-end;
//       position: relative;

//       //left: 80%;
//       //bottom: -60px;
//     }

//     .genres {
//       color: green;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-end;
//       //bottom: -80px;
//       font-size: 1em;
//       width: 100px;
//       background-color: ${colors.water};
//       position: relative;
//       .genres-items {
//         background-color: ${colors.water};

//         width: 100px;
//         position: relative;
//       }
//     }
//   }
// `;

// import React from "react";
// import styled from "styled-components";
// import { colors } from "../theme/variables";

// export default function Card({ name, image, rating, genres, platforms }) {
//   return (
//     <CardWrap>
//       <div className="name">
//         <p>{name}</p>
//       </div>
//       <div className="imgcont">
//         <div className="img">
//           <img src={image} alt="img" height="200px" />
//         </div>
//       </div>
//       <div className="card-bottom">
//         <div className="genres">
//           <div>{genres}</div>
//         </div>
//         <div className="rating">
//           <h4>{rating}</h4>
//         </div>
//       </div>
//     </CardWrap>
//   );
// }

// const CardWrap = styled.div`
//   background-color: ${colors.yellow};
//   margin: 10px;
//   width: 200px;
//   height: 300px;
//   overflow: hidden;
//   position: relative;

//   .name {
//     color: black;
//     font-size: 32px;
//     text-align: center;
//     text-decoration: none;
//     width: 200px;
//     height: 100px;
//     position: static;
//   }
//   .imgcont {
//     width: 200px;
//     height: 200px;
//     //margin-bottom:50px;
//     position: absolute;
//   }
//   .img {
//     left: -25%;
//     display: block;
//     //width: 200px;
//     display: flex;

//     position: absolute;
//     top: -20px;
//     //left: -25%;
//     right: 0%;

//     /* margin: auto; */
//     /* min-height: 100%;
//     min-width: 100%; */
//   }

//   .card-bottom {

//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: baseline;

//     .rating {
//       position: relative;
//       //left: 80%;
//       //bottom: -60px;
//     }

//     .genres {
//       //bottom: -80px;
//       font-size: 1em;

//       position: relative;
//       .genres-item {
//         /* display: flex;
//         flex-direction: column; */
//       }
//     }
//   }
// `;
