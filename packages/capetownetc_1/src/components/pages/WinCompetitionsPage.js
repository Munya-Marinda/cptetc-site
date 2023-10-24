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

const WinCompetitionsPage = ({
  state,
  headerData,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  // THINGS TO DO
  const [isSticky, setIsSticky] = useState(false);
  const [adPositions, setAdPositions] = useState(false);
  const [postsSet1, setPostsSet1] = useState(null);
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
        headerData.id +
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
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">
                  {headerData.id !== undefined &&
                    headerData.id !== null &&
                    headerData.title}
                </span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="#things-to-do-see-all"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="#things-to-do-the-latest"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>

              {postsSet1 !== null ? (
                <>
                  {postsSet1 !== false ? (
                    <>
                      {postsSet1.length > 0 ? (
                        <>
                          {postsSet1.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              headerData.id,
                              null,
                              150
                            );
                            //
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                className="win_posts_container_1"
                                key={index}
                              >
                                <div className="post_block_2_postImg_container_1 height_250 content_spacing_bottom_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="win_featuredPostText_parent_1">
                                  <CategoryDateText
                                    dateText={customPost.date}
                                    categoryText={customPost.categoryText}
                                  />
                                  <h1
                                    dangerouslySetInnerHTML={customPost.title}
                                  />
                                  <div>
                                    <div
                                      dangerouslySetInnerHTML={
                                        customPost.excerpt
                                      }
                                    />
                                  </div>
                                  <div className="win_enter_parent_1">
                                    <img
                                      src="https://www.corundum-tours.com/wp-content/uploads/2019/11/Corundum-Tours-The-Last-Word-Kitara-is-Officially-Open.jpg"
                                      className="win_enter_sponsor_logo_img_1"
                                    />
                                    <Link link={customPost.slug}>
                                      <button
                                        className={
                                          "win_enter_button_1 " +
                                          (post.active === 1
                                            ? "win_enter_button_1_active"
                                            : "win_enter_button_1_inactive")
                                        }
                                      >
                                        Enter Now
                                      </button>
                                    </Link>
                                  </div>
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
                <>
                  {["", "", "", "", ""].map((m, n) => (
                    <div
                      className="placeholder_child_4_parent content_spacing_top_2"
                      key={n}
                    >
                      <Placeholder animation="glow">
                        <Placeholder
                          xs={2}
                          bg="dark"
                          className="placeholder_child_4"
                        />
                      </Placeholder>
                      <Placeholder
                        animation="glow"
                        className="width100 placeholder_child_4_parent_2"
                      >
                        <Placeholder
                          xs={4}
                          bg="dark"
                          className="placeholder_child_4_1"
                        />
                        <br />
                        <Placeholder xs={2} bg="dark" />
                        <br />
                        <Placeholder xs={9} bg="dark" />
                        <br />
                        <Placeholder xs={8} bg="dark" />
                        <br />
                      </Placeholder>
                    </div>
                  ))}
                </>
              )}

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
                <Link link="#lorum-ipsum">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Top Things To Do
                    </span>
                    <span className="magazine_topNews_icon_1">
                    <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/arrow-greater-than-1.svg" />
                    </span>
                  </div>
                </Link>
                <div className="topGuides_parent_1">
                  {postsSet1 !== null ? (
                    <>
                      {postsSet1 !== false ? (
                        <>
                          {postsSet1.length !== 0 ? (
                            <>
                              {postsSet1.slice(0, 5)?.map((post, index) => {
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
                                      <ArticleIcons
                                        showCategory={false}
                                        showCamera={false}
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
                                        categoryText={customPost.categoryText}
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
                    <div className="topGuides_parent_1">
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

export default connect(WinCompetitionsPage);
