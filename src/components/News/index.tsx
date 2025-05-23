import { useEffect, useRef, useState } from "react";
import NewsItem from "../NewsItem";
import { Article, NewsApiResponse } from "../../types/Article";
import Spinner from "../Spinner/index";

interface NewsProps {
  pageNo: number;
  setPageNo: (value: number) => void;
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  searchQuery: string;
  scrollPosition: number;
  setScrollPosition: (value: number) => void;
}

const Index = (props: NewsProps) => {
  // eslint-disable-next-line
  const [pageSize, setPageSize] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const screenWidth = window.screen.width;

  const fetchNews = async () => {
    setLoading(true);
    const params = {
      searchQuery: props.searchQuery,
      page: String(props.pageNo),
      pageSize: String(pageSize),
    };

    const url = process.env.REACT_APP_FETCH_NEWS;
    if (!url) return;
    const paramString = new URLSearchParams(params).toString();

    const urlWithParams = `${url}?${paramString}`;

    const response = await fetch(urlWithParams, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    const data: NewsApiResponse = await response.json();
    props.setArticles([...props.articles, ...data.articles]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollTop);
      props.setScrollPosition(scrollRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (screenWidth >= 1536) {
      setPageSize(40);
    } else {
      setPageSize(20);
    }
    fetchNews();
    // eslint-disable-next-line
  }, [props.pageNo, props.searchQuery]);

  useEffect(() => {
    if (scrollRef.current) {
      console.log(props.scrollPosition);
      scrollRef.current.scrollTo(0, props.scrollPosition);
    }
    // eslint-disable-next-line
  }, [props.articles]);

  return (
    <div className="bg-blue-100 h-screen">
      {loading && (
        <div className="flex justify-center items-center h-lvh w-lvw">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="px-10 pt-10">
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 overflow-y-auto h-[550px] md:h-[550px] lg:h-[550px] xl:h-[640px] 2xl:h-[1270px]"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {props.articles.map((article, index) => {
              return <NewsItem key={index} article={article} />;
            })}
          </div>
          <div className="flex justify-center content-center py-4">
            <button
              className={`p-3 bg-blue-400 rounded-lg ${
                props.pageNo >= 5
                  ? "cursor-not-allowed bg-blue-100 opacity-50"
                  : ""
              }`}
              onClick={() => props.setPageNo(props.pageNo + 1)}
              disabled={loading || props.pageNo >= 5}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
