import React, { useState, useContext, useEffect } from "react";
import PageContext from "../PageContext";
import styled from "styled-components";
import { colors } from "../theme/variables";

export default function Pager({ pages }) {
  const length = Math.ceil(pages / 15);
  const [pageBtn, setPageBtn] = useState(1);
  const [doOnce, setDoOnce] = useState(false);

  const pageNumbers = [];

  const { page, changePage } = useContext(PageContext);

  for (let i = 1; i < length; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (pages) {
      if (doOnce === false) {
        if (document.getElementById("1")) {
          document.getElementById("1").disabled = true;
          setDoOnce(true);
        }
        //document.getElementById("1").disabled = true;
      }

      if (length > 1) {
        if (Number(page) === 1) {
          document.getElementById("prev").disabled = true;
        } else {
          document.getElementById("prev").disabled = false;
        }
        if (Number(page) === length - 1) {
          document.getElementById("next").disabled = true;
        } else {
          document.getElementById("next").disabled = false;
        }
      }
    }
  }, [doOnce, pages, page, length]);

  useEffect(() => {
    setPageBtn(page);
  }, [page]);

  function handlePager(e) {
    e.preventDefault();

    if (pageBtn) {
      document.getElementById(pageBtn).disabled = false;
    }

    document.getElementById(e.target.value).disabled = true;
    setPageBtn(e.target.value);
    changePage(e.target.value);
  }

  function handlePrevNext(e) {
    e.preventDefault();

    console.log({ page });
    console.log({ pages });
    console.log(e.target.value);
    if (e.target.value === "prev") {
      if (Number(page) > 1) {
        setPageBtn(Number(page) - 1);
        changePage(Number(page) - 1);
      }
      if (Number(page) === 1) {
        document.getElementById("prev").disabled = true;
      }
      if (pageBtn) {
        document.getElementById(pageBtn).disabled = false;
      }

      document.getElementById(Number(page) - 1).disabled = true;
    }
    if (e.target.value === "next") {
      if (Number(page) < length) {
        setPageBtn(Number(page) + 1);
        changePage(Number(page) + 1);
      }
      if (Number(page) === length - 1) {
        document.getElementById("next").disabled = true;
      }
      if (pageBtn) {
        document.getElementById(pageBtn).disabled = false;
      }

      document.getElementById(Number(page) + 1).disabled = true;
    }

    // if (pageBtn) {
    //   document.getElementById(pageBtn).disabled = false;
    // }
  }

  //console.log(pageBtn);

  return (
    <PagerWrap>
      <PagerNav>
        {length > 1 ? (
          <BtnPagerPN value="prev" id="prev" onClick={(e) => handlePrevNext(e)}>
            {"<"}
          </BtnPagerPN>
        ) : null}

        {pageNumbers.map((n) => (
          <BtnPager id={n} key={n} value={n} onClick={(e) => handlePager(e)}>
            {n}
          </BtnPager>
        ))}
        {length > 1 ? (
          <BtnPagerPN
            className="prev-next"
            value="next"
            id="next"
            onClick={(e) => handlePrevNext(e)}
          >
            {">"}
          </BtnPagerPN>
        ) : null}
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
  border-radius: 7px;
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

  .prev-next {
    &:disabled {
      background-color: ${colors.grey50};
      color: ${colors.grey500};
    }
  }

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

const BtnPagerPN = styled.button`
  font-family: VT323;
  font-size: 48px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${colors.white};

  &:hover {
    background-color: ${colors.grey300};
    color: ${colors.grey800};
  }

  &:disabled {
    background-color: white;
    color: ${colors.grey500};
  }
`;
