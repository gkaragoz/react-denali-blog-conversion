import React from "react";

function BlogPost({ blogPost }) {
  const {
    id,
    title,
    timeStamp,
    category,
    imageURL,
    imageALT,
    description,
  } = blogPost;

  return (
    <div>
      <h1>id: {id}</h1>
      <h1>title: {title}</h1>
      <h1>timeStamp: {timeStamp}</h1>
      <h1>category: {category}</h1>
      <h1>imageURL: {imageURL}</h1>
      <h1>imageALT: {imageALT}</h1>
      <h1>description: {description}</h1>
    </div>
  );
}

export default BlogPost;
