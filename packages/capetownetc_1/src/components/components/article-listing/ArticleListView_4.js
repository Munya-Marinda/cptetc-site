import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../../js/main";

const ArticleListView_4 = ({
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  slice_start,
  slice_end,
}) => {
  return (
    <div className="post_block_2_header_container_1">
      {postsSet !== null ? (
        <>
          {postsSet !== false ? (
            <>
              {postsSet.length !== 0 ? (
                <>
                  {slice_end !== null ? (
                    <div className="post_block_3_posts_container_1 content_spacing_top_2">
                      {postsSet
                        .slice(slice_start, slice_end)
                        ?.map((post, index) => {
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
                    </div>
                  ) : (
                    <div className="post_block_3_posts_container_1">
                      {postsSet.slice(slice_start)?.map((post, index) => {
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
                    </div>
                  )}
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
  );
};

export default ArticleListView_4;
