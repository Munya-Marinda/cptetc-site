import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const PaginatorWide = ({ changeParentPageNumber }) => {
  const [pageNumber, setPageNumber] = useState(95);
  const [maxPageNumber, setMaxPageNumber] = useState(105);
  //
  //
  //
  //
  //
  //
  //
  //
  const changePageNumber = (changeBy) => {
    //
    //
    switch (changeBy) {
      case +1:
        if (pageNumber + changeBy <= maxPageNumber) {
          setPageNumber(pageNumber + changeBy);
          changeParentPageNumber(pageNumber + changeBy);
        }
        break;

      case -1:
        if (pageNumber + changeBy > 0) {
          setPageNumber(pageNumber + changeBy);
          changeParentPageNumber(pageNumber + changeBy);
        }
        break;

      default:
        setPageNumber(1);
        break;
    }
  };
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div className="pagination_wide_parent_1">
        <div className="pagination_wide_prev_container_1">
          <span
            className="pagination_wide_prev_span_1"
            onClick={() => {
              changePageNumber(-1);
            }}
          >
            <FaLessThan /> previous
          </span>
          <span className="pagination_wide_pageNumbers_span_1">
            <Link link={"#next-page-number"}>
              <span className="pagination_wide_pageNumber_span_1 pinkish_color">
                1
              </span>
            </Link>
            <Link link={"#next-page-number"}>
              <span className="pagination_wide_pageNumber_span_1">2</span>
            </Link>
            <Link link={"#next-page-number"}>
              <span className="pagination_wide_pageNumber_span_1">3</span>
            </Link>
            <Link link={"#next-page-number"}>
              <span className="pagination_wide_pageNumber_span_1">4</span>
            </Link>
            <Link link={"#next-page-number"}>
              <span className="pagination_wide_pageNumber_span_1">6</span>
            </Link>
            <span className="pagination_wide_pageNumber_span_1">...</span>
            <span className="pagination_wide_pageNumber_span_1">
              1089 |{" "}
              {"maxPageNumber " +
                maxPageNumber +
                " | " +
                "pageNumber " +
                pageNumber}
            </span>
          </span>
          <span
            className="pagination_wide_next_span_1"
            onClick={() => {
              changePageNumber(+1);
            }}
          >
            next <FaGreaterThan />
          </span>
        </div>
      </div>
    </>
  );
};

export default connect(PaginatorWide);
