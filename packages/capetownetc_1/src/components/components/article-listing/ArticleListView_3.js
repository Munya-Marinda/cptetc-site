import Link from "@frontity/components/link";
import CategoryDateText from "../CategoryDateText";
import ArticleIcons from "../ArticleIcons";
import { Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject } from "../../js/main";

const ArticleListView_3 = ({
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  title,
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
    <div className="post_block_2_header_container_1 content_spacing_top_1">
      {/* ArticleListView_3 */}
      <div
        className="post_block_2_header_parent_1"
        style={{
          borderBottom: "2px solid black",
        }}
      >
        <span className="post_block_2_header_1">{title}</span>
        <div className="post_block_2_headerLinks_parent_1"></div>
      </div>

      <div
        className="post_block_2_posts_container_2"
        style={{ marginTop: "25px" }}
      >
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

export default ArticleListView_3;
