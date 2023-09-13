import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog }) => {
  const { title, author, author_img, date, tags, reading_time, cover_img } =
    blog;
  return (
    <div className="space-y-4 py-10">
      <img className="w-full rounded-lg" src={cover_img} alt="" />
      <div className="flex justify-between items-center pt-4">
        <div className="flex gap-5">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h4 className="text-xl font-bold leading-relaxed">{author}</h4>
            <p className="font-semibold text-gray-500">{date}</p>
          </div>
        </div>
        <p className="text-lg text-gray-500 font-medium flex items-center gap-2">
          {reading_time} min read
          <button>
            <BsBookmark />
          </button>
        </p>
      </div>
      <h2 className="text-4xl font-bold leading-relaxed">{title}</h2>
      <div className="space-x-3 text-gray-500">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <button className="text-blue-700 text-lg font-semibold underline">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
