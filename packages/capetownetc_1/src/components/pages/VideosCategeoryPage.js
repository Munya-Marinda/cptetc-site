import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../components/CategoryDateText";
import ArticleIcons from "../components/ArticleIcons";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import LoadMorePosts from "../components/LoadMorePosts";
import { CustomWPRestServicePostObject, filterAndSortPosts } from "../js/main";
import { Placeholder } from "react-bootstrap";

const VideosCategeoryPage = ({
  state,
  headerData,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const [adPositions, setAdPositions] = useState(false);
  const WP_SiteUrl = state.source.url;
  const [isSticky, setIsSticky] = useState(false);
  //
  // FOOD AND DRINK
  const [postsSet1, setPostsSet1] = useState(null);
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
        "&per_page=100&orderby=date&order=desc&_embed";
      const response = await fetch(url);
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
  //
  useEffect(() => {
    if (headerData.id !== undefined && headerData.id !== null) {
      fetch1Posts();
    }
  }, [headerData]);
  //
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
  }, []);
  //
  //
  //
  //
  //
  return (
    <>
      {/* <FullWidthPost title={"Lorum Ipsum Video Content Lorum Ipsum"} link={"#lorum-ipsum-video-content-lorum-ipsum"} /> */}

      <div id="sticky_here"></div>

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
                <span className="post_block_2_header_1">
                  Videos: {headerData.title}
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
                    link="#things-to-do-latest"
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
                                headerData.id
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
              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(7, 13).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
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
              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(14, 20).map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
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
              <LoadMorePosts />
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

      <DaddysDealsIFrame />
    </>
  );
};

export default connect(VideosCategeoryPage);
