import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../../js/main";

const ArticleListView_2 = ({
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  postsSet_categoryTitle,
  title,
  link_1,
  link_2,
}) => {
  return (
    <div
      className="post_block_2_header_container_1"
      style={{
        transform: "translateY(-22px)",
      }}
    >
      {/* ArticleListView_2 */}
      <div className="post_block_2_header_parent_1">
        <span className="post_block_2_header_1">{title}</span>
        <div className="post_block_2_headerLinks_parent_1">
          <Link link={link_1} className="post_block_2_headerLink_1">
            <span>SEE ALL</span>
          </Link>
          <span className="post_block_2_headerLink_spacer_1"> | </span>
          <Link link={link_2} className="post_block_2_headerLink_1">
            <span>THE LATEST</span>
          </Link>
        </div>
      </div>

      {postsSet !== null ? (
        <>
          {postsSet !== false ? (
            <>
              {postsSet.length !== 0 ? (
                <>
                  {postsSet.slice(0, 1)?.map((post, index) => {
                    const customPost = CustomWPRestServicePostObject(
                      WP_SiteUrl,
                      post,
                      postsSet_categoryID,
                      null,
                      120
                    );
                    const _categoryText =
                      customPost.categoryText !== undefined &&
                      customPost.categoryText !== null &&
                      customPost.categoryText !== ""
                        ? customPost.categoryText
                        : postsSet_categoryTitle;
                    //
                    //
                    //
                    //
                    return (
                      <div
                        key={index}
                        className="post_block_2_posts_container_3"
                      >
                        <div className="post_block_2_postImg_container_1 min_height_200px">
                          <img
                            src={customPost.imgUrl}
                            alt=""
                            className="post_block_2_featureImg_2"
                          />
                          <ArticleIcons
                            commentsLink={customPost.commentsSlug}
                            cameraLink={customPost.slug}
                            categoryText={_categoryText}
                            categoryLink={"/news/"}
                            //
                            showCamera={true}
                            videoLink={customPost.slug}
                            showVideo={true}
                            showTopRight={true}
                          />
                        </div>
                        <div className="post_block_3_featuredPostText_parent_1">
                          <Link
                            link={customPost.slug}
                            style={{ marginBottom: "10px" }}
                          >
                            <h1 dangerouslySetInnerHTML={customPost.title} />
                          </Link>
                          <CategoryDateText dateText={customPost.date} />
                          <div
                            className="single_feature_post_block_text_parent_1"
                            style={{ marginTop: "20px" }}
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
          <Placeholder animation="glow" className="placeholder_child_5_parent">
            <Placeholder xs={2} bg="dark" className="placeholder_child_5" />
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

      <div className="ad_horizontal_2_parent content_spacing_top_3">
        <h6 className="ad_text_1">ADVERTISEMENT</h6>
        <div className="ad_horizontal_2"></div>
      </div>

      <div className="post_block_3_posts_container_1 content_spacing_top_2">
        {postsSet !== null ? (
          <>
            {postsSet !== false ? (
              <>
                {postsSet.length !== 0 ? (
                  <>
                    {postsSet.slice(1, 10)?.map((post, index) => {
                      const customPost = CustomWPRestServicePostObject(
                        WP_SiteUrl,
                        post,
                        postsSet_categoryID
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
                            <ArticleIcons
                              commentsLink={customPost.commentsSlug}
                              cameraLink={customPost.slug}
                              //
                              showCamera={true}
                              videoLink={customPost.slug}
                              showTopRight={true}
                            />
                          </div>
                          <div className="post_block_3_postText_1">
                            <CategoryDateText
                              categoryText={customPost.categoryText}
                              dateText={customPost.date}
                            />
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
    </div>
  );
};

export default ArticleListView_2;
