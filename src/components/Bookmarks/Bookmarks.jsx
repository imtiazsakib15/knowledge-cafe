import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarkedBlogs }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-7 mb-14">
      <h3 className="text-xl font-bold leading-relaxed">
        Bookmarked Blogs: {bookmarkedBlogs.length}
      </h3>
      {bookmarkedBlogs.map((blog, index) => (
        <Bookmark blog={blog} key={index}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarkedBlogs: PropTypes.array,
};

export default Bookmarks;
