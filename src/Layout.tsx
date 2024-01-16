import Navbar from "./components/Navbar";
import News from "./components/News";
import Drawer from "./components/Drawer";
import { useState } from "react";
import { Article } from "./types/Article";

const Layout = () => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("Current affairs");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  return (
    <div className="flex flex-row">
      {openDrawer && (
        <Drawer
          setPageNo={setPageNo}
          setArticles={setArticles}
          setSearchQuery={setSearchQuery}
          setScrollPosition={setScrollPosition}
        />
      )}
      <div>
        <div className="h-16">
          <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
        <div>
          <News
            pageNo={pageNo}
            setPageNo={setPageNo}
            articles={articles}
            setArticles={setArticles}
            searchQuery={searchQuery}
            scrollPosition={scrollPosition}
            setScrollPosition={setScrollPosition}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
