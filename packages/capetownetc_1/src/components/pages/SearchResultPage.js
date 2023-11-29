import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";
import ArticleListView_3 from "../components/article-listing/ArticleListView_3";
import ArticleListView_2_search from "../components/article-listing/ArticleListView_2_search";

const SearchResultPage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const WP_SiteUrl = state.source.url;
  const routerLink = state.router.link;
  //
  const [postsSet1, setPostsSet1] = useState(null);
  // NEWS
  const postsSet2_categoryID = 3;
  const [postsSet2, setPostsSet2] = useState(null);
  //
  const [adPositions, setAdPositions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //
  //
  //
  //
  //
  //
  useEffect(() => {
    const _searchTerm = routerLink.split("s=")[1];
    setSearchTerm(_searchTerm);
    //
    //
    //
    if (searchTerm !== "") {
      const fetch1Posts = async () => {
        try {
          const response = await fetch(
            WP_SiteUrl +
              "/wp-json/wp/v2/search?search=" +
              searchTerm +
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
    }
    //
    //

    //
  }, [routerLink, searchTerm]);
  //
  //
  useEffect(() => {
    //
    //
    // NEWS
    const fetch2Posts = async () => {
      try {
        const response = await fetch(
          WP_SiteUrl +
            "/wp-json/wp/v2/posts?categories=" +
            postsSet2_categoryID +
            "&per_page=50&orderby=date&order=desc&_embed"
        );

        if (!response.ok) {
          setPostsSet2(false);
          return;
        }
        const postsData = await response.json();
        // console.log(postsData);
        setPostsSet2(postsData);
        //
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet2(false);
      }
    };
    fetch2Posts();
    //
    //
    //
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
              <ArticleListView_2_search
                title={"Search results for '" + searchTerm + "'"}
                postsSet={postsSet1}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryTitle={"THINGS TO DO"}
              />
            </div>

            <div className="post_block_2_right_bar_parent_1">
              <div className="ad_square_1"></div>

              <SidebarListingWithImages
                link={"/news/"}
                title={"Top News"}
                postsSet={postsSet2}
                WP_SiteUrl={WP_SiteUrl}
                postsSet_categoryID={postsSet2_categoryID}
              />

              <div className="magazine_preview_parent_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://www.hmshop.co.za/wp-content/uploads/2023/04/CTEOctober23.jpg"
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

export default connect(SearchResultPage);
