import React from "react";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getSlugURL } from "../../helper";

import "./BlogCard.css";

function BlogCard({
  id,
  title,
  timeStamp,
  category,
  imageURL,
  imageALT,
  description,
}) {
  return (
    <div>
      <Card className="container" variant="outlined">
        <div className="thumbnail">
          <img src={imageURL} alt={imageALT} />
        </div>
        <div className="info">
          <Link
            to={{
              pathname: `/${getSlugURL(title)}`,
              state: {
                id,
              },
            }}
          >
            {title}
          </Link>
          <div className="details">
            <h2>{timeStamp} |&nbsp;</h2>
            <Link to="/">{category}</Link>
          </div>
          <div className="content">
            <p>
              {description}&nbsp;
              <Link
                to={{
                  pathname: `/${getSlugURL(title)}`,
                  state: {
                    id,
                  },
                }}
              >
                Read more...
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogCard;
