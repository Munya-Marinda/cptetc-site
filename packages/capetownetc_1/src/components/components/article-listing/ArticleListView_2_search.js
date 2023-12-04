import { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject_searchResult } from "../../js/main";
import Mobile_ArticleListView_1 from "./Mobile_ArticleListView_1";

const ArticleListView_2_search = ({ postsSet, WP_SiteUrl, title }) => {
  //
  //
  const [images, setImages] = useState([]);
  //
  //
  //
  //
  useEffect(() => {
    const fetchImage = async (url, index) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return;
        }
        const img = await response.json();
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = img.link;
          return newImages;
        });
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    //
    if (
      postsSet !== null &&
      postsSet !== undefined &&
      postsSet !== false &&
      typeof postsSet === "object"
    ) {
      if (postsSet.length !== 0) {
        postsSet.forEach((post, index) => {
          fetchImage(
            post?._embedded?.self[0]?._links["wp:featuredmedia"][0]?.href,
            index
          );
        });
      }
    }
  }, [postsSet]);

  //
  //
  //
  //

  return (
    <div
      className="post_block_2_header_container_1"
      style={{
        transform: "translateY(-22px)",
      }}
    >
      {/* ArticleListView_2_search */}
      <div className="post_block_2_header_parent_1">
        <span className="post_block_2_header_1">{title}</span>
        <div className="post_block_2_headerLinks_parent_1"></div>
      </div>

      <div className="ad_horizontal_2_parent content_spacing_top_3">
        <h6 className="ad_text_1">ADVERTISEMENT</h6>
        <div className="ad_horizontal_2"></div>
      </div>

      <div className="post_block_3_posts_container_1 content_spacing_top_2 hide_on_mobile">
        {postsSet !== null ? (
          <>
            {postsSet !== false ? (
              <>
                {postsSet.length !== 0 ? (
                  <>
                    {postsSet?.map((post, index) => {
                      const customPost =
                        CustomWPRestServicePostObject_searchResult(
                          WP_SiteUrl,
                          post
                        );
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
                              src={images[index]}
                              alt=""
                            />
                            {/* <ArticleIcons
                              commentsLink={customPost.commentsSlug}
                              cameraLink={customPost.slug}
                              //
                              showCamera={true}
                              videoLink={customPost.slug}
                              showTopRight={true}
                            /> */}
                          </div>
                          <div className="post_block_3_postText_1">
                            {/* <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            /> */}
                            <Link link={customPost.slug}>
                              <h1
                                style={{ marginTop: "10px" }}
                                dangerouslySetInnerHTML={customPost.title}
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
          <div className="post_block_3_posts_container_1 content_spacing_top_2 content_spacing_bottom_2">
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

      {/* <Mobile_ArticleListView_1
        slice_end={10}
        slice_start={1}
        postsSet={postsSet}
        WP_SiteUrl={WP_SiteUrl}
        postsSet1_categoryID={postsSet_categoryID}
        postsSet_categoryTitle={postsSet_categoryTitle}
      /> */}
    </div>
  );
};

export default ArticleListView_2_search;
