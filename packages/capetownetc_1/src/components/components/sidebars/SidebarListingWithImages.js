import React from "react";
import Link from "@frontity/components/link";
import { Placeholder } from "react-bootstrap";
import CategoryDateText from "../CategoryDateText";
import { CustomWPRestServicePostObject } from "../../js/main";
import { FaAngleRight } from "react-icons/fa";
import ArticleIcons from "../ArticleIcons";

const SidebarListingWithImages = ({
  link,
  title,
  postsSet,
  postsSet_categoryID,
  postsSet_categoryTitle,
  WP_SiteUrl,
}) => {
  return (
    <div className="magazine_topNews_parent_1">
      {/* SidebarListingWithImages */}
      <Link link={link}>
        <div className="magazine_topNews_header_1">
          <span className="magazine_topNews_headerText_1">{title}</span>
          <span className="magazine_topNews_icon_1">
            <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/arrow-greater-than-1.svg" />
          </span>
        </div>
      </Link>

      <div className="topGuides_parent_1">
        {postsSet !== null ? (
          <>
            {postsSet !== false ? (
              <>
                {postsSet.length !== 0 ? (
                  <>
                    {postsSet.slice(0, 5)?.map((post, index) => {
                      const customPost = CustomWPRestServicePostObject(
                        WP_SiteUrl,
                        post,
                        postsSet_categoryID
                      );
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
                      //
                      //
                      return (
                        <div className="topGuides_container_1" key={index}>
                          <div className="topGuides_postImg_1">
                            <img
                              alt=""
                              src={customPost.imgUrl}
                              className="post_block_3_postImg_2"
                            />
                            <ArticleIcons
                              commentsLink={customPost.commentsSlug}
                              showCamera={false}
                              //
                              videoLink={customPost.slug}
                              showTopRight={true}
                            />
                          </div>
                          <div className="topGuides_textContainer_1">
                            <Link link={customPost.slug}>
                              <h6
                                dangerouslySetInnerHTML={customPost.title}
                                style={{
                                  marginBottom: "5px",
                                }}
                              />
                            </Link>
                            <CategoryDateText
                              categoryText={_categoryText}
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
              <div className="placeholder_child_8_parent_parent" key={n}>
                <Placeholder animation="glow" className="">
                  <Placeholder className="placeholder_child_8_1" />
                </Placeholder>
                <Placeholder animation="glow" className="">
                  <Placeholder xs={10} className="placeholder_child_8_2" />
                  <Placeholder xs={5} className="placeholder_child_8_2" />
                </Placeholder>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarListingWithImages;
