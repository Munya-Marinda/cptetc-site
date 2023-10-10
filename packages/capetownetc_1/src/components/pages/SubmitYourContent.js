import { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const SubmitYourContent = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const postsSet1_categoryID = 7736;
  const [postsSet1, setPostsSet1] = useState(null);
  //
  const WP_SiteUrl = state.source.url;
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
  return (
    <main className="homepage_main_parent_1">
      <div id="sticky_here"></div>

      <div className="post_block_1_parent_1 content_spacing_bottom_1 content_spacing_top_2">
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_1"
            style={
              headerIsSticky && isSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd1Left,
                  }
                : {}
            }
          ></div>
        </div>

        <div className="post_block_1_parent_2 content_spacing_top_2">
          <div className="post_block_1_parent_2">
            <div className="post_block_1_container_1">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  className="post_block_2_header_1"
                  style={{
                    textAlign: "center",
                  }}
                >
                  How You Can Be Featured
                </h1>

                <p
                  style={{
                    width: "70%",
                    fontSize: "20px",
                    margin: "40px 0px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Have you got a story to tell? Are you an aspiring content
                  creator or influencer? Keen to share your craft?
                </p>

                <p
                  style={{
                    width: "70%",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Cape{"{Town}"}Etc is dedicated to showcasing diverse stories
                  and perspectives, ranging from news and community projects to
                  cool places to visit and fun things to do
                </p>

                <p
                  style={{
                    width: "70%",
                    fontSize: "16px",
                    margin: "10px 0px 50px 0px",
                    textAlign: "center",
                  }}
                >
                  We want to share it all through your eyes and offer everyone a
                  space to feel heard. Drop your content in the box below and
                  follow the prompts to be featured on our website and/or social
                  media. You can submit to be credited or remain anonymous.
                </p>

                <p
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Please complete the form below to submit your content
                </p>
                <span
                  style={{
                    color: "red",
                    width: "100%",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  * Required
                </span>

                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://hsmcompetitions.co.za/formguru/api.php?form-id=24"
                    width="100%"
                    height="750px"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
              <div className="post_block_2_right_bar_parent_1">
                <div className="ad_square_1">
                  <p>[AD]</p>
                </div>

                <SidebarListingWithImages
                  title="Top Guides"
                  link={"/things-to-do/"}
                  postsSet={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  postsSet_categoryTitle={"THINGS TO DO"}
                  postsSet_categoryID={postsSet1_categoryID}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ad_vertical_1_parent">
          <div
            className="ad_vertical_1"
            id="ad_vertical_1_id_2"
            style={
              headerIsSticky && isSticky
                ? {
                    position: "fixed",
                    top: headerStickyContainerHeight,
                    left: adPositions.verticalAd2Left,
                  }
                : {}
            }
          ></div>
        </div>
      </div>
    </main>
  );
};

export default connect(SubmitYourContent);
