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
      {/* <FullWidthPost
        title={"The 20 Best Places To Travel to in South Africa"}
        link={"#the-20-best-places-to-travel-to-in-south-africa"}
      /> */}

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
        </div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Food & Drink</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/food-and-drink/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/food-and-drink/"
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
                      {postsSet1.length !== 0 ? (
                        <>
                          {postsSet1.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet1_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />
                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}
              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(1, 10)?.map((post, index) => {
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
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                      <FaGreaterThan />
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
                              {postsSet1.slice(10, 15)?.map((post, index) => {
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
        </div>
      </div>

      <DaddysDealsIFrame />

      <div className="post_block_1_parent_1 content_spacing_top_1 content_spacing_bottom_1">
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Travel & Stay</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/travel/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/travel/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>
              {postsSet2 !== null ? (
                <>
                  {postsSet2 !== false ? (
                    <>
                      {postsSet2.length !== 0 ? (
                        <>
                          {postsSet2.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet2_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />

                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet2 !== null ? (
                  <>
                    {postsSet2 !== false ? (
                      <>
                        {postsSet2.length !== 0 ? (
                          <>
                            {postsSet2.slice(1, 10)?.map((post, index) => {
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
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="post_block_2_right_bar_parent_1">
              <div className="magazine_preview_parent_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg"
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
              <div className="magazine_topNews_parent_1">
                <Link link="#lorum-ipsum">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Top Things To Do
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <FaGreaterThan />
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
                              {postsSet2.slice(10, 15)?.map((post, index) => {
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
            </div>
          </div>
        </div>
      </div>

      <FullScreenCategories />

      <div className="post_block_1_parent_1 content_spacing_top_1">
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <div className="post_block_2_header_container_1">
              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Family</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/family/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/family/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>
              {postsSet3 !== null ? (
                <>
                  {postsSet3 !== false ? (
                    <>
                      {postsSet3.length !== 0 ? (
                        <>
                          {postsSet3.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet3_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />

                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet3 !== null ? (
                  <>
                    {postsSet3 !== false ? (
                      <>
                        {postsSet3.length !== 0 ? (
                          <>
                            {postsSet3.slice(1, 4)?.map((post, index) => {
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
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Adventure</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/adventure/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/adventure/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>
              {postsSet4 !== null ? (
                <>
                  {postsSet4 !== false ? (
                    <>
                      {postsSet4.length !== 0 ? (
                        <>
                          {postsSet4.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet4_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />

                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet4 !== null ? (
                  <>
                    {postsSet4 !== false ? (
                      <>
                        {postsSet4.length !== 0 ? (
                          <>
                            {postsSet4.slice(1, 4)?.map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet4_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">
                  Events & Entertainment
                </span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/entertainment/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="/things-to-do/entertainment/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>

              {postsSet5 !== null ? (
                <>
                  {postsSet5 !== false ? (
                    <>
                      {postsSet5.length !== 0 ? (
                        <>
                          {postsSet5.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet5_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />

                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet5 !== null ? (
                  <>
                    {postsSet5 !== false ? (
                      <>
                        {postsSet5.length !== 0 ? (
                          <>
                            {postsSet5.slice(1, 4)?.map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet5_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="post_block_2_header_parent_1">
                <span className="post_block_2_header_1">Arts & Culture</span>
                <div className="post_block_2_headerLinks_parent_1">
                  <Link
                    link="/things-to-do/culture/"
                    className="post_block_2_headerLink_1"
                  >
                    <span> SEE ALL </span>
                  </Link>
                  <span className="post_block_2_headerLink_spacer_1"> | </span>
                  <Link
                    link="#arts&-culture-the-latest"
                    className="post_block_2_headerLink_1"
                  >
                    <span> THE LATEST </span>
                  </Link>
                </div>
              </div>

              {postsSet6 !== null ? (
                <>
                  {postsSet6 !== false ? (
                    <>
                      {postsSet6.length !== 0 ? (
                        <>
                          {postsSet6.slice(0, 1)?.map((post, index) => {
                            const customPost = CustomWPRestServicePostObject(
                              WP_SiteUrl,
                              post,
                              postsSet6_categoryID,
                              null,
                              120
                            );
                            //
                            //
                            //
                            //
                            //
                            return (
                              <div
                                key={index}
                                className="post_block_2_posts_container_1"
                              >
                                <div className="post_block_2_postImg_container_1">
                                  <img
                                    src={customPost.imgUrl}
                                    alt=""
                                    className="post_block_2_featureImg_1"
                                  />
                                  <ArticleIcons />
                                </div>
                                <div className="post_block_3_featuredPostText_parent_1">
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    categoryText={customPost.categoryText}
                                    dateText={customPost.date}
                                  />

                                  <div
                                    dangerouslySetInnerHTML={customPost.excerpt}
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
                <div className="placeholder_child_5_parent_div">
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_5_parent"
                  >
                    <Placeholder
                      xs={2}
                      bg="dark"
                      className="placeholder_child_5"
                    />
                  </Placeholder>
                  <Placeholder animation="glow" className="width100">
                    <Placeholder bg="dark" className="placeholder_child_5_1" />
                    <br />
                    <Placeholder xs={4} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                    <br />
                    <Placeholder xs={8} bg="dark" className="" />
                  </Placeholder>
                </div>
              )}

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
                {postsSet6 !== null ? (
                  <>
                    {postsSet6 !== false ? (
                      <>
                        {postsSet6.length !== 0 ? (
                          <>
                            {postsSet6.slice(1, 4)?.map((post, index) => {
                              const customPost = CustomWPRestServicePostObject(
                                WP_SiteUrl,
                                post,
                                postsSet6_categoryID
                              );
                              //
                              //
                              //
                              //
                              //
                              return (
                                <div
                                  className="post_block_3_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_3_postImg_container_1">
                                    <img
                                      className="post_block_3_postImg_1"
                                      src={customPost.imgUrl}
                                      alt=""
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
                  <div className="post_block_3_posts_container_1 content_spacing_top_2">
                    {["", "", ""].map((m, n) => (
                      <div className="post_block_3_post_container_1" key={n}>
                        <Placeholder
                          animation="glow"
                          className="placeholder_child_6_parent"
                        >
                          <Placeholder className="placeholder_child_6_1" />
                          <br />
                          <Placeholder xs={4} bg="dark" className="" />
                          <br />
                          <Placeholder xs={8} bg="dark" className="" />
                        </Placeholder>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                      <FaGreaterThan />
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
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_1">
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>
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

              <div className="post_block_3_posts_container_1 content_spacing_top_2">
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
        <div className="ad_vertical_1_parent">
          <div className="ad_vertical_1"></div>
        </div>
      </div>
    </>
  );
};

export default connect(ThingsToDoTrendingPage);
