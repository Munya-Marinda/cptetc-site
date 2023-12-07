import React from "react";
import Link from "@frontity/components/link";

const ArticleIcons = ({
  showCamera,
  cameraLink,
  showVideo,
  videoLink,
  commentsLink,
  categoryText,
  categoryLink,
  showTopRight,
}) => {
  return (
    <>
      <div
        style={categoryText === undefined ? { justifyContent: "flex-end" } : {}}
        className="category_image_play_comments_container_1"
      >
        {categoryText === undefined ? (
          ""
        ) : (
          <Link
            link={categoryLink !== undefined ? categoryLink : "#category"}
            style={{ transform: "translateY(6px)" }}
          >
            <div className="category_container_1">
              <span>
                {categoryText !== undefined && categoryText.toUpperCase()}
              </span>
            </div>
          </Link>
        )}
        {/* {showTopRight === true && (
          <div className="image_play_comments_container_1">
            {showCamera === false ? (
              ""
            ) : (
              <Link link={cameraLink !== undefined ? cameraLink : "#images"}>
                <div className="image_play_container_1">
                  <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/camera-icon-0.svg" />
                </div>
              </Link>
            )}

            <Link link={videoLink !== undefined ? videoLink : "#video-small"}>
              <div className="image_play_container_1">
                <img src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/video-icon-0.svg" />
              </div>
            </Link>

            <Link
              link={commentsLink !== undefined ? commentsLink : "#comments"}
            >
              <div className="comments_container_1">
                <span>0</span>
              </div>
            </Link>
          </div>
        )} */}
      </div>
      {/* {showVideo === true ? (
        <Link link={videoLink !== undefined ? videoLink : "#video"}>
          <div className="playVideo_parent_1">
            <img
              src="https://ambassador.daddysdeals.co.za/features/capetownetc-assets/video-icon-0.svg"
              style={{ width: "40px" }}
            />
          </div>
        </Link>
      ) : (
        ""
      )} */}
    </>
  );
};

export default ArticleIcons;
