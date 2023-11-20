import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaGreaterThan } from "react-icons/fa";
import ArticleIcons from "../components/ArticleIcons";
import CategoryDateText from "../components/CategoryDateText";
import DaddysDealsIFrame from "../components/DaddysDealsIFrame";
import FullWidthPost from "../components/FullWidthPost";
import FullScreenCategories from "../components/FullScreenCategories";
import { CustomWPRestServicePostObject, filterAndSortPosts } from "../js/main";
import { Placeholder } from "react-bootstrap";
import ArticleListView_1 from "../components/article-listing/ArticleListView_1";
import ArticleListView_2 from "../components/article-listing/ArticleListView_2";
import SidebarListingWithOutImages from "../components/sidebars/SidebarListingWithOutImages";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";
import Mobile_ArticleListView_1 from "../components/article-listing/Mobile_ArticleListView_1";

const HomePage = ({ state, headerStickyContainerHeight, headerIsSticky }) => {
  const [adPositions, setAdPositions] = useState(false);
  // FEATURED
  const postsSet1_categoryID = 7736;
  const [postsSet1, setPostsSet1] = useState(null);
  // NEWS
  const postsSet2_categoryID = 3;
  const [postsSet2, setPostsSet2] = useState(null);
  // THINGS TO DO
  const postsSet3_categoryID = 10366;
  const [postsSet3, setPostsSet3] = useState(null);
  // THINGS TO DO | TOP GUIDES
  const postsSet4_categoryID = 10373;
  const [postsSet4, setPostsSet4] = useState(null);
  // TOP NEWS
  const postsSet5_categoryID = 10373;
  const [postsSet5, setPostsSet5] = useState(null);
  // AD SERVER
  const ad_1_ID = 213;
  const [ad_1, setAd_1] = useState(null);
  //
  const WP_SiteUrl = state.source.url;
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
    // NEWS
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
    // THINGS TO DO
    const fetchSet3Posts = async () => {
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
    fetchSet3Posts();
    //
    //
    //
    // THINGS TO DO | TOP GUIDES
    const fetchSet4Posts = async () => {
      try {
        const url =
          WP_SiteUrl +
          "/wp-json/wp/v2/posts?categories=" +
          postsSet4_categoryID +
          "&per_page=100&orderby=date&order=desc&_embed";
        const response = await fetch(url);

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
    fetchSet4Posts();

    //
    //
    //
    // THINGS TO DO | TOP GUIDES
    const fetchSet5Posts = async () => {
      try {
        const url =
          WP_SiteUrl +
          "/wp-json/wp/v2/posts?meta_key=Views&per_page=100&page=1&_embed";
        const response = await fetch(url);

        if (!response.ok) {
          setPostsSet5(false);
          return;
        }

        const postsData = await response.json();
        setPostsSet5(filterAndSortPosts(postsData));
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet5(false);
      }
    };
    fetchSet5Posts();
    //
    //
    //
    //
    // AD SERVER
    const fetchAd_1 = async () => {
      try {
        const url =
          "http://localhost/local-capetownetc/wp-json/frontend/v1/serve-ad/" +
          ad_1_ID;
        const response = await fetch(url);

        if (!response.ok) {
          setAd_1(false);
          return;
        }

        const adData = await response.json();
        setAd_1(adData);
      } catch (error) { 
        setAd_1(false);
      }
    };
    fetchAd_1();
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
    <main className="homepage_main_parent_1">
      <div className="post_block_1_parent_1 content_spacing_bottom_2 content_spacing_top_3">
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
          <div className="post_block_1_container_1">
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
                            postsSet1_categoryID
                          );
                          //
                          //
                          //
                          //
                          //
                          return (
                            <div
                              className="post_block_1_featureImg_container_1"
                              key={index}
                            >
                              <div className="post_block_1_featureImg_container_1_darkOverlay postImageTextOverlay_1">
                                <div>
                                  <Link link={customPost.slug}>
                                    <h1
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
                                  </Link>
                                  <CategoryDateText
                                    textColor={"white"}
                                    dateText={customPost.date}
                                  />
                                </div>
                              </div>
                              <img
                                src={customPost.imgUrl}
                                alt=""
                                className="post_block_1_featureImg_1"
                              />
                              <ArticleIcons
                                commentsLink={customPost.commentsSlug}
                                videoLink={customPost.slug}
                                cameraLink={customPost.slug}
                                categoryText={customPost.categoryText}
                                categoryLink={"/news/"}
                                //
                                showVideo={true}
                                showCamera={true}
                                showTopRight={true}
                              />
                            </div>
                          );
                        })}

                        <div className="post_block_1_featureImgs_parent_1 hide_on_mobile">
                          {postsSet1.slice(1, 3)?.map((post, index) => {
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
                                className="post_block_1_featureImgs_container_1"
                                key={index}
                              >
                                <div className="post_block_1_featureImgs_container_1_darkOverlay postImageTextOverlay_1">
                                  <div>
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
                                    <CategoryDateText
                                      dateText={customPost.date}
                                      textColor={"white"}
                                    />
                                  </div>
                                </div>
                                <img
                                  className="post_block_1_featureImgs_1"
                                  src={customPost.imgUrl}
                                  alt=""
                                />
                                <ArticleIcons
                                  commentsLink={customPost.commentsSlug}
                                  videoLink={customPost.slug}
                                  cameraLink={customPost.slug}
                                  categoryText={customPost.categoryText}
                                  categoryLink={"/news/"}
                                  //
                                  showCamera={true}
                                  showTopRight={true}
                                />
                              </div>
                            );
                          })}
                        </div>
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
              <div className="placeholder_parent_1">
                <Placeholder
                  animation="glow"
                  className="placeholder_child_1_parent"
                >
                  <Placeholder
                    xs={2}
                    bg="dark"
                    className="placeholder_child_1"
                  />
                </Placeholder>
                <Placeholder
                  animation="glow"
                  className="placeholder_child_2_parent"
                >
                  <Placeholder
                    xs={2}
                    bg="dark"
                    className="placeholder_child_2"
                  />
                  <Placeholder
                    xs={2}
                    bg="dark"
                    className="placeholder_child_2"
                  />
                </Placeholder>
              </div>
            )}
          </div>

          <div className="ad_horizontal_2_parent content_spacing_top_3">
            <h6 className="ad_text_1">ADVERTISEMENT</h6>
            <div className="ad_horizontal_2"></div>
          </div>

          <Mobile_ArticleListView_1
            slice_end={7}
            slice_start={1}
            postsSet={postsSet1}
            WP_SiteUrl={WP_SiteUrl}
            postsSet_categoryTitle={"NEWS"}
            postsSet1_categoryID={postsSet1_categoryID}
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

      <FullScreenCategories />

      <div className="post_block_1_parent_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent"></div>

        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <ArticleListView_1
              title={"News"}
              link_1={"/news/"}
              link_2={"/news/"}
              postsSet={postsSet2}
              WP_SiteUrl={WP_SiteUrl}
              postsSet_categoryID={postsSet2_categoryID}
            />

            <div className="post_block_2_right_bar_parent_1">
              <div className="magazine_preview_parent_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg"
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

              <SidebarListingWithOutImages
                link={"/news/"}
                title={"Top News"}
                postsSet={postsSet5}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"NEWS"}
                postsSet_categoryID={postsSet5_categoryID}
              />

              <div className="ad_square_1">
                {ad_1 !== null ? (
                  <>
                    {ad_1 !== false ? (
                      <>
                        {ad_1.length !== 0 ? (
                          <>
                            <h6>[AD]</h6>
                            {/* <div
                              dangerouslySetInnerHTML={{
                                __html: ad_1.html_code,
                              }}
                            />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: ad_1.script_code,
                              }}
                            /> */}
                          </>
                        ) : (
                          <div className="spinner_parent_1">
                            <h1>NO AD</h1>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="spinner_parent_1">
                        <span>[!AD]</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="placeholder_child_4_parent">
                    <Placeholder animation="glow">
                      <Placeholder
                        xs={2}
                        bg="dark"
                        className="placeholder_ad_square_1"
                      />
                    </Placeholder>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ad_vertical_1_parent"></div>
      </div>

      <DaddysDealsIFrame />

      <FullWidthPost
        title={"The 20 Best Places To Travel to in South Africa"}
        link={"#the-20-best-places-to-travel-to-in-south-africa"}
      />

      <div className="post_block_1_parent_2 content_spacing_top_2 content_spacing_bottom_2">
        <div className="ad_vertical_1_parent"></div>
        <div className="post_block_1_parent_2">
          <div className="post_block_1_container_1">
            <ArticleListView_2
              title={"Things To Do"}
              link_1={"/things-to-do/"}
              link_2={"/things-to-do/"}
              postsSet={postsSet3}
              WP_SiteUrl={WP_SiteUrl}
              postsSet_categoryTitle={"THINGS TO DO"}
              postsSet_categoryID={postsSet3_categoryID}
            />

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1">
                <p>[AD]</p>
              </div>

              <SidebarListingWithImages
                title="Top Guides"
                link={"/things-to-do/"}
                postsSet={postsSet4}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"THINGS TO DO"}
                postsSet_categoryID={postsSet4_categoryID}
              />
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent"></div>
      </div>
    </main>
  );
};

export default connect(HomePage);
