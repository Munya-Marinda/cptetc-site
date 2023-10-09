import { useState, useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const SubmitYourContent = ({
  state,
  headerStickyContainerHeight,
  headerIsSticky,
}) => {
  const [isSticky, setIsSticky] = useState(false);
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
          <div style={{ width: "100%" }}>
            <div className="subscribe_parent_1">
              <iframe
                src="https://hsmcompetitions.co.za/formguru/api.php?form-id=24"
                width="100%"
                height="750px"
                frameborder="0"
              ></iframe>
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
