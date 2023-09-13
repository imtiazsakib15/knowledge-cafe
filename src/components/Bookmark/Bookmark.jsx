import PropTypes from "prop-types";

const Bookmark = ({ blog }) => {
  return (
    <div className="mt-4 p-5 bg-white rounded-lg">
      <h3 className="text-lg font-semibold leading-relaxed">{blog.title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  blog: PropTypes.object,
};

export default Bookmark;
