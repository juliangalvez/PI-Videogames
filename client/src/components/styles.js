import styled from "styled-components";
import { colors } from "../theme/variables";

// Styles

export const Theme = styled.div`
  padding: 0;
  margin: 0;
  background-color: #fff;
  background-image: radial-gradient(#ebebeb 1px, transparent 1px);
  background-size: 10px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  max-width: 1300px;
  margin: 0 auto;

  .spacer {
    height: 100px;
    button {
      /* Variables */
      --button_radius: 0.75em;
      --button_color: #e8e8e8;
      --button_outline_color: #000000;
      font-size: 17px;
      font-weight: bold;
      border: none;

      background: green;
    }
  }
`;

export const BtnMain = styled.button`
  transition: transform 0.2s ease;
  background-color: ${colors.yellow};
  font-family: VT323;
  font-size: 36px;
  //padding: 0.6em 1.3em;
  width: 136px;
  height: 61px;

  border: 2px solid black;
  border-width: 1px 3px 5px 1px;
  border-style: solid;
  margin-right: 20px;
  &:hover {
    transition: transform 0.1s ease;
    transform: translate(-0.06em, -0.06em);
  }

  &:active {
    transform: translate(0em, 0em);
  }
`;

export const Btn = styled.button`
  font-family: VT323;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  width: 130px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: left;
  height: 25px;
  margin-right: 0;

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    color: black;
    background-color: ${colors.orange};
  }
`;
export const BtnOrigin = styled.button`
  font-family: VT323;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  width: 130px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-align: left;
  height: 25px;
  margin-right: 0;

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    color: ${colors.grey50};
    background-color: ${colors.grey800};
  }
`;


export const BtnAdd = styled.button`
  transition: transform 0.2s ease;
  background-color: ${colors.violet};
  font-family: VT323;
  font-size: 36px;
  //padding: 0.6em 1.3em;
  width: 188px;
  height: 61px;

  border: 2px solid black;
  border-width: 1px 3px 5px 1px;
  border-style: solid;
  margin-right: 20px;
  &:hover {
    transition: transform 0.1s ease;
    transform: translate(-0.06em, -0.06em);
  }

  &:active {
    transform: translate(0em, 0em);
  }
`;


export const BtnAdd2 = styled.button`
  font-family: VT323;
  font-size: 36px;
  cursor: pointer;

  background-color: ${colors.violet};
  border: none;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  margin-right: 0;

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    color: ${colors.grey50};
    background-color: ${colors.grey800};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  max-width: 1300px;
`;

export const LeftCol = styled.div`
  width: 180px;
  border-style: solid;
  background-color: white;
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
`;

export const Sorter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;
`;

export const CardsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .pepito {
    background-color: red;
  }

  .filters-container {
    display: flex;
    flex-direction: column;
    width: 140px;
    margin: 15px;
    text-align: left;

    .created {
      display: flex;
      flex-direction: column;
      height: 130px;
    }
  }
  .genres {
    .genres-title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .genres-map {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
`;
export const PagerWrap = styled.div`
  width: 70%;
  display: flex;
  align-self: flex-start;
  justify-content: center;
`;
