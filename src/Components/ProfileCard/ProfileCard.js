import React from "react";
import { Card, Avatar } from "@material-ui/core";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getSlugURL } from "../../helper";

import "./ProfileCard.css";

function ProfileCard({ featuredPosts }) {
  const renderFeaturedPosts = () => {
    return featuredPosts.map((fp) => (
      <Link
        key={fp.id}
        className="profileBlogPost"
        to={{
          pathname: `/${getSlugURL(fp.title)}`,
          state: {
            id: fp.id,
          },
        }}
      >
        {fp.title}
      </Link>
    ));
  };

  return (
    <div>
      <Card className="profileCard" variant="outlined">
        <div className="avatarContainer">
          <Avatar
            className="avatar"
            alt="Profile-Picture"
            src="https://uploads-ssl.webflow.com/5f2d76c8a5805a8656418f3d/5f2d76c867914d9284e5ea3e_photo-1443180236447-432ea00e6ead.jpg"
          />
        </div>

        <p className="profileText">
          Denali is a simple responsive blog template. Easily add new posts
          using the Editor or change layout and design using the Designer.
        </p>

        <div className="underlineSeperator"></div>

        <p className="profileText">Featured Posts:</p>

        <div className="blogPostsContainer">{renderFeaturedPosts()}</div>

        <div className="underlineSeperator"></div>

        <div className="socialContianer">
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="socialIcon" />
          </a>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="socialIcon" />
          </a>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="socialIcon" />
          </a>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="socialIcon" />
          </a>
        </div>

        <div className="builtWithSection">
          <p className="profileBuiltByText">BUILT WITH&nbsp;</p>
          <p className="profileBuiltByTextLink">HASO-GOKO</p>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;
