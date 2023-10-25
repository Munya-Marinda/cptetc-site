import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import FullWidthPost from "../components/FullWidthPost";
import ArticleIcons from "../components/ArticleIcons";
import { FaGreaterThan } from "react-icons/fa";
import CategoryDateText from "../components/CategoryDateText";
import {
  CustomWPRestServicePostObject,
  filterAndSortPosts,
  menuItems,
} from "../js/main";
import LoadMorePosts from "../components/LoadMorePosts";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { Placeholder } from "react-bootstrap";
import ArticleListView_2 from "../components/article-listing/ArticleListView_2";
import ArticleListView_4 from "../components/article-listing/ArticleListView_4";

const ThingsToDoCategoryPage = ({
  state,
  headerData,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  // THINGS TO DO
  const [isSticky, setIsSticky] = useState(false);
  const [adPositions, setAdPositions] = useState(false);
  const [postsSet1, setPostsSet1] = useState(null);
  const [postsSet2, setPostsSet2] = useState(null);
  const WP_SiteUrl = state.source.url;
  // LOAD MORE
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const [isLoadingNewPosts, setIsLoadingNewPosts] = useState(false);

  //
  //
  //
  //
  //
  //
  //
  //
  const fetch1Posts = async () => {
    try {
      const url =
        WP_SiteUrl +
        "/wp-json/wp/v2/posts?categories=" +
        headerData.id +
        "&per_page=19&orderby=date&order=desc&_embed";
      const response = await fetch(url);
      if (!response.ok) {
        setPostsSet1(false);
        setPageNumber(1);
        return;
      }
      const postsData = await response.json();
      setPostsSet1(postsData);
      setPageNumber(1);
      setPostsSet2(filterAndSortPosts(postsData));
      //
      if (postsData.length > 0) {
        setShowLoadMoreButton(true);
      } else {
        setShowLoadMoreButton(false);
      }
      //
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPostsSet1(false);
      setPageNumber(1);
    }
  };
  //
  //
  const loadMorePosts = async () => {
    setIsLoadingNewPosts(true);
    try {
      // const url =
      //   WP_SiteUrl +
      //   "/wp-json/wp/v2/posts?categories=" +
      //   headerData.id +
      //   "&page=" +
      //   (pageNumber + 1) +
      //   "&orderby=date&order=desc&_embed";
      const url =
        WP_SiteUrl +
        "/wp-json/wp/v2/posts?categories=" +
        3 +
        "&page=" +
        (pageNumber + 1) +
        "&orderby=date&order=desc&_embed";
      const response = await fetch(url);
      if (!response.ok) {
        setShowLoadMoreButton(false);
        setIsLoadingNewPosts(false);
        return;
      }
      const postsData = await response.json();
      if (
        postsSet1 !== null &&
        postsSet1 !== false &&
        postsSet1 !== undefined
      ) {
        setPostsSet1([...postsSet1, ...postsData]);
        setPageNumber(pageNumber + 1);
      } else {
        setPageNumber(1);
        setPostsSet1(postsData);
        setShowLoadMoreButton(true);
      }
      setPostsSet2(filterAndSortPosts(postsData));
      setIsLoadingNewPosts(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPostsSet1(false);
      setIsLoadingNewPosts(false);
      setShowLoadMoreButton(false);
    }
  };
  //
  //

  useEffect(() => {
    // FEATURED
    if (headerData.id !== undefined && headerData.id !== null) {
      fetch1Posts();
      setPageNumber(1);
      setShowLoadMoreButton(false);
    }
  }, [headerData]);
  //
  //
  useEffect(() => {
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
  }, []);
  //
  //
  const changeParentPageNumber = () => {
    loadMorePosts();
  };
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
      <FullWidthPost
        title={"The 20 Best Places To Travel to in South Africa"}
        link={"#the-20-best-places-to-travel-to-in-south-africa"}
      />

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
            <div className="post_block_2_header_container_1">
              <ArticleListView_2
                title={
                  headerData.id !== undefined &&
                  headerData.id !== null &&
                  headerData.title
                }
                link_1={"/things-to-do/"}
                link_2={"/things-to-do/"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={headerData.id}
              />

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <ArticleListView_4
                postsSet={postsSet1}
                slice_start={1}
                slice_end={7}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={headerData.id}
              />

              <div className="ad_horizontal_2_parent">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>

              <ArticleListView_4
                postsSet={postsSet1}
                slice_start={7}
                slice_end={13}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={headerData.id}
              />

              <ArticleListView_4
                postsSet={postsSet1}
                slice_start={13}
                slice_end={null}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={headerData.id}
              />

              {showLoadMoreButton && (
                <LoadMorePosts
                  newPageNumber={pageNumber}
                  changeParentPageNumber={changeParentPageNumber}
                  isLoadingNewPosts={isLoadingNewPosts}
                />
              )}
            </div>
            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>
              <div className="magazine_topNews_parent_1">
                <div className="magazine_topNews_header_1">
                  <span className="magazine_topNews_headerText_1">
                    Top Things To Do
                  </span>
                </div>
                <div className="topGuides_parent_1">
                  {postsSet2 !== null ? (
                    <>
                      {postsSet2 !== false ? (
                        <>
                          {postsSet2.length !== 0 ? (
                            <>
                              {postsSet2.slice(0, 5)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    headerData.id
                                  );
                                //
                                //
                                //
                                //
                                //
                                return (
                                  <div
                                    className="topGuides_container_1"
                                    key={index}
                                  >
                                    <div className="topGuides_postImg_1">
                                      <img
                                        alt=""
                                        src={customPost.imgUrl}
                                        className="post_block_3_postImg_2"
                                      />
                                    </div>
                                    <div className="topGuides_textContainer_1">
                                      <Link link={customPost.slug}>
                                        <h6
                                          dangerouslySetInnerHTML={
                                            customPost.title
                                          }
                                        />
                                      </Link>
                                      <CategoryDateText
                                        categoryText={
                                          headerData.id !== undefined &&
                                          headerData.id !== null &&
                                          headerData.title
                                        }
                                        dateText={customPost.date}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          ) : (
                            <div className="spinner_parent_1">
                              <h1>NO NEW POSTS FOUND</h1>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="spinner_parent_1">
                          <h1>FAILED TO FETCH POSTS</h1>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="post_block_3_posts_container_1">
                      {["", "", "", "", ""].map((m, n) => (
                        <div
                          className="placeholder_child_8_parent_parent"
                          key={n}
                        >
                          <Placeholder animation="glow" className="">
                            <Placeholder className="placeholder_child_8_1" />
                          </Placeholder>
                          <Placeholder animation="glow" className="">
                            <Placeholder
                              xs={10}
                              className="placeholder_child_8_2"
                            />
                            <Placeholder
                              xs={5}
                              className="placeholder_child_8_2"
                            />
                          </Placeholder>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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

      <DaddysDealsIFrame />
    </>
  );
};

export default connect(ThingsToDoCategoryPage);
