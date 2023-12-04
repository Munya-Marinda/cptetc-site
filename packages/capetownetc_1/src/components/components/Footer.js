import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import SocialMediaIcons from "./SocialMediaIcons";
import { FixInvalidLink } from "../js/main";
import SubcribeToNewsletter from "./SubcribeToNewsletter";

const Footer = ({ menu, _toggledleSubmitYourContentModal }) => {
  const [menuObject, setMenuObject] = useState(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [toggleSubmitYourContentModal, setToggledleSubmitYourContentModal] =
    useState(false);
  //
  //
  //
  //
  useEffect(() => {
    setMenuObject(!menu || menu === undefined || menu === null ? [] : menu);
  }, [menu]);
  //
  //
  useEffect(() => {
    const handleScroll = () => {
      let element = document.getElementById("footer_parent_id");
      let height = 0;

      if (element !== null) {
        height = element.clientHeight;
        setFooterHeight(height);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
  //
  //
  //
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

      <div
        style={{
          width: "100%",
          height: footerHeight + "px",
          position: "relative",
        }}
      >
        <div className="footer_parent_1" id="footer_parent_id">
          <div className="footer_container_1">
            <div className="footer_subToday_container_1">
              <span>Subscribe Today</span>
              <div className="subscribe_to_newsletter">
                <input name="subscribe_to_newsletter" type="checkbox" />
                <label>Newsletter</label>
              </div>
              <div className="subscribe_to_promomailer">
                <input name="subscribe_to_promomailer" type="checkbox" />
                <label>Promotional Mailer</label>
              </div>
              <div className="footer_enterEmail_container_2">
                <input type="text" placeholder="Your Email" />
                <button onClick={handleSubmitYourContentShow}>Subscribe</button>
              </div>
            </div>
            <SocialMediaIcons />
          </div>
          <div className="footer_container_2">
            <div className="footer_container_2_1">
              <div className="footer_container_2_1_links_parent">
                {menuObject !== null ? (
                  <>
                    {menuObject !== false ? (
                      <>
                        {menuObject.length !== 0 ? (
                          <>
                            {Object.keys(menuObject).map((key, index) => {
                              const menuParent = menuObject[key];
                              const title = menuParent.title;
                              const menuChildren = menuParent.children;
                              if (menuChildren.length === 0) return;
                              let url = FixInvalidLink(menuParent.url);
                              //
                              //
                              //
                              return (
                                <div
                                  className="footer_container_2_1_1"
                                  key={index}
                                >
                                  <h1 className="footer_header_1">{title}</h1>
                                  <ul className="footer_ul_1">
                                    {menuChildren !== null ? (
                                      <>
                                        {menuChildren !== false ? (
                                          <>
                                            {menuChildren.length !== 0 ? (
                                              <>
                                                {menuChildren.map(
                                                  (child, index) => {
                                                    const child_url =
                                                      FixInvalidLink(child.url);
                                                    const child_title =
                                                      child.title;
                                                    //
                                                    //
                                                    return (
                                                      <li key={index}>
                                                        <Link link={child_url}>
                                                          {child_title}
                                                        </Link>
                                                      </li>
                                                    );
                                                  }
                                                )}
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </ul>
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <div className="nav_wide_placeholder_parent_1"></div>
                )}
              </div>
              <div className="footer_habari_parent_1">
                <h1 className="footer_habari_poweredBy_text_1">Powered By</h1>
                <img
                  src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/habari-logo-2.png"
                  className="footer_habari_logo_1"
                />
              </div>
            </div>
            <div className="footer_container_2_2">
              <div id="footer-company-address">
                <strong>CAPE TOWN OFFICE: </strong> 36 Old Mill Road, Ndabeni,
                Maitland, 7405, Western Cape | Telephone: (021) 530 3300 | Fax:
                (021) 530 3333
              </div>
              <div id="footer-copyright">
                © Copyright 2023 Cape {"{town}"} Etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(Footer);
