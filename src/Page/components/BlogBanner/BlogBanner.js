import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import classes from "../BlogBanner/BlogBanner.module.css";

function BlogBanner() {
  return (
    <div className={classes.BlogBanner}>
      <BlogItem />
    </div>
  );
}
export default BlogBanner;
