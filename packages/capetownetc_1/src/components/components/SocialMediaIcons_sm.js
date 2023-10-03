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

const SocialMediaIcons_sm = () => {
  return (
    <div className="topbar_socialLinks_parent_2">
      <Link link="#instagram" className="social_icon_parent_1">
        <FaInstagram className="instagram_icon_1" />
      </Link>
      <Link link="#facebook" className="social_icon_parent_1">
        <FaFacebookF className="facebook_icon_1" />
      </Link>
      <Link link="#twitter" className="social_icon_parent_1">
        <FaTwitter className="twitter_icon_1" />
      </Link>
      <Link link="#tiktok" className="social_icon_parent_1">
        <FaTiktok className="tiktok_icon_1" />
      </Link>
      <Link link="#youtube" className="social_icon_parent_1">
        <FaYoutube className="youtube_icon_1" />
      </Link>
    </div>
  );
};

export default connect(SocialMediaIcons_sm);
