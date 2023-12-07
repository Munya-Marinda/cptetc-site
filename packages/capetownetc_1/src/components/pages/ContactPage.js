import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { PiChats } from "react-icons/pi";
import {
  FaFacebookF,
  FaImages,
  FaInstagram,
  FaRegLightbulb,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CountUp from "react-countup";
import FullWidthPost from "../components/FullWidthPost";
import DigitalStats from "../components/DigitalStats";

const ContactPage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
  const countUpDuration = 7;
  //
  //
  const [isSticky, setIsSticky] = useState(false);
  const [pageObject, setPageObject] = useState(false);
  const [adPositions, setAdPositions] = useState(false);
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
          "https://staging.capetownetc.com/wp-json/wp/v2/pages/7263"
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
  //
  //
  return (
    <>
      {/* <FullWidthPost
        title={"Cape Town Etc Showreel headline copy"}
        link={"#cape-town-etc-showreel-headline-copy"}
      /> */}
      <main className="homepage_main_parent_1">
        <div id="sticky_here"></div>

        <div className="post_block_1_parent_1 content_spacing_bottom_1 content_spacing_top_2 padding_on_mobile">
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

          <div className="post_block_1_parent_2">
            <div className="">
              <h1 className="contact_page_header_1">Contact Us</h1>

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

        <div className="gray_background width100 padding_on_mobile">
          <div className="post_block_1_parent_1 content_spacing_bottom_1 content_spacing_top_1">
            <div className="ad_vertical_1_parent"></div>
            <div className="post_block_1_parent_2">
              <h1 className="contact_page_header_1">
                More Than Just A Magazine...
              </h1>

              <Link link="/">
                <img
                  className="contact_page_habarimedia_logo_1"
                  src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/habari-logo-1.png"
                />
              </Link>

              <p className="content_spacing_bottom_2 contact_page_text_1">
                Cape {"{town}"} Etc is proudly owned and managed by Habari
                Media.
              </p>

              <div className="contact_page_section_2_parent">
                <div className="contact_page_section_2_container_1">
                  <h1 className="contact_page_header_2">
                    Home to Africa's Top Digital and Print Titles.
                  </h1>
                  <div className="contact_page_stats_parent">
                    <div className="contact_page_stat_container">
                      {/* <h1>+20</h1> */}
                      <CountUp
                        start={0}
                        end={20}
                        delay={0}
                        duration={countUpDuration}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +<span ref={countUpRef} />
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Brands</p>
                    </div>
                    <div className="contact_page_stat_container">
                      {/* <h1>+120 mil</h1> */}
                      <CountUp
                        start={0}
                        end={120}
                        delay={0}
                        duration={countUpDuration}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +<span ref={countUpRef} /> mil
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Website Views</p>
                    </div>
                    <div className="contact_page_stat_container">
                      {/* <h1>+4 mil</h1> */}
                      <CountUp start={0} end={4} delay={0} duration={10}>
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +<span ref={countUpRef} /> mil
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Social Followers</p>
                    </div>
                    <div className="contact_page_stat_container">
                      {/* <h1>+840 k</h1> */}
                      <CountUp
                        start={0}
                        end={840}
                        delay={0}
                        duration={countUpDuration}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +<span ref={countUpRef} />k
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Email Subscribers</p>
                    </div>
                    <div className="contact_page_stat_container">
                      {/* <h1>+1.2 mil</h1> */}
                      <CountUp start={0} end={2} delay={0} duration={10}>
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +1.
                              <span ref={countUpRef} /> mil
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Print Run</p>
                    </div>
                    <div className="contact_page_stat_container">
                      {/* <h1>+225</h1> */}
                      <CountUp
                        start={0}
                        end={225}
                        delay={0}
                        duration={countUpDuration}
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1>
                              +<span ref={countUpRef} />
                            </h1>
                          </div>
                        )}
                      </CountUp>
                      <p>Staff</p>
                    </div>
                  </div>
                  <p className="contact_page_small_text">
                    <i>*per annum</i>
                  </p>
                </div>

                <div className="contact_page_section_2_container_2">
                  <video
                    src={
                      "https://ambassador.daddysdeals.co.za/features/capetownetc-assets/CTE-Website-Video.mp4"
                    }
                    className="contact_page_video_1"
                    controls
                  />
                </div>
              </div>

              <h1 className="contact_page_header_2 content_spacing_top_1">
                Our Brands
              </h1>

              <p className="contact_page_paragraph_1">
                These brands are at the core of our portfolio. Their brand power
                in South Africa has been grown and developed by Habari Media,
                turning them into widely sought after titles with a strong
                digital and print performance in the South African market.
              </p>

              <div className="contact_page_ourBrandsLogoGroup_parent">
                {[
                  "africandecisions_1.png",
                  "african_insider_1.png",
                  "auecho_1.png",
                  "bona_1.png",
                  "businessdayearth_1.png",
                  "business_day_empowerment_1.png",
                  "capetownetc_1.png",
                  "carmag_1.png",
                  "compleat_golfer_1.png",
                  "foodandhome_1.png",
                  "gardenandhome_1.png",
                  "getaway_1.png",
                  "jse_magazine_1.png",
                  "jse_supplement_1.png",
                  "leisure_wheels_1.png",
                  "rooiose_1.png",
                  "sacricketmag_1.png",
                  "sasoccer_1.png",
                  "sa_rugby_mag_1.png",
                  "weddingmag_1.png",
                  "womanandhome_1.png",
                ].map((imageName, index) => (
                  <div
                    key={index}
                    className="contact_page_ourBrandsLogo_container"
                  >
                    <img
                      src={
                        "https://ambassador.daddysdeals.co.za/features/capetownetc-assets/brand-logos-0/" +
                        imageName
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="contact_page_magPreview_parent_1">
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
                  }}
                />
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
                  }}
                />
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
                  }}
                />
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1554302384-05e2ba3e2054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
                  }}
                />
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1598043596827-fd992a2f137a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80')",
                  }}
                />
                <div
                  className="contact_page_magPreview_image_1"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
                  }}
                />
              </div>
            </div>
            <div className="ad_vertical_1_parent"></div>
          </div>
        </div>

        <div className="post_block_1_parent_1 content_spacing_bottom_1 content_spacing_top_1 padding_on_mobile">
          <div className="ad_vertical_1_parent"></div>
          <div className="post_block_1_parent_2">
            <h1 className="contact_page_header_2">Get Connected.</h1>

            <hr className="contact_page_hr_1" />

            <p>
              We welcome you to connect with us for more information about any
              of our products or services.
            </p>

            <div className="contact_page_lets_talk_parent_1">
              <div className="contact_page_lets_talk_container_1">
                <span>
                  <img
                    src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/advertise-page-icon-1.png"
                    alt="Your Project"
                  />
                </span>
                <div>
                  <h6>Let's Talk About Your Project</h6>
                  <p>
                    Get in touch with one of our sales executives who can best
                    assist you in placing your branded content amongst our
                    popular South African titles.
                  </p>
                </div>
              </div>

              <div className="contact_page_lets_talk_container_1">
                <span>
                  <img
                    src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/advertise-page-icon-2.png"
                    alt="Your Idea"
                  />
                </span>
                <div>
                  <h6>Let's Talk About Your Idea</h6>
                  <p>
                    Our marketing team are excited to hear your ideas and work
                    with you on bringing them to life in a 360 campaign geared
                    at reaching your targeted audience.
                  </p>
                </div>
              </div>

              <div className="contact_page_lets_talk_container_1">
                <span>
                  <img
                    src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/advertise-page-icon-3.png"
                    alt="Your Content"
                  />
                </span>
                <div>
                  <h6>Let's Talk About Your Content</h6>
                  <p>
                    Your content creation starts with us. Our talented teams
                    will create, execute and tell your story.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="contact_page_socialMedia_parent_1">
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebookF />
              </span>
            </div>

            <h1 className="contact_page_header_2 color_gray_darker">
              CALL: +27 (0)21 416 0141
            </h1>

            <h1 className="contact_page_header_3 color_gray_darker">
              info@habarimedia.com
            </h1>
          </div>
          <div className="ad_vertical_1_parent"></div>
        </div>
      </main>
    </>
  );
};

export default connect(ContactPage);
