import React from "react";
import Link from "@frontity/components/link";
import { Placeholder } from "react-bootstrap";
import CategoryDateText from "../CategoryDateText";
import { CustomWPRestServicePostObject } from "../../js/main";
import { FaAngleRight } from "react-icons/fa";

const SidebarListingWithOutImages = ({
  link,
  title,
  postsSet,
  WP_SiteUrl,
  postsSet_categoryID,
  postsSet_categoryTitle,
}) => {
  return (
    <div className="magazine_topNews_parent_1">
      {/* SidebarListingWithOutImages */}
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
                          className="magazine_topNews_container_1"
                          key={index}
                        >
                          <Link link={customPost.slug}>
                            <h6 dangerouslySetInnerHTML={customPost.title} />
                          </Link>
                          <CategoryDateText
                            categoryText={_categoryText}
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
      </div>
    </div>
  );
};

export default SidebarListingWithOutImages;
