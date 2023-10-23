import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import FullWidthPost from "../components/FullWidthPost";
import CategoryDateText from "../components/CategoryDateText";
import { FaGreaterThan } from "react-icons/fa";
import ArticleIcons from "../components/ArticleIcons";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { CustomWPRestServicePostObject } from "../js/main";
import { Placeholder } from "react-bootstrap";

const VouchersPage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  // NEWS
  const postsSet1_categoryID = 10364; // 182
  const [postsSet1, setPostsSet1] = useState(null);
  //
  // Things To Do
  const postsSet2_categoryID = 10365;
  const [postsSet2, setPostsSet2] = useState(null);
  //
  const WP_SiteUrl = state.source.url;
  const [isSticky, setIsSticky] = useState(false);
  const [adPositions, setAdPositions] = useState(false);
  //
  //
  //
  //
  //
  //

  useEffect(() => {
    // FEATURED
    const fetch1Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet1_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
    //
    //
    //
    // THINGS TO DO
    const fetch2Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet2_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet2(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet2(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet2(false);
      }
    };
    fetch2Posts();
    //
    //
    const handleScroll = () => {
      const specificElement = document.getElementById("sticky_here");
      const specificElementPosition =
        specificElement.getBoundingClientRect().bottom;
      const shouldStick = 90 > specificElementPosition;
      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);

    //
    //
    const setAdPositionsFunc = () => {
      const verticalAd1Left = document
        .getElementById("ad_vertical_1_id_1_position")
        .getBoundingClientRect().left;
      const verticalAd2Left = document
        .getElementById("ad_vertical_1_id_2_position")
        .getBoundingClientRect().left;
      setAdPositions({
        verticalAd1Left: verticalAd1Left,
        verticalAd2Left: verticalAd2Left,
      });
    };
    setAdPositionsFunc();
    window.addEventListener("resize", setAdPositionsFunc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //
  }, []);
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <>
      <div className="vouchers_page_top_parent_1">
        <div className="vouchers_page_container_1">
          <h2 className="vouchers_page_header_1">
            Exclusive Deals for Cape {"{town}"} Etc Readers
          </h2>
          <h6 className="vouchers_page_text_1">
            To redeem your discount, copy the code from the selected exclusive
            voucher, then use it at the checkout point to claim your savings.
            There's something for everyone and for every budget!
          </h6>
          <div className="vouchers_page_poweredBy_1">
            <h6 className="vouchers_page_poweredBy_text_1">POWERED BY</h6>
            <img
              className="daddys_deals_logo_1"
              src="https://daddysdeals.co.za/wp-content/uploads/2023/03/final_logo-2.png"
              alt="Daddy's Deals Logo"
            />
          </div>
        </div>
      </div>

      <div id="sticky_here"></div>

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_1">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky && isSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
          <div
            className="ad_vertical_1_ zero_opacity"
            id="ad_vertical_1_id_1_position"
          ></div>
        </div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_2">
              <DaddysDealsIFrame bgColor={"white"} />
              <DaddysDealsIFrame bgColor={"white"} />
              <DaddysDealsIFrame bgColor={"white"} />
              <DaddysDealsIFrame bgColor={"white"} />
              <DaddysDealsIFrame bgColor={"white"} />
            </div>
          </div>
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky && isSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
          <div
            className="ad_vertical_1_ zero_opacity"
            id="ad_vertical_1_id_2_position"
          ></div>
        </div>
      </div>
    </>
  );
};

export default connect(VouchersPage);
