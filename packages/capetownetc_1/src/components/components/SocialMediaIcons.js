import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const SocialMediaIcons = ({ state }) => {
  return (
    <div className="topbar_socialLinks_parent_1">
      <Link
        link="#instagram"
        style={{ marginRight: "10px" }}
        className="instagram_icon_parent_2"
      >
        <FaInstagram />
      </Link>
      <Link
        link="#facebook"
        style={{ marginRight: "10px" }}
        className="facebook_icon_parent_2"
      >
        <FaFacebookF />
      </Link>
      <Link
        link="#twitter"
        style={{ marginRight: "10px" }}
        className="twitter_icon_parent_2"
      >
        <FaTwitter />
      </Link>
      <Link
        link="#tiktok"
        style={{ marginRight: "10px" }}
        className="tiktok_icon_parent_1"
      >
        <FaTiktok />
      </Link>
      <Link link="#youtube" className="youtube_icon_parent_2">
        <FaYoutube />
      </Link>
    </div>
  );
};

export default connect(SocialMediaIcons);
