import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import FullWidthPost from "../components/FullWidthPost";
import ArticleIcons from "../components/ArticleIcons";
import { FaGreaterThan } from "react-icons/fa";
import CategoryDateText from "../components/CategoryDateText";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import FullScreenCategories from "../components/FullScreenCategories";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../js/main";
import ArticleListView_2 from "../components/article-listing/ArticleListView_2";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const ThingsToDoTrendingPage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const [adPositions, setAdPositions] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const WP_SiteUrl = state.source.url;
  //
  // FOOD AND DRINk
  const postsSet1_categoryID = 13;
  const [postsSet1, setPostsSet1] = useState(null);
  // TRAVEL AND STAY
  const postsSet2_categoryID = 495;
  const [postsSet2, setPostsSet2] = useState(null);
  // FAMILY
  const postsSet3_categoryID = 17;
  const [postsSet3, setPostsSet3] = useState(null);
  // ADVENTURE
  const postsSet4_categoryID = 10368;
  const [postsSet4, setPostsSet4] = useState(null);
  // EVENTS AND ENTERTAINMENT
  const postsSet5_categoryID = 7801;
  const [postsSet5, setPostsSet5] = useState(null);
  // ARTS AND CULTURE
  const postsSet6_categoryID = 7165;
  const [postsSet6, setPostsSet6] = useState(null);
  // TOP GUIDES
  const postsSet7_categoryID = 10373;
  const [postsSet7, setPostsSet7] = useState(null);
  //
  //
  //
  //
  //
  useEffect(() => {
    // FOOD AND DRINk
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
    //
    // TRAVEL AND STAY
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
    //
    // FAMILY
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
    //
    // ADVENTURE
    const fetch4Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet4_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet4(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet4(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet4(false);
      }
    };
    fetch4Posts();
    //
    //
    //
    //
    //
    // EVENTS AND ENTERTAINMENT
    const fetch5Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet5_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet5(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet5(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet5(false);
      }
    };
    fetch5Posts();
    //
    //
    //
    //
    //
    // ARTS AND CULTURE
    const fetch6Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet6_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet6(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet6(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet6(false);
      }
    };
    fetch6Posts();
    //
    //
    //
    //
    //
    // TOP GUIDES
    const fetch7Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet7_categoryID +
            "&per_page=100&orderby=date&order=desc&_embed"
        );
        if (!response.ok) {
          setPostsSet7(false);
          return;
        }
        const postsData = await response.json();
        setPostsSet7(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet7(false);
      }
    };
    fetch7Posts();
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
    //
    //
    //
  }, []);
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
            <ArticleListView_2
              title={"Food & Drink"}
              link_1={"/things-to-do/food-and-drink/"}
              link_2={"/things-to-do/food-and-drink/"}
              postsSet={postsSet1}
              WP_SiteUrl={WP_SiteUrl}
              postsSet_categoryID={postsSet1_categoryID}
            />

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>

              <SidebarListingWithImages
                link={"/things-to-do/"}
                title={"Top Things To Do"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet1_categoryID}
              />
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

      <div className="post_block_1_parent_1 content_spacing_top_1 content_spacing_bottom_1">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <ArticleListView_2
              title={"Travel & Stay"}
              link_1={"/things-to-do/travel/"}
              link_2={"/things-to-do/travel/"}
              postsSet={postsSet2}
              WP_SiteUrl={WP_SiteUrl}
              postsSet_categoryID={postsSet2_categoryID}
            />

            <div className="post_block_2_right_bar_parent_1">
              <div className="magazine_preview_parent_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://www.hmshop.co.za/wp-content/uploads/2023/04/CTEOctober23.jpg"
                  // src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/CTEAug23.jpg"
                  alt="Latest CapeETC cover"
                />
                <div className="magazine_preview_btn_parent_1">
                  <div className="magazine_preview_btn_subscribe_1">
                    <Link link="#subscribe-today">
                      <span>Subscribe Today</span>
                    </Link>
                  </div>
                  <div className="magazine_preview_btn_get_copy_parent_1">
                    <Link link="#print-magazine">
                      <span>print</span>
                    </Link>
                    <Link link="#digital-magazine">
                      <span>digital</span>
                    </Link>
                  </div>
                </div>
              </div>

              <SidebarListingWithImages
                link={"/things-to-do/"}
                title={"Top Things To Do"}
                postsSet={postsSet2}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet2_categoryID}
              />
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>

      <FullScreenCategories />

      <div className="post_block_1_parent_1 content_spacing_top_1">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <ArticleListView_2
                title={"Family"}
                link_1={"/things-to-do/family/"}
                link_2={"/things-to-do/family/"}
                postsSet={postsSet3}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet3_categoryID}
              />

              <ArticleListView_2
                title={"Adventure"}
                link_1={"/things-to-do/adventure/"}
                link_2={"/things-to-do/adventure/"}
                postsSet={postsSet4}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet4_categoryID}
              />

              <ArticleListView_2
                title={"Events & Entertainment"}
                link_1={"/things-to-do/entertainment/"}
                link_2={"/things-to-do/entertainment/"}
                postsSet={postsSet5}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet5_categoryID}
              />

              <ArticleListView_2
                title={"Arts & Culture"}
                link_1={"/things-to-do/culture/"}
                link_2={"/things-to-do/culture/"}
                postsSet={postsSet6}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet6_categoryID}
              />
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
                  {postsSet7 !== null ? (
                    <>
                      {postsSet7 !== false ? (
                        <>
                          {postsSet7.length !== 0 ? (
                            <>
                              {postsSet7.slice(10, 15)?.map((post, index) => {
                                const customPost =
                                  CustomWPRestServicePostObject(
                                    WP_SiteUrl,
                                    post,
                                    postsSet7_categoryID
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
        <div className="ad_vertical_1_parent"></div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_bottom_1">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_2">
              <div className="post_block_2_header_parent_2">
                <span className="post_block_2_header_1">Top Guides</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/things-to-do-top-guides/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/things-to-do-top-guides/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>

              <div className="post_block_3_posts_container_1 content_spacing_top_3">
                {postsSet3 !== null ? (
                  <>
                    {postsSet3 !== false ? (
                      <>
                        {postsSet3.length !== 0 ? (
                          <>
                            {postsSet3.slice(0, 9)?.map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet3_categoryID
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
                                    <ArticleIcons showCategory={false} />
                                  </div>
                                  <div className="post_block_3_postText_1">
                                    <CategoryDateText
                                      categoryText={customPost.categoryText}
                                      dateText={customPost.date}
                                    />
                                    <Link link={customPost.slug}>
                                      <h1
                                        style={{ marginTop: "10px" }}
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
                  <>
                    {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                      <Placeholder
                        animation="glow"
                        key={n}
                        className="placeholder_child_9_parent"
                      >
                        <Placeholder
                          xs={10}
                          className="placeholder_child_9_1"
                        />
                        <br />
                        <Placeholder xs={5} />
                        <br />
                        <Placeholder xs={10} />
                      </Placeholder>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>
    </>
  );
};

export default connect(ThingsToDoTrendingPage);
