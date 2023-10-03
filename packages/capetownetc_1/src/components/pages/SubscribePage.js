import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Carousel, Placeholder } from "react-bootstrap";

//
//
//
//
//
//
//

const CustomPrevButton = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="subscribe_recent_issues_icon_1"
      id="subscribe_recent_issues_icon_id_1"
    >
      <FaLessThan />
    </span>
  );
};

const CustomNextButton = ({ onClick }) => {
  return (
    <span
      onClick={onClick}
      className="subscribe_recent_issues_icon_1"
      id="subscribe_recent_issues_icon_id_2"
    >
      <FaGreaterThan />
    </span>
  );
};

//
//
//
//
//
//
//

const SubscribePage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  //
  //
  const [adPositions, setAdPositions] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [pageObject, setPageObject] = useState(false);
  const [issuesChuncksSet1, setIssueshuncksSet1] = useState(null);
  const maxCarouselItems = 5;

  //
  //
  //
  //
  //
  //
  useEffect(() => {
    // FOOD AND DRINk
    const fetchPageContent = async () => {
      try {
        const response = await fetch(
          "https://staging.capetownetc.com/wp-json/wp/v2/pages/11294"
        );
        if (!response.ok) {
          setPageObject(false);
          return;
        }
        const pageContent = await response.json();
        setPageObject(pageContent);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPageObject(false);
      }
    };
    fetchPageContent();

    const issuesData = [
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
      {
        link: "https://github.com/",
        url: "https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg",
      },
    ];
    const issuesChunks = [];
    for (let i = 0; i < issuesData.length; i += maxCarouselItems) {
      issuesChunks.push(issuesData.slice(i, i + maxCarouselItems));
    }
    setIssueshuncksSet1(issuesChunks);

    const handleScroll = () => {
      const specificElement = document.getElementById("sticky_here");
      const specificElementPosition =
        specificElement.getBoundingClientRect().bottom;
      const shouldStick = 90 > specificElementPosition;
      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);

    const setAdPositionsFunc = () => {
      const verticalAd1Left = document
        .getElementById("ad_vertical_1_id_1")
        .getBoundingClientRect().left;
      const verticalAd2Left = document
        .getElementById("ad_vertical_1_id_2")
        .getBoundingClientRect().left;
      setAdPositions({
        verticalAd1Left: verticalAd1Left,
        verticalAd2Left: verticalAd2Left,
      });
    };
    setAdPositionsFunc();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

        <div className="post_block_1_parent_2">
          <div>
            <div className="subscribe_parent_1">
              <div className="subscribe_container_1">
                <img
                  className="magazine_preview_img_1"
                  src="https://www.hmshop.co.za/wp-content/uploads/2023/04/cape-etc.jpg"
                  alt="Latest CapeETC cover" 
                />
                <div className="subscribe_container_2">
                  {pageObject &&
                    pageObject !== undefined &&
                    pageObject !== null && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: pageObject.content.rendered,
                        }}
                      />
                    )}
                </div>
              </div>
              <div className="subscribe_recent_issues_parent_1 content_spacing_top_2">
                <div className="subscribe_recent_issues_container_1">
                  <span className="subscribe_recent_issues_text_1">
                    <b>Recent Issues</b>
                  </span>
                  <div className="subscribe_recent_issues_pager_parent_1">
                    <Link link={"#"}>
                      <span className="subscribe_recent_issues_viewAll_1">
                        View All
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="subscribe_recent_issues_parent_2 content_spacing_top_2">
                  {issuesChuncksSet1 !== null ? (
                    <>
                      {issuesChuncksSet1 !== false ? (
                        <>
                          {issuesChuncksSet1.length !== 0 ? (
                            <Carousel
                              interval={null}
                              indicators={false}
                              prevIcon={<CustomPrevButton />}
                              nextIcon={<CustomNextButton />}
                            >
                              {issuesChuncksSet1
                                .slice(0, maxCarouselItems)
                                .map((postChunk, index1) => (
                                  //
                                  //
                                  //
                                  //
                                  <Carousel.Item key={index1} className="">
                                    <div className="subscribe_recent_issues_carousel_1">
                                      {postChunk.map((img, index2) => {
                                        //
                                        //
                                        //
                                        //
                                        return (
                                          <Link link={img.link} key={index2}>
                                            <img
                                              alt={"Recent Issue " + index2}
                                              className="subscribe_recent_issues_img_1"
                                              src={img.url}
                                            />
                                          </Link>
                                        );
                                        //
                                        //
                                        //
                                        //
                                      })}
                                    </div>
                                  </Carousel.Item>
                                  //
                                  //
                                  //
                                  //
                                ))}
                            </Carousel>
                          ) : (
                            <div className="spinner_parent_0">
                              <h5>NO NEW POSTS FOUND</h5>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="spinner_parent_0">
                          <h5>NO FAILED TO FETCH NEW POSTS</h5>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="nav_wide_placeholder_parent_1">
                      <Placeholder animation="glow">
                        <Placeholder xs={2} bg="light" />
                        <Placeholder xs={2} bg="light" />
                        <Placeholder xs={2} bg="light" />
                        <Placeholder xs={2} bg="light" />
                        <Placeholder xs={2} bg="light" />
                      </Placeholder>
                    </div>
                  )}
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

export default connect(SubscribePage);
