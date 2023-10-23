import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { CustomWPRestServicePostObject, formatDate } from "../js/main";
import { Placeholder } from "react-bootstrap";
import { FaGreaterThan } from "react-icons/fa";
import ArticleIcons from "../components/ArticleIcons";
import CategoryDateText from "../components/CategoryDateText";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { Carousel } from "react-bootstrap";

const SinglePostView = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const WP_SiteUrl = state.source.url;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  //
  const postID = post.id;
  const postTitle = { __html: post.title.rendered.trim() };
  const postContent = { __html: post.content.rendered.trim() };
  const postDate = formatDate(post.date);
  const postAuthorID = post._embedded.author;
  //
  const postsSet1_categoryID = 3;
  const [postsSet1, setPostsSet1] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);
  const [postImages, setPostImages] = useState([]);
  const [adPositions, setAdPositions] = useState(false);
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    //
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl + "/wp-json/wp/v2/posts/" + postID + "?_embed"
        );
        if (!response.ok) {
          setCurrentPost(false);
          return;
        }
        const postData = await response.json();
        setCurrentPost(postData);
        const tempPostImages = [];
        if (postData) {
          postData._embedded["wp:featuredmedia"].forEach((img) => {
            tempPostImages.push(img.link);
          });
        }
        setPostImages(tempPostImages);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setCurrentPost(false);
      }
    };
    fetchCurrentPost();
    //
    //
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
  }, [post]);
  //
  //
  useEffect(() => {
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
  return (
    <main className="homepage_main_parent_1"> 

      <div className="post_block_1_parent_1 content_spacing_top_2 content_spacing_bottom_1">
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
            <div className="post_block_2_header_container_1">
              <div className="single_view_header_parent">
                <h1 dangerouslySetInnerHTML={postTitle} />
              </div>

              <div className="single_view_dateByline_socialIcons_parent_1">
                <div className="single_view_dateByline_parent_1">
                  <span className="single_view_date_span_1">
                    Posted on {postDate}
                  </span>
                  <span className="single_view_byline_span_1">
                    By: {postAuthorID}
                  </span>
                </div>
                <div className="single_view_socialIcons_parent_1">
                  <SocialMediaIcons />
                </div>
              </div>

              <div className="single_view_carousel_parent_1">
                <Carousel>
                  {postImages.map((url, index) => (
                    <Carousel.Item key={index}>
                      <img src={url} className="d-block w-100" alt="Image" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div
                className="single_view_content_parent_1"
                dangerouslySetInnerHTML={postContent}
                style={
                  {
                    // overflowX: "hidden",
                    // width: "100vw !important",
                  }
                }
              />

              <div className="post_block_2_posts_container_2 content_spacing_top_2">
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(2, 7).map((post, index) => {
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
                                  className="post_block_2_post_container_1"
                                  key={index}
                                >
                                  <div className="post_block_2_postImg_container_1">
                                    <img
                                      alt=""
                                      src={customPost.imgUrl}
                                      className="post_block_2_postImg_2"
                                    />
                                    <ArticleIcons
                                      commentsLink={customPost.commentsSlug}
                                      cameraLink={customPost.slug}
                                    />
                                  </div>
                                  <div className="post_block_2_postText_1">
                                    <Link link={customPost.slug}>
                                      <h1
                                        dangerouslySetInnerHTML={
                                          customPost.title
                                        }
                                      />
                                    </Link>
                                    <CategoryDateText
                                      dateText={customPost.date}
                                      categoryText={customPost.categoryText}
                                    />

                                    <div
                                      dangerouslySetInnerHTML={
                                        customPost.excerpt
                                      }
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
                  <>
                    {["", "", "", "", ""].map((m, n) => (
                      <div className="placeholder_child_4_parent">
                        <Placeholder key={n} animation="glow">
                          <Placeholder
                            xs={2}
                            bg="dark"
                            className="placeholder_child_4"
                          />
                        </Placeholder>
                        <Placeholder
                          key={n}
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
              </div>
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>

              <div className="magazine_topNews_parent_1">
                <Link link="/news/">
                  <div className="magazine_topNews_header_1">
                    <span className="magazine_topNews_headerText_1">
                      Top News
                    </span>
                    <span className="magazine_topNews_icon_1">
                      <FaGreaterThan />
                    </span>
                  </div>
                </Link>
                {postsSet1 !== null ? (
                  <>
                    {postsSet1 !== false ? (
                      <>
                        {postsSet1.length !== 0 ? (
                          <>
                            {postsSet1.slice(0, 5)?.map((post, index) => {
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
                                  className="magazine_topNews_container_1"
                                  key={index}
                                >
                                  <Link link={customPost.slug}>
                                    <h6
                                      dangerouslySetInnerHTML={customPost.title}
                                    />
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
                      <div
                        className="placeholder_child_7_parent_parent"
                        key={n}
                      >
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
              </div>

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
            </div>
          </div>
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
    </main>
  );
};

export default connect(SinglePostView);
