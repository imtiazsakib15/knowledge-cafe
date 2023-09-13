import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Navbar from "./components/Navbar/Navbar";
import SpentOnRead from "./components/SpentOnRead/SpentOnRead";

function App() {
  return (
    <>
      <header className="container mx-auto px-4 md:px-10 lg:px-36">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto flex gap-6 px-4 md:px-10 lg:px-36">
        <div className="w-2/3">
          <Blogs></Blogs>
        </div>
        <div className="w-1/3">
          <SpentOnRead></SpentOnRead>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
