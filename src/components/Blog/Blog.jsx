import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const { title, author, author_img, date, tags, reading_time, cover_img } =
    blog;
  return (
    <div className="space-y-4 py-10">
      <img className="w-full rounded-lg" src={cover_img} alt="" />
      <div className="flex justify-between items-center pt-4">
        <div className="flex gap-2 md:gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h4 className="md:text-xl font-bold leading-relaxed">{author}</h4>
            <p className="text-sm font-semibold text-gray-500">{date}</p>
          </div>
        </div>
        <p className="md:text-lg text-gray-500 font-medium flex items-center gap-2">
          {reading_time} min read
          <button onClick={() => handleBookmark(blog)}>
            <BsBookmark />
          </button>
        </p>
      </div>
      <h2 className="text-xl md:text-4xl font-bold leading-relaxed">{title}</h2>
      <div className="space-x-3 text-gray-500">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(blog)}
        className="text-blue-700 text-lg font-semibold underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
