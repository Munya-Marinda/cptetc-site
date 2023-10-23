import { useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../../js/main";

const ArticleListView_1 = ({
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  title,
  link_1,
  link_2,
  postsSet_categoryTitle,
}) => {
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
    <div
      className="post_block_2_header_container_1"
      style={{
        transform: "translateY(-22px)",
      }}
    >
      {/* ArticleListView_1 */}
      <div className="post_block_2_header_parent_1">
        <span className="post_block_2_header_1">{title}</span>
        <div className="post_block_2_headerLinks_parent_1">
          <Link link={link_1} className="post_block_2_headerLink_1">
            <span> SEE ALL </span>
          </Link>
          <span className="post_block_2_headerLink_spacer_1"> | </span>
          <Link link={link_2} className="post_block_2_headerLink_1">
            <span> THE LATEST </span>
          </Link>
        </div>
      </div>
      <div className="post_block_2_posts_container_1">
        {postsSet !== null ? (
          <>
            {postsSet !== false ? (
              <>
                {postsSet.length !== 0 ? (
                  <>
                    {postsSet.slice(0, 2).map((post, index) => {
                      const customPost = CustomWPRestServicePostObject(
                        WP_SiteUrl,
                        post,
                        postsSet_categoryID
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
                      //
                      return (
                        <div
                          key={index}
                          className={
                            "post_block_2_postImg_container_1 min_height_200px" +
                            (index === 1 ? " hide_on_mobile" : "")
                          }
                        >
                          <div className="post_block_2_postImg_container_1_darkOverlay postImageTextOverlay_2">
                            <div>
                              <Link link={customPost.slug}>
                                <h1
                                  dangerouslySetInnerHTML={customPost.title}
                                />
                              </Link>
                              <CategoryDateText
                                dateText={customPost.date}
                                textColor={"white"}
                              />
                            </div>
                          </div>
                          <img
                            src={customPost.imgUrl}
                            alt=""
                            className="post_block_2_featureImg_1 "
                          />
                          <ArticleIcons
                            commentsLink={customPost.commentsSlug}
                            cameraLink={customPost.slug}
                            categoryText={_categoryText}
                            categoryLink={"/news/"}
                            //
                            showCamera={true}
                            videoLink={customPost.slug}
                            showTopRight={true}
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
          <Placeholder animation="glow" className="placeholder_child_3_parent">
            <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
            <Placeholder xs={2} bg="dark" className="placeholder_child_3" />
          </Placeholder>
        )}
      </div>

      <div className="ad_horizontal_2_parent content_spacing_top_1">
        <h6 className="ad_text_1">ADVERTISEMENT</h6>
        <div className="ad_horizontal_2"></div>
      </div>

      <div className="post_block_2_posts_container_2 content_spacing_top_2">
        {postsSet !== null &&
        postsSet_categoryID !== null &&
        postsSet_categoryID !== undefined ? (
          <>
            {postsSet !== false && postsSet_categoryID !== false ? (
              <>
                {postsSet.length !== 0 ? (
                  <>
                    {postsSet.slice(2, 7).map((post, index) => {
                      const customPost = CustomWPRestServicePostObject(
                        WP_SiteUrl,
                        post,
                        postsSet_categoryID
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
                              showCamera={true}
                              cameraLink={customPost.slug}
                              commentsLink={customPost.commentsSlug}
                              //
                              videoLink={customPost.slug}
                              showTopRight={true}
                            />
                          </div>
                          <div className="post_block_2_postText_1">
                            <Link link={customPost.slug}>
                              <h1
                                dangerouslySetInnerHTML={customPost.title}
                                style={{ marginBottom: "10px" }}
                              />
                            </Link>
                            <CategoryDateText
                              dateText={customPost.date}
                              categoryText={_categoryText}
                            />
                            <div
                              style={{ marginTop: "10px" }}
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
      </div>
    </div>
  );
};

export default ArticleListView_1;
