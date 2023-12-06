import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import DigitalStats from "../components/DigitalStats";
import SubcribeToNewsletter from "../components/SubcribeToNewsletter";

const RateCardPage = ({
  _toggledleSubmitYourContentModal,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const [toggleSubmitYourContentModal, setToggledleSubmitYourContentModal] =
    useState(false);
  //
  //
  const [isSticky, setIsSticky] = useState(false);
  const [pageObject, setPageObject] = useState(false);
  const [adPositions, setAdPositions] = useState(false);
  const countUpDuration = 7;
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
          "https://staging.capetownetc.com/wp-json/wp/v2/pages/68166"
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

    const handleScroll = () => {
      const specificElement = document.getElementById("sticky_here");
      const specificElementPosition =
        specificElement.getBoundingClientRect().bottom;
      const shouldStick = 90 > specificElementPosition;
      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //
  //
  const handleSubmitYourContentShow = () => {
    setToggledleSubmitYourContentModal(true);
    _toggledleSubmitYourContentModal(true);
  };

  const _setToggledleSubmitYourContentModal = (bool) => {
    setToggledleSubmitYourContentModal(bool);
  };
  //
  //
  return (
    <>
      <SubcribeToNewsletter
        toggleSubmitYourContentModal={toggleSubmitYourContentModal}
        _setToggledleSubmitYourContentModal={
          _setToggledleSubmitYourContentModal
        }
        _toggledleSubmitYourContentModal={_toggledleSubmitYourContentModal}
      />
      <main className="homepage_main_parent_1">
        {/* <FullWidthPost
        title={"Cape {"{town}"} Etc Showreel headline copy"}
        link={"#cape-town-etc-showreel-headline-copy"}
      /> */}

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
            <div
              className="ad_vertical_1_ zero_opacity"
              id="ad_vertical_1_id_1_position"
            ></div>
          </div>

          <div
            className="post_block_1_parent_2"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <h1 className="advertisewithus_page_header_1">Advertise With Us</h1>
            <br />
            <div className="contact_page_section_2_parent">
              <div className="contact_page_section_2_text">
                <div>
                  <p>
                    Launched in 2014, Capetownetc.com is the go-to site for
                    anyone living in or visiting the Mother City, or who is
                    simply inspired by its natural beauty, people and diversity
                    of things to do. Updated daily by a team of fun-loving
                    Capetonians who like nothing more than to sniff out the
                    hottest new burger joint in the city, hunt down the best
                    eggs Benedict on the Peninsula, or discover a new comedy act
                    at an inner-city haunt. From breaking and relevant news to
                    informative reviews covering everything from restaurants,
                    bars and wine estates to family activities, entertainment
                    and nightlife, Capetownetc.com promises something for
                    everyone.
                    <br />
                    <br />
                    The Cape Town Etc community is active and engaged on
                    Facebook (over 95 000 followers), with a growing base of
                    followers on Twitter and Instagram.
                  </p>
                  <br />
                  <h3
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    Advertising Rates
                  </h3>
                  <p>
                    We offer six print ad sizes/rates, and six different digital
                    site banner sizes, at a variety of budget choices, to make
                    advertising easier and affordable. Most standard web banners
                    are supported including 728x90 size.
                    <br />
                    <br />
                    We also offer a series of banner and social/content
                    packages. We custom build social campaigns, magazine
                    inserts, competitions, events, and branded videos for our
                    advertisers as part of their programs.
                  </p>
                </div>
              </div>
              <div className="contact_page_section_2_container_2">
                <video
                  src={
                    "https://ambassador.daddysdeals.co.za/features/capetownetc-assets/CTE-Website-Video.mp4"
                  }
                  controls
                  className="contact_page_video_1"
                />
              </div>
            </div>

            <DigitalStats />

            <div
              style={{
                width: "100%",
              }}
            >
              <h6
                style={{
                  fontWeight: "bold",
                  fontFamily: '"Roboto", Arial',
                }}
              >
                <b>To advertise in print or online:</b>
              </h6>
              <p>
                Please contact Ryan Nicolle
                <br />
                021 416 0141 or ryan@habarimedia.co.za
              </p>
            </div>

            <div
              style={{
                width: "100%",
                marginTop: "30px",
              }}
            >
              <button
                style={{
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px 10px",
                  backgroundColor: "var(--pinkish_color)",
                  border: "0px",
                }}
                onClick={handleSubmitYourContentShow}
              >
                Subscribe To Our Newsletter
              </button>
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
            <div
              className="ad_vertical_1_ zero_opacity"
              id="ad_vertical_1_id_2_position"
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default connect(RateCardPage);
