import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="container mx-auto px-4 md:px-10 lg:px-36">
        <Navbar></Navbar>
      </header>
      <main className="container mx-auto flex gap-5 px-4 md:px-10 lg:px-36">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
