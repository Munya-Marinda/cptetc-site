import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaGreaterThan } from "react-icons/fa";
import CategoryDateText from "../components/CategoryDateText";
import ArticleIcons from "../components/ArticleIcons";
import FullWidthPost from "../components/FullWidthPost";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { CustomWPRestServicePostObject } from "../js/main";
import { Placeholder } from "react-bootstrap";
import ArticleListView_2 from "../components/article-listing/ArticleListView_2";

const WinTrending = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const WP_SiteUrl = state.source.url;
  // COMPETIONS
  const postsSet1_categoryID = 10; //
  const [postsSet1, setPostsSet1] = useState(null);
  //
  // PHOTO OF THE MONTH
  const postsSet2_categoryID = 10382; //
  const [postsSet2, setPostsSet2] = useState(null);
  //
  // VIDEO OF THE MONTH
  const postsSet3_categoryID = 10383; //
  const [postsSet3, setPostsSet3] = useState(null);
  //
  const [adPositions, setAdPositions] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  //
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    // COMPETITIONS
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
    // PHOTO OF THE MONTH
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
    //
    //
    // PHOTO OF THE MONTH
    const fetch3Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet3_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet3(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet3(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet3(false);
      }
    };
    fetch3Posts();
    //
    //
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
  }, []);
  //
  //
  //
  //
  //
  //
  return (
    <>
      {/* <FullWidthPost
        title={"The 20 Best Places To Travel to in South Africa"}
        link={"#the-20-best-places-to-travel-to-in-south-africa"}
      /> */}

      <div id="sticky_here"></div>

      <div className="post_block_1_parent_1 content_spacing_top_2">
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
                <span className="post_block_2_header_1">Win</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link={"/competions/"}
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link={"/competions/"}
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
                          {postsSet1.slice(0, 5).map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet1_categoryID,
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
                                <div className="post_block_2_postImg_container_1 height_250">
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
                                          "win_enter_button_1 win_enter_button_1_active"
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

              <div className="ad_horizontal_2_parent content_spacing_top_3">
                <h6 className="ad_text_1">ADVERTISEMENT</h6>
                <div className="ad_horizontal_2"></div>
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>
              <div className="magazine_topNews_parent_1">
                <Link link="/competitions">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Top Guides
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
                              {postsSet1.slice(6, 11)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
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

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            {/* <div className="post_block_2_header_container_1">
              <ArticleListView_2
                title={"Photo of the Month"}
                link_1={"/photo-of-the-month"}
                link_2={"/photo-of-the-month"}
                postsSet={
                  postsSet2 !== null && postsSet2 !== false
                    ? postsSet2.slice(0, 4)
                    : null
                }
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"PHOTO OF THE MONTH"}
                postsSet_categoryID={postsSet2_categoryID}
              />

              <ArticleListView_2
                title={"Video of the Month"}
                link_1={"/video-of-the-month"}
                link_2={"/video-of-the-month"}
                postsSet={
                  postsSet3 !== null && postsSet3 !== false
                    ? postsSet3.slice(0, 4)
                    : null
                }
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"VIDEO OF THE MONTH"}
                postsSet_categoryID={postsSet3_categoryID}
              />
            </div> 

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>
              <div className="magazine_topNews_parent_1">
                <Link link="/photo-of-the-month">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Top Photos
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/arrow-greater-than-1.svg" />
                    </span>
                  </div>
                </Link>
                <div className="topGuides_parent_1">
                  {postsSet2 !== null ? (
                    <>
                      {postsSet2 !== false ? (
                        <>
                          {postsSet2.length !== 0 ? (
                            <>
                              {postsSet2.slice(4, 9)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
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
            </div> */}
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>

      <DaddysDealsIFrame />
    </>
  );
};

export default connect(WinTrending);
