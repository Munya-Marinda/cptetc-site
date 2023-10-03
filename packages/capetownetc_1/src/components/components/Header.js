import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "frontity";
import SocialMediaIcons from "./SocialMediaIcons";
import Switch from "@frontity/components/switch";
import Link from "@frontity/components/link";
import { FaBars, FaCloud, FaSearch } from "react-icons/fa";
import { Carousel, Placeholder } from "react-bootstrap";
import { CustomWPRestServicePostObject, FixInvalidLink } from "../js/main";
import CategoryDateText from "./CategoryDateText";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import SocialMediaIcons_sm from "./SocialMediaIcons_sm";
import SubmitYourContentForm from "./SubmitYourContentForm";
import fetchMenu from "../handlers/handleMenu";

const CustomPrevButton = ({ onClick }) => {
  return <div onClick={onClick} className="header_prev_button" />;
};

const CustomNextButton = ({ onClick }) => {
  return <div onClick={onClick} className="header_next_button" />;
};

const Header = ({
  menu,
  state,
  formOpen,
  updateHeaderData,
  change_headerIsSticky,
  change_headerStickyContainerHeight,
}) => {
  const WP_SiteUrl = state.source.url;
  const [toggleSubmitYourContentModal, setToggledleSubmitYourContentModal] =
    useState(false);

  const maxCarouselItems = 4;
  const postsSet1_categoryID = 3;
  const [postsSet1, setPostsSet1] = useState(null);
  const [postsChuncksSet1, setPostsChuncksSet1] = useState(null);
  const [menuChildren, setmenuChildren] = useState(null);
  const [menuParentTitle, setmenuParentTitle] = useState(null);
  const [menuParentUrl, setmenuParentUrl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyContainerHeight, setStickyContainerHeight] = useState(0);
  const [menuObject, setMenuObject] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  //
  const data = state.source.get(state.router.link);

  useEffect(() => {
    updateNavBar(null);
  }, [data.route]);

  useEffect(() => {
    if (menu === null || menu === undefined) {
      const fetchMenuData = async () => {
        try {
          const newMenu = await fetchMenu(state);
          setMenuObject(
            !newMenu || newMenu === undefined || newMenu === null ? [] : newMenu
          );
          updateNavBar(
            !newMenu || newMenu === undefined || newMenu === null ? [] : newMenu
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchMenuData();
    } else {
      setMenuObject(!menu || menu === undefined || menu === null ? [] : menu);
      updateNavBar(!menu || menu === undefined || menu === null ? [] : menu);
    }
  }, [menu]);

  useEffect(() => {
    //
    //
    const fetch1Posts = async () => {
      try {
        const url =
          WP_SiteUrl +
          "/wp-json/wp/v2/posts?categories=" +
          postsSet1_categoryID +
          "&per_page=100&orderby=date&order=desc&_embed";
        const response = await fetch(url);
        if (!response.ok) {
          setPostsSet1(false);
          return;
        }
        const postsData = await response.json();

        // Create an array to hold the chunks of posts
        const chunkSize = 4;
        const postChunks = [];
        for (let i = 0; i < postsData.length; i += chunkSize) {
          postChunks.push(postsData.slice(i, i + chunkSize));
        }
        setPostsChuncksSet1(postChunks);
        setPostsSet1(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPostsSet1(false);
      }
    };
    fetch1Posts();
    //
  }, []);

  const updateNavBar = (menu) => {
    const newRouteParent = data.route.split("/")[1];
    let categoryTitle = "";
    let categoryUrl = "";
    let categoryID = null;
    let parentChildren = null;
    if (newRouteParent !== "") {
      categoryTitle =
        newRouteParent[0].toUpperCase() +
        newRouteParent.substring(1).toLowerCase();
      let tempMenu = null;
      if (menuObject === null) {
        tempMenu = menu;
      } else {
        tempMenu = menuObject;
      }
      if (tempMenu !== null) {
        Object.keys(tempMenu).forEach((key) => {
          if (tempMenu[key].url === "/" + newRouteParent + "/") {
            setmenuChildren(tempMenu[key].children);
            setmenuParentTitle(tempMenu[key].title);
            setmenuParentUrl(tempMenu[key].url);
            categoryID = tempMenu[key].id;
            if (tempMenu[key].children.length > 0) {
              tempMenu[key].children.forEach((child) => {
                if (child.url === data.route) {
                  categoryTitle = child.title;
                  categoryUrl = child.url;
                  categoryID = child.id;
                }
              });
            }
            parentChildren = tempMenu[key].children;
          }
        });
      }
    } else {
      setmenuChildren([]);
      setmenuParentTitle("Home");
      categoryTitle = "Home";
      categoryUrl = "/";
      parentChildren = [];
    }
    updateHeaderData({
      title: categoryTitle,
      url: categoryUrl,
      children: parentChildren,
      id: categoryID,
    });
  };
  //
  //
  const handleSubmitYourContentClose = () =>
    setToggledleSubmitYourContentModal(false);
  const handleSubmitYourContentShow = () =>
    setToggledleSubmitYourContentModal(true);
  //
  //
  useEffect(() => {
    const handleScroll = () => {
      const specificElement = document.getElementById("ad_make_sticky");
      const specificElementPosition =
        specificElement.getBoundingClientRect().bottom + 100;
      const shouldStick = window.scrollY > specificElementPosition;
      changeHeight();
      setIsSticky(shouldStick);
      change_headerIsSticky(shouldStick);
    };

    const changeHeight = () => {
      let element = document.getElementById(
        "header_carousel_header_parent_1_id"
      );
      let height = 0;

      if (element !== null) {
        height = element.clientHeight;
      }

      setStickyContainerHeight(height);
      change_headerStickyContainerHeight(height);
    };

    changeHeight();
    window.addEventListener("scroll", handleScroll);

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
  //
  //
  //
  //
  //
  return (
    <>
      <Modal
        show={toggleSubmitYourContentModal}
        onHide={handleSubmitYourContentClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="submitYourContent_modal_header_1">
              Submit Your Content
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ maxWidth: "600px" }}>
            <p
              style={{
                padding: "10px 15px",
                backgroundColor: "#f1f1f1",
                margin: "0px",
              }}
            >
              By clicking 'Submit' below, I am the sole rights holder of the
              Content, I am over 18 years old and I accept the above Terms &
              Conditions OR I am the parent or legal guardian of the sole rights
              holder of the Content who is under 18 years old and I accept the
              above Terms & Conditions on the right's holder's behalf as agent
              or attorney, as if I was the rights holder for these purposes.
            </p>
            <SubmitYourContentForm />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            className="submitYourContent_parent_1"
            onClick={handleSubmitYourContentClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <div className="ad_horizontal_parent_1">
        <div className="ad_horizontal_1">[AD]</div>
      </div>

      <div className="topbar_parent_1">
        <div className="topbar_container_1">
          <div className="topbar_date_weather_parent_1">
            <div className="topbar_date_parent_1">
              <span>Monday, July 24th, 2023</span>
            </div>
            <div className="topbar_weather_parent_1">
              <span>
                <FaCloud /> 18°
              </span>
            </div>
          </div>
          <div className="topbar_socialLinks_submit_parent_1">
            <SocialMediaIcons />
            <button
              onClick={handleSubmitYourContentShow}
              className="submitYourContent_parent_1"
            >
              SUBMIT YOUR CONTENT
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="nav_mobile_header_parent_1">
        <Link link="/">
          <img
            className="nav_mobile_logo_img_1"
            src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/cape-logo-big-1.png"
          />
        </Link>
        <SocialMediaIcons_sm />
        <span
          className="nav_mobile_toggle_1"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <FaBars />
        </span>
      </div>
      {menuObject !== null ? (
        <>
          {menuObject !== false ? (
            <>
              {menuObject.length !== 0 ? (
                <>
                  <div
                    className={
                      "nav_mobile_parent_1" +
                      (showMobileMenu ? " showMobileMenu" : " hideMobileMenu")
                    }
                  >
                    <Accordion defaultActiveKey="0">
                      {Object.keys(menuObject).map((key, index) => {
                        const menuParent = menuObject[key];
                        const title = menuParent.title;
                        let url = FixInvalidLink(menuParent.url);
                        const pagesWithChildrenBool =
                          title === "Home" ||
                          title === "Advertise" ||
                          title === "Subscribe" ||
                          title === "Vouchers";
                        //
                        //
                        //
                        return (
                          <div key={index} className="xxxxxxxx">
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header style={{ padding: "0px" }}>
                                {pagesWithChildrenBool ? (
                                  <Link
                                    link={url}
                                    onClick={() => {
                                      setShowMobileMenu(false);
                                    }}
                                  >
                                    <span className="nav_wide_links_span_1">
                                      {title}
                                    </span>
                                  </Link>
                                ) : (
                                  <span className="nav_wide_links_span_1">
                                    {title}
                                  </span>
                                )}
                              </Accordion.Header>
                              {!pagesWithChildrenBool && (
                                <Accordion.Body
                                  onClick={() => {
                                    setShowMobileMenu(false);
                                  }}
                                >
                                  {!pagesWithChildrenBool && (
                                    <Link link={menuParentUrl}>
                                      <div className="nav_mobile_sub_menu_parent_1">
                                        <span
                                          className="nav_wide_links_span_1"
                                          style={{ opacity: 0.8 }}
                                        >
                                          Trending
                                        </span>
                                      </div>
                                    </Link>
                                  )}

                                  {menuParent.children !== null ? (
                                    <>
                                      {menuParent.children !== false ? (
                                        <>
                                          {menuParent.children.length !== 0 ? (
                                            <>
                                              {menuParent.children.map(
                                                (child, index) => {
                                                  const child_url =
                                                    FixInvalidLink(child.url);
                                                  //
                                                  //
                                                  return (
                                                    <Link
                                                      key={index}
                                                      link={child_url}
                                                    >
                                                      <div className="nav_mobile_sub_menu_parent_1">
                                                        <span
                                                          className="nav_wide_links_span_1"
                                                          style={{
                                                            opacity: 0.8,
                                                          }}
                                                        >
                                                          {child.title}
                                                        </span>
                                                      </div>
                                                    </Link>
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
                                </Accordion.Body>
                              )}
                            </Accordion.Item>
                          </div>
                        );
                      })}
                    </Accordion>
                  </div>
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

      {/* DESKTOP */}
      <div className="nav_parent_1">
        <div className="nav_container_1">
          <div className="nav_logo_parent_1">
            <Link link="/">
              <img
                className="nav_logo_img_1"
                src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/cape-logo-big-1.png"
              />
            </Link>
          </div>
          <div className="nav_wide_links_parent_1">
            {menuObject !== null ? (
              <>
                {menuObject !== false ? (
                  <>
                    {menuObject.length !== 0 ? (
                      <>
                        {Object.keys(menuObject).map((key, index) => {
                          const menuParent = menuObject[key];
                          const title = menuParent.title;
                          let url = FixInvalidLink(menuParent.url);
                          const isActiveParentLink = menuParentTitle === title;
                          //
                          //
                          //
                          return (
                            <Link
                              key={index}
                              link={url}
                              onClick={() => {
                                updateNavBar(null);
                              }}
                            >
                              <div className="nav_wide_links_container_1">
                                <span className="nav_wide_links_span_1">
                                  {title}
                                </span>
                                {isActiveParentLink && (
                                  <div className="nav_wide_links_active_1"></div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </>
                    ) : (
                      <div className="spinner_parent_0">
                        {/* <h1>NO NEW POSTS FOUND</h1> */}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_0">
                    {/* <h1>FAILED TO FETCH MENU</h1> */}
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
          <div className="nav_search_container_1">
            <FaSearch className="youtube_icon_1" />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <Switch>
        <div
          when={
            data.route !== "/" &&
            data.route !== "/vouchers/" &&
            data.route !== "/subscribe/"
          }
          className="wide_dropdown_nav_parent_1"
        >
          <div className="wide_dropdown_nav_container_1">
            <div className="wide_dropdown_nav_header_1">{menuParentTitle}</div>
            <div className="wide_dropdown_links_parent_1">
              {menuChildren !== null ? (
                <>
                  {menuChildren !== false ? (
                    <>
                      {menuChildren.length !== 0 ? (
                        <>
                          {menuParentTitle !== "Advertise" && (
                            <Link link={menuParentUrl}>
                              <div className="wide_dropdown_links_container_1">
                                <span className="wide_dropdown_links_span_1">
                                  Trending
                                </span>
                                {menuParentUrl === data.route && (
                                  <div className="nav_wide_links_active_1"></div>
                                )}
                              </div>
                            </Link>
                          )}
                          {menuChildren.map((child, index) => {
                            const child_url = FixInvalidLink(child.url);
                            //
                            //
                            return (
                              <Link key={index} link={child_url}>
                                <div className="wide_dropdown_links_container_1">
                                  <span className="wide_dropdown_links_span_1">
                                    {child.title}
                                  </span>
                                  {child_url === data.route && (
                                    <div className="nav_wide_links_active_1"></div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </>
                      ) : (
                        <div className="spinner_parent_0"></div>
                      )}
                    </>
                  ) : (
                    <div className="spinner_parent_0"></div>
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
      </Switch>
      {/* CAROUSEL DESKTOP */}
      <Switch>
        <div
          when={data.route !== "/vouchers/" && !formOpen}
          className="header_carousel_header_parent_1"
          id="header_carousel_header_parent_1_id"
          style={
            isSticky
              ? {
                  position: "fixed",
                  top: "0",
                }
              : {}
          }
        >
          <div className="header_carousel_header_parent_2">
            {postsSet1 !== null ? (
              <>
                {postsSet1 !== false ? (
                  <>
                    {postsSet1.length !== 0 ? (
                      <Carousel
                        interval={null}
                        indicators={false}
                        prevIcon={<CustomPrevButton />}
                        nextIcon={<CustomNextButton />}
                      >
                        {postsChuncksSet1
                          .slice(0, maxCarouselItems)
                          .map((postChunk, index1) => (
                            <Carousel.Item key={index1} className="">
                              <div className="header_carousel_item_parent_1">
                                {postChunk.map((post, index2) => {
                                  const customPost =
                                    CustomWPRestServicePostObject(
                                      WP_SiteUrl,
                                      post,
                                      postsSet1_categoryID
                                    );
                                  const customPost_slug = FixInvalidLink(
                                    customPost.slug
                                  );
                                  //
                                  //
                                  //
                                  //
                                  return (
                                    <div
                                      key={index2}
                                      className="header_carousel_item_container_1"
                                    >
                                      <img
                                        alt="Image"
                                        className="header_carousel_image_1"
                                        src={customPost.imgUrl}
                                      />
                                      <div
                                        key={index2}
                                        className="header_carousel_text_parent_1"
                                      >
                                        <CategoryDateText
                                          dateText={customPost.date}
                                          categoryText={customPost.categoryText}
                                        />
                                        <div className="header_carousel_parent_1">
                                          <Link
                                            link={customPost_slug}
                                            className="header_carousel_header_1"
                                          >
                                            <h6
                                              dangerouslySetInnerHTML={
                                                customPost.title
                                              }
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </Carousel.Item>
                          ))}
                      </Carousel>
                    ) : (
                      <div className="spinner_parent_0">
                        <></>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="spinner_parent_0">
                    <></>
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
      </Switch>

      <div
        id="ad_make_sticky"
        style={
          isSticky
            ? { height: stickyContainerHeight + "px" }
            : { height: "0px" }
        }
      ></div>
    </>
  );
};

export default connect(Header);
