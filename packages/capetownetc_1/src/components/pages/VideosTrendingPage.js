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

const VideosTrendingPage = ({
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

    const setAdPositionsFunc = () => {
      const verticalAd1Left = document
        .getElementById("ad_vertical_1_id_1")
        .getBoundingClientRect().left;
      const verticalAd2Left = document
        .getElementById("ad_vertical_1_id_2")
        .getBoundingClientRect().left;
      setAdPositions({
        verticalAd1Left: verticalAd1Left,
        verticalAd2Left: verticalAd2Left,
      });
    };
    setAdPositionsFunc();

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
      {/* <FullWidthPost
        title={"Lorum Ipsum Video Content Lorum Ipsum"}
        link={"#lorum-ipsum-video-content-lorum-ipsum"}
      /> */}

      <div id="sticky_here"></div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_2">
              <div className="post_block_2_header_parent_2">
                <span className="post_block_2_header_1">
                  Videos: Things To Do
                </span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/videos/things-to-do-video/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/videos/things-to-do-video/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>
              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet2 !== null ? (
                  <>
                    {postsSet2 !== false ? (
                      <>
                        {postsSet2.length !== 0 ? (
                          <>
                            {postsSet2.slice(0, 6).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet2_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  className="videos_previewImg_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      alt=""
                                      src={customPost.imgUrl}
                                      className="videos_previewImg_1"
                                    />
                                    <ArticleIcons
                                      showVideo={true}
                                      showCategory={false}
                                    />
                                  </div>
                                  <div className="post_block_3_postText_1">
                                    <CategoryDateText />
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
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
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_9_parent_1"
                  >
                    {["", "", "", "", "", ""].map((m, n) => (
                      <div key={n}>
                        <Placeholder
                          bg="dark"
                          className="placeholder_child_9_1"
                        />
                        <Placeholder xs={9} bg="dark" />
                        <Placeholder xs={7} bg="dark" />
                      </div>
                    ))}
                  </Placeholder>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>
      </div>

      <DaddysDealsIFrame />

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
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
        </div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_2">
              <div className="post_block_2_header_parent_2">
                <span className="post_block_2_header_1">Videos: News</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/videos/news-videos/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/videos/news-videos/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 6).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet1_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  className="videos_previewImg_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      alt=""
                                      src={customPost.imgUrl}
                                      className="videos_previewImg_1"
                                    />
                                    <ArticleIcons
                                      showVideo={true}
                                      showCategory={false}
                                    />
                                  </div>
                                  <div className="post_block_3_postText_1">
                                    <CategoryDateText />
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
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
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_9_parent_1"
                  >
                    {["", "", "", "", "", ""].map((m, n) => (
                      <div key={n}>
                        <Placeholder
                          bg="dark"
                          className="placeholder_child_9_1"
                        />
                        <Placeholder xs={9} bg="dark" />
                        <Placeholder xs={7} bg="dark" />
                      </div>
                    ))}
                  </Placeholder>
                )}
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
        </div>
      </div>
    </>
  );
};

export default connect(VideosTrendingPage);
