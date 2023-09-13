import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Navbar from "./components/Navbar/Navbar";
import SpentOnRead from "./components/SpentOnRead/SpentOnRead";

function App() {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    bookmarkedBlogs.find((bookmarkedBlog) => bookmarkedBlog.id === blog.id) ||
      setBookmarkedBlogs([...bookmarkedBlogs, blog]);
  };

  const handleMarkAsRead = (blog) => {
    setReadingTime(readingTime + blog.reading_time);
    const newBookmarkedBlogs = bookmarkedBlogs.filter(
      (bookmarkedBlog) => bookmarkedBlog.id !== blog.id
    );
    setBookmarkedBlogs(newBookmarkedBlogs);
  };

  return (
    <>
      <header className="container mx-auto px-5 md:px-10 lg:px-36">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto md:flex gap-6 px-5 md:px-10 lg:px-36">
        <div className="md:w-2/3">
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="md:w-1/3">
          <SpentOnRead readingTime={readingTime}></SpentOnRead>
          <Bookmarks bookmarkedBlogs={bookmarkedBlogs}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
