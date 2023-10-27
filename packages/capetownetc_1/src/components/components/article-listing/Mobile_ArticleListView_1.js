import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../../js/main";

const Mobile_ArticleListView_1 = ({
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  postsSet_categoryTitle,
  slice_start,
  slice_end,
}) => {
  return (
    <div className="post_block_2_posts_container_2 content_spacing_top_2 hide_on_desktop">
      {postsSet !== null ? (
        <>
          {postsSet !== false ? (
            <>
              {postsSet.length !== 0 ? (
                <>
                  {postsSet.slice(slice_start, slice_end).map((post, index) => {
                    const customPost = CustomWPRestServicePostObject(
                      WP_SiteUrl,
                      post,
                      postsSet_categoryID
                    );
                    //
                    //
                    const _categoryText =
                      customPost.categoryText !== undefined &&
                      customPost.categoryText !== null &&
                      customPost.categoryText !== ""
                        ? customPost.categoryText
                        : postsSet_categoryTitle;
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
                          <Link
                            link={customPost.slug}
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            <h1 dangerouslySetInnerHTML={customPost.title} />
                          </Link>
                          <CategoryDateText
                            dateText={customPost.date}
                            categoryText={_categoryText}
                          />
                          <div
                            style={{
                              marginTop: "10px",
                            }}
                            className="post_block_2_postText_content_parent_1"
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
        <>
          {["", "", "", "", ""].map((m, n) => (
            <div className="placeholder_child_4_parent" key={n}>
              <Placeholder animation="glow">
                <Placeholder xs={2} bg="dark" className="placeholder_child_4" />
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
    </div>
  );
};

export default Mobile_ArticleListView_1;
