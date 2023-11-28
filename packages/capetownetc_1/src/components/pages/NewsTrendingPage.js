import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../components/CategoryDateText";
import ArticleIcons from "../components/ArticleIcons";
import { FaGreaterThan } from "react-icons/fa";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../js/main";
import ArticleListView_1 from "../components/article-listing/ArticleListView_1";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const NewsTrendingPage = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  // WESTERN CAPE  | 10375
  const postsSet1_categoryID = 3;
  const [postsSet1, setPostsSet1] = useState(null);
  //
  // SOUTH AFRICA | 10376
  const postsSet2_categoryID = 3;
  const [postsSet2, setPostsSet2] = useState(null);
  //
  // World | 7747;
  const postsSet3_categoryID = 3;
  const [postsSet3, setPostsSet3] = useState(null);
  //
  // Opinion | 10378
  const postsSet4_categoryID = 3;
  const [postsSet4, setPostsSet4] = useState(null);
  //
  // Good News | 10379
  const postsSet5_categoryID = 3;
  const [postsSet5, setPostsSet5] = useState(null);
  //
  // Sport | 10381
  const postsSet6_categoryID = 3;
  const [postsSet6, setPostsSet6] = useState(null);
  //
  const WP_SiteUrl = state.source.url;
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
    // SOUTH AFRICA
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
    // World
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
    // Opinion
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
    // Good News
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
    // Sport
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
  const RightBarWithOutMagazine = ({
    sideTitleLink,
    sideTitle,
    sidePosts,
    categoryID,
  }) => {
    return (
      <div className="post_block_2_right_bar_parent_1">
        <div className="ad_square_1"></div>

        <SidebarListingWithImages
          title={sideTitle}
          link={sideTitleLink}
          postsSet={sidePosts}
          WP_SiteUrl={WP_SiteUrl}
          postsSet_categoryID={categoryID}
        />

        {/* <div className="magazine_topNews_parent_1">
          <Link link={sideTitleLink}>
            <div className="magazine_topNews_header_1">
              <span className="magazine_topNews_headerText_1">{sideTitle}</span>
              <span className="magazine_topNews_icon_1">
                <FaGreaterThan />
              </span>
            </div>
          </Link>

          {sidePosts !== null ? (
            <>
              {sidePosts !== false ? (
                <>
                  {sidePosts.length !== 0 ? (
                    <>
                      {sidePosts.slice(7, 13)?.map((post, index) => {
                        const customPost = CustomWPRestServicePostObject(
                          WP_SiteUrl,
                          post,
                          categoryID
                        );
                        //
                        //
                        //
                        //
                        //
                        return (
                          <div
                            className="magazine_topNews_container_1"
                            key={index}
                          >
                            <Link link={customPost.slug}>
                              <h6 dangerouslySetInnerHTML={customPost.title} />
                            </Link>
                            <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            />
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
              {["", "", "", "", "", "", "", "", ""].map((m, n) => (
                <div className="placeholder_child_7_parent_parent" key={n}>
                  <Placeholder
                    animation="glow"
                    className="placeholder_child_7_parent"
                  >
                    <Placeholder
                      xs={7}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                    <Placeholder
                      xs={4}
                      bg="dark"
                      className="placeholder_child_7_1"
                    />
                  </Placeholder>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    );
  };
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
  const RightBarWithMagazine = ({
    sideTitleLink,
    sideTitle,
    sidePosts,
    categoryID,
  }) => {
    return (
      <div className="post_block_2_right_bar_parent_1">
        <div className="magazine_preview_parent_1">
          <img
            className="magazine_preview_img_1"
            src="https://www.hmshop.co.za/wp-content/uploads/2023/04/CTEOctober23.jpg"
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
          title={sideTitle}
          link={sideTitleLink}
          postsSet={sidePosts}
          WP_SiteUrl={WP_SiteUrl}
          postsSet_categoryID={categoryID}
        />

        <div className="ad_square_1"></div>
      </div>
    );
  };

  //
  //
  //
  //
  //
  //
  //
  //

  const PostBlock = ({
    mainTitle,
    navigationID,
    see_all_link,
    see_latest_link,
    featurePosts,
    featurePosts_categoryID,
    sideTitle,
    sideTitleLink,
    sideBarType,
  }) => {
    //
    //
    return (
      <div className="post_block_1_container_1">
        <ArticleListView_1
          title={mainTitle}
          link_1={see_all_link}
          link_2={see_latest_link}
          postsSet={postsSet1}
          WP_SiteUrl={WP_SiteUrl}
          postsSet_categoryID={featurePosts_categoryID}
        />
        {sideBarType === "RightBarWithMagazine" && (
          <RightBarWithMagazine
            categoryID={featurePosts_categoryID}
            sideTitleLink={sideTitleLink}
            sideTitle={sideTitle}
            sidePosts={featurePosts}
          />
        )}
        {sideBarType === "RightBarWithOutMagazine" && (
          <RightBarWithOutMagazine
            categoryID={featurePosts_categoryID}
            sideTitleLink={sideTitleLink}
            sideTitle={sideTitle}
            sidePosts={featurePosts}
          />
        )}
      </div>
    );
  };
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
      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"Western Cape"}
            see_all_link={"/news/western-cape/"}
            see_latest_link={"/news/western-cape/"}
            featurePosts={postsSet1}
            featurePosts_categoryID={postsSet1_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/western-cape/"}
            sidePosts={postsSet1}
            sideBarType={"RightBarWithMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"South Africa"}
            navigationID={"south-africa"}
            see_all_link={"/news/south-africa/"}
            see_latest_link={"/news/south-africa/"}
            featurePosts={postsSet2}
            featurePosts_categoryID={postsSet2_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/south-africa/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"World"}
            see_all_link={"/news/world/"}
            see_latest_link={"/news/world/"}
            featurePosts={postsSet3}
            featurePosts_categoryID={postsSet3_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/world/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"Opinion"}
            see_all_link={"/news/opinion/"}
            see_latest_link={"/news/opinion/"}
            featurePosts={postsSet4}
            featurePosts_categoryID={postsSet4_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/opinion/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"Good News"}
            see_all_link={"/news/good-news/"}
            see_latest_link={"/news/good-news/"}
            featurePosts={postsSet5}
            featurePosts_categoryID={postsSet5_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/good-news/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"Business"}
            see_all_link={"/news/business/"}
            see_latest_link={"/news/business/"}
            featurePosts={postsSet6}
            featurePosts_categoryID={postsSet6_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/business/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky
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
          <PostBlock
            mainTitle={"Sport"}
            see_all_link={"/news/sport/"}
            see_latest_link={"/news/sport/"}
            featurePosts={postsSet6}
            featurePosts_categoryID={postsSet6_categoryID}
            sideTitle={"Top News"}
            sideTitleLink={"/news/sport/"}
            sideBarType={"RightBarWithOutMagazine"}
          />
        </div>

        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky
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

export default connect(NewsTrendingPage);
