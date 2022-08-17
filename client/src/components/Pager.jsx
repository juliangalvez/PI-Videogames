import React, { useState, useContext } from "react";
import PageContext from "../PageContext";
import styled from "styled-components";
import { colors } from "../theme/variables";

export default function Pager({ pages }) {
  const length = Math.ceil(pages / 15);
  const [pageBtn, setPageBtn] = useState(1);
  const pageNumbers = [];

  const { changePage } = useContext(PageContext);

  for (let i = 1; i < length; i++) {
    pageNumbers.push(i);
  }

  function handlePager(e) {
    e.preventDefault();
    if (pageBtn) document.getElementById(pageBtn).disabled = false;
    document.getElementById(e.target.value).disabled = true;
    console.log(e.target.value);
    setPageBtn(e.target.value);
    changePage(e.target.value);
  }

  return (
    <PagerWrap>
      <PagerNav>
        {pageNumbers.map((n) => (
          <BtnPager id={n} key={n} value={n} onClick={(e) => handlePager(e)}>
            {n}
          </BtnPager>
        ))} 
      </PagerNav>
    </PagerWrap>
  );
}

const PagerWrap = styled.div`
  font-family: VT323;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;
`;

const PagerNav = styled.div`
  border: solid 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 72px;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;
const BtnPager = styled.button`
  font-family: VT323;
  font-size: 48px;
  border: none;
  background-color: ${colors.grey800};
  display: inline-flex;
  justify-content: center; /* center the content horizontally */
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: ${colors.white};
  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    background-color: ${colors.grey800};
    color: ${colors.grey50};
  }
`;
