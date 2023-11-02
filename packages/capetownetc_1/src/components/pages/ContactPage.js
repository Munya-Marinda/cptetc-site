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

const ContactPage = ({
  state,
  headerIsSticky,
  headerStickyContainerHeight,
}) => {
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
    <main className="homepage_main_parent_1">
      {/* <FullWidthPost
        title={"Cape Town Etc Showreel headline copy"}
        link={"#cape-town-etc-showreel-headline-copy"}
      /> */}

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
            <h1 className="contact_page_header_1">Partner With Us</h1>
            <p className="contact_page_text_1">
              From news to things to do, Cape {"{town}"} Etc creates world-class
              content that's delivered to our loyal readers, viewers and
              community in a way that's tailored towards making an impact
            </p>
            <div className="contact_page_stats_parent content_spacing_bottom_2">
              <div className="contact_page_stat_container">
                <h1>+99 k</h1>
                <p>Readership</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+99 mil</h1>
                <p>Combined Reach</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+800 k</h1>
                <p>Digital Unique Browsers</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+182 k</h1>
                <p>Facebook</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+31 k</h1>
                <p>Twitter</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+113 k</h1>
                <p>Instagram</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+99 k</h1>
                <p>Webletter Subscribers</p>
              </div>
              <div className="contact_page_stat_container">
                <h1>+30 k</h1>
                <p>Promo Mailer Subscribers</p>
              </div>
            </div>

            {pageObject && pageObject !== undefined && pageObject !== null && (
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

            <p className="content_spacing_bottom_2">
              Cape {"{town}"} Etc is proudly owned and managed by Habari Media.
            </p>

            <div className="contact_page_section_2_parent">
              <div className="contact_page_section_2_container_1">
                <h1 className="contact_page_header_2">
                  Home to Africa's Top Digital and Print Titles.
                </h1>
                <div className="contact_page_stats_parent">
                  <div className="contact_page_stat_container">
                    <h1>+20</h1>
                    <p>Brands</p>
                  </div>
                  <div className="contact_page_stat_container">
                    <h1>+120 mil</h1>
                    <p>Website Views</p>
                  </div>
                  <div className="contact_page_stat_container">
                    <h1>+4 mil</h1>
                    <p>Social Followers</p>
                  </div>
                  <div className="contact_page_stat_container">
                    <h1>+840 k</h1>
                    <p>Email Subscribers</p>
                  </div>
                  <div className="contact_page_stat_container">
                    <h1>+1.2 mil</h1>
                    <p>Print Run</p>
                  </div>
                  <div className="contact_page_stat_container">
                    <h1>+225</h1>
                    <p>Staff</p>
                  </div>
                </div>
                <p className="contact_page_small_text">
                  <i>*per annum</i>
                </p>
              </div>

              <div className="contact_page_section_2_container_2">
                <Link link="https:www.youtube.com/" target="_blank">
                  <div className="contact_page_section_2_video_1"></div>
                </Link>
              </div>
            </div>

            <h1 className="contact_page_header_2">Our Brands</h1>

            <p className="contact_page_paragraph_1">
              These brands are at the core of our portfolio. Their brand power
              in South Africa has been grown and developed by Habari Media,
              turning them into widely sought after titles with a strong digital
              and print performance in the South African market.
            </p>

            <div className="contact_page_ourBrandsLogoGroup_parent">
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
              <div className="contact_page_ourBrandsLogo_container">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/logo-1.png" />
              </div>
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
        </div>
      </div>

      <div className="post_block_1_parent_1 content_spacing_bottom_1 content_spacing_top_1 padding_on_mobile">
        <div className="post_block_1_parent_2">
          <h1 className="contact_page_header_2">Get Connected.</h1>

          <hr className="contact_page_hr_1" />

          <p>
            We welcome you to connect with us for more information about any of
            our products or services.
          </p>

          <div className="contact_page_lets_talk_parent_1">
            <div className="contact_page_lets_talk_container_1">
              <span>
                <PiChats />
              </span>
              <div>
                <h6>Let's Talk About Your Project</h6>
                <p>
                  Get in touch with one of our sales executives who can best
                  assist you in placing your branded content amongst our popular
                  South African titles.
                </p>
              </div>
            </div>

            <div className="contact_page_lets_talk_container_1">
              <span>
                <FaRegLightbulb />
              </span>
              <div>
                <h6>Let's Talk About Your Idea</h6>
                <p>
                  Our marketing team are excited to hear your ideas and work
                  with you on bringing them to life in a 360 campaign geared at
                  reaching your targeted audience.
                </p>
              </div>
            </div>

            <div className="contact_page_lets_talk_container_1">
              <span>
                <FaImages />
              </span>
              <div>
                <h6>Let's Talk About Your Content</h6>
                <p>
                  Your content creation starts with us. Our talented teams will
                  create, execute and tell your story.{" "}
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
      </div>
    </main>
  );
};

export default connect(ContactPage);
