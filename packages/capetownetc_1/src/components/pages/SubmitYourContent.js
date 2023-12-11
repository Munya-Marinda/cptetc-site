import { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import SidebarListingWithImages from "../components/sidebars/SidebarListingWithImages";

const SubmitYourContent = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  const [adPositions, setAdPositions] = useState(false);
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
          <div className="post_block_1_parent_2">
            <div className="post_block_1_container_1">
              <div
                className="post_block_2_header_container_1"
                style={{
                  width: "100%",
                  padding: "0px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  transform: "translateY(-22px)",
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
                    width: "100%",
                    fontSize: "20px",
                    margin: "30px 0px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Have you got a story to tell? Are you an aspiring content
                  creator or influencer? Keen to share your craft?
                </p>

                <p
                  style={{
                    width: "100%",
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
                    width: "100%",
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
                    marginBottom: "0px",
                  }}
                >
                  Please complete the form below to submit your content
                </p>
                <span
                  style={{
                    color: "red",
                    width: "100%",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  * Required
                </span>

                {/* <div  
                  // style={{
                  //   width: "100%",
                  // }}
                  >
                  <iframe
                    src="https://hsmcompetitions.co.za/formguru/api.php?form-id=24"
                    width="100%"
                    height="750px"
                    frameborder="0"
                  ></iframe>
                </div> */}

                <form>
                  <div
                    className="submitYourContent_form_group_1"
                    style={{ marginBottom: "20px", marginTop: "40px" }}
                  >
                    <label className="submitYourContent_form_text_1">
                      Your Title
                      <span> *</span>
                    </label>
                    <input
                      className="submitYourContent_form_text_input_1"
                      type="text"
                      name="your_title"
                    />
                  </div>
                  <div
                    className="submitYourContent_form_group_2"
                    style={{ marginBottom: "20px" }}
                  >
                    <label className="submitYourContent_form_text_1">
                      Name <span> *</span>
                    </label>
                    <div className="submitYourContent_form_group_2_1">
                      <div>
                        <input
                          className="submitYourContent_form_text_input_2"
                          type="text"
                          name="first_name"
                          placeholder="First"
                        />
                      </div>
                      <div>
                        <input
                          className="submitYourContent_form_text_input_2"
                          type="text"
                          name="surname"
                          placeholder="Surname"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="submitYourContent_form_group_1"
                    style={{ marginBottom: "20px" }}
                  >
                    <label className="submitYourContent_form_text_1">
                      Daytime Telephone Number <span> *</span>
                    </label>
                    <input
                      className="submitYourContent_form_text_input_1"
                      type="text"
                      name="telephone_number"
                    />
                  </div>
                  <div
                    className="submitYourContent_form_group_1"
                    style={{ marginBottom: "20px" }}
                  >
                    <label className="submitYourContent_form_text_1">
                      Email <span> *</span>
                    </label>
                    <div className="submitYourContent_form_group_2_1">
                      <div>
                        <input
                          className="submitYourContent_form_text_input_2"
                          type="text"
                          name="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div>
                        <input
                          className="submitYourContent_form_text_input_2"
                          type="text"
                          name="confirm_email"
                          placeholder="Confirm Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="submitYourContent_form_group_2_1"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="submitYourContent_form_group_1">
                      <label className="submitYourContent_form_text_1">
                        Province of Residence <span> *</span>
                      </label>
                      <input
                        className="submitYourContent_form_text_input_2"
                        type="text"
                        name="email"
                      />
                    </div>
                    <div className="submitYourContent_form_group_1">
                      <label className="submitYourContent_form_text_1">
                        Type Of Content <span> *</span>
                      </label>
                      <input
                        className="submitYourContent_form_text_input_2"
                        type="text"
                        name="type_of_content"
                        placeholder="Select type of content..."
                      />
                    </div>
                  </div>
                  <div
                    className="submitYourContent_form_group_1"
                    style={{
                      marginBottom: "40px",
                    }}
                  >
                    <label className="submitYourContent_form_text_1">
                      What story would you like to share with us?{" "}
                      <span> *</span>
                    </label>
                    <textarea rows={10} />
                  </div>

                  <div>
                    <p
                      style={{
                        width: "100%",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      TERMS AND CONDITIONS
                    </p>
                    <p
                      style={{
                        width: "100%",
                        fontSize: "15px",
                        fontFamily: "Roboto",
                      }}
                    >
                      By clicking ''I Accept' below, I accept the terms set out
                      in the Content Assignment Agreement and hereby irrevocably
                      assign to Cape {"{town}"} Etc absolutely and with full
                      title guarantee, all intellectual property rights and
                      interest and all other rights in and to the Content
                      (regardless of the format such Content is submitted in by
                      me). Furthermore, I hereby confirm and agree that from the
                      date I accept these terms and conditions and those further
                      specified in the Content Assignment Agreement, Cape{" "}
                      {"{town}"} Etc shall be exclusively entitled to exploit
                      the Content in any manner or context, throughout the
                      world, on any and all media whether now known or hereafter
                      invented and in perpetuity. I also confirm that any third
                      party or person who is featured in the Content has agreed
                      to such terms and conditions. Submit I am the sole rights
                      holder of the Content, I am over 18 years old and I accept
                      the above Terms & Conditions OR I am the parent or legal
                      guardian of the sole rights holder of the Content who is
                      under 18 years old and I accept the above Terms &
                      Conditions on the right's holder's behalf as agent or
                      attorney, as if I was the rights holder for these
                      purposes.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "30px",
                      marginBottom: "10px",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        I am the sole rights holder of the Content, I am over 18
                        years old and I accept the above Terms & Conditions OR I
                        am the parent or legal guardian of the sole rights
                        holder of the Content who is under 18 years old and I
                        accept the above Terms & Conditions on the right's
                        holder's behalf as agent or attorney, as if I was the
                        rights holder for these purposes.
                      </p>
                    </div>
                  </div>
                  {/* <div className="submitYourContent_form_group_3">
                    <label
                      className="submitYourContent_form_text_1"
                      style={{ textAlign: "center" }}
                    >
                      Sign Your Name <span> *</span>
                    </label>
                    <input
                      type="text"
                      name="sign_your_name"
                      className="submitYourContent_form_text_input_1"
                    />
                  </div> */}
                  <div
                    class="submitYourContent_form_group_3"
                    style={{
                      marginTop: "30px",
                    }}
                  >
                    <button className="submitYourContent_form_button_1">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
              <div className="post_block_2_right_bar_parent_1">
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

                <SidebarListingWithImages
                  title="Top Guides"
                  link={"/things-to-do/"}
                  postsSet={postsSet1}
                  WP_SiteUrl={WP_SiteUrl}
                  postsSet_categoryTitle={"THINGS TO DO"}
                  postsSet_categoryID={postsSet1_categoryID}
                />

                <div className="ad_square_1">
                  <p>[AD]</p>
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

export default connect(SubmitYourContent);
