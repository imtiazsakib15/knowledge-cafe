import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarkedBlog }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-7">
      <h3 className="text-xl font-bold leading-relaxed">
        Bookmarked Blogs: {bookmarkedBlog.length}
      </h3>
      {bookmarkedBlog.map((blog, index) => (
        <Bookmark blog={blog} key={index}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarkedBlog: PropTypes.array,
};

export default Bookmarks;
