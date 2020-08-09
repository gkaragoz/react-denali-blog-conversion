import React from "react";

import { BlogCard } from "../../Components";
import "./BlogList.css";

function BlogList({ blogPosts }) {
  const renderBlogCards = () => {
    return blogPosts.map(
      ({ id, title, timeStamp, category, imageURL, imageALT, description }) => {
        return (
          <BlogCard
            id={id}
            key={id}
            title={title}
            timeStamp={timeStamp}
            category={category}
            imageURL={imageURL}
            imageALT={imageALT}
            description={description}
          />
        );
      }
    );
  };

  return <div>{renderBlogCards()}</div>;
}

export default BlogList;
