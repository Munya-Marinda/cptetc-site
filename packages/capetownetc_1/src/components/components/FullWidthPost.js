import React from "react";
import Link from "@frontity/components/link";
import CategoryDateText from "./CategoryDateText";
import { FaPlayCircle } from "react-icons/fa";

const FullWidthPost = ({ title, link }) => {
  return (
    <div className="full_width_post_parent_1">
      <div className="full_width_post_container_1">
        <div className="full_width_post_text_parent_1">
          <div className="full_width_post_text_container_1">
            <Link link={link}>
              <h1>{title}</h1>
            </Link>
            <CategoryDateText
              textColor={"white"}
              categoryText={"CATEGORY NAME"}
              dateText={"5 NOVEMBER 2023"}
            />
          </div>
        </div>
        <Link link="#playVideo">
          <div className="playVideo_parent_1">
            <FaPlayCircle />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FullWidthPost;
