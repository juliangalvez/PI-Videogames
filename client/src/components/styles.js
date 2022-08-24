import styled from "styled-components";
import { colors } from "../theme/variables";

// Styles

export const Theme = styled.div`
  padding: 0;
  margin: 0;
  height: 1500px;
  background-color: #fff;
  background-image: radial-gradient(${colors.grey400} 1px, transparent 1px);
  background-size: 10px 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  max-width: 1300px;
  margin: 0 auto;

  .error-display {
    height: 100px;
  }
`;

export const BtnAll = styled.button`
  transition: transform 0.2s ease;

  font-family: VT323;
  font-size: 36px;
  //padding: 0.6em 1.3em;

  border-radius: 7px;
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
export const BtnMain = styled.button`
  transition: transform 0.2s ease;
  background-color: ${colors.yellow};
  font-family: VT323;
  font-size: 36px;
  //padding: 0.6em 1.3em;
  width: 136px;
  height: 61px;
  border-radius: 7px;
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
  border-radius: 7px;
  //padding: 0.6em 1.3em;
  width: 188px;
  height: 61px;
  border: solid black;
  border-width: 1px 3px 5px 1px;
  margin-right: 20px;

  &:hover {
    transition: transform 0.1s ease;
    transform: translate(-0.06em, -0.06em);
  }

  &:active {
    transform: translate(0em, 0em);
  }
`;

export const BtnSort = styled.select`
  transition: transform 0.2s ease;
  background-color: ${colors.green};
  font-family: VT323;
  font-size: 27px;
  //padding: 0.6em 1.3em;
  width: 150px;
  height: 61px;
  border: solid black;
  border-radius: 7px;
  border-width: 1px 3px 5px 1px;
  text-align: center;
  white-space: pre-wrap;
  line-height: 1.6;
  margin-left: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  max-width: 1300px;
`;

export const LeftCol = styled.div`
  width: 160px;
  border-style: solid;
  background-color: white;
  border-radius: 7px;
  margin-right: 10px;
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
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
    .genre-filter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .genres-title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .erase-filter-btn {
      font-family: VT323;
      font-size: 20px;
      width: 24px;
      height: 24px;
      color: #fff;
      background-color: ${colors.grey800};
      border: none;
      margin-right: 10px;
      cursor: pointer;
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
