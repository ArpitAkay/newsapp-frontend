import { Article } from "../../types/Article";

interface DrawerProps {
  setSearchQuery: (value: string) => void;
  setPageNo: (value: number) => void;
  setArticles: (articles: Article[]) => void;
  setScrollPosition: (value: number) => void;
}

const index = (props: DrawerProps) => {
  const handleSearchQuery = (event: React.MouseEvent<HTMLDivElement>) => {
    props.setPageNo(1);
    props.setArticles([]);
    props.setScrollPosition(0);
    const query = event.currentTarget.textContent;
    if (query) props.setSearchQuery(query);
  };

  return (
    <div className="h-lvh bg-blue-200">
      <div className="h-16 bg-blue-300"></div>
      <div className="text-white cursor-pointer">
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Technology</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Science</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Politics</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Health</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Entertainment</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Economy and Business</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>World News</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Education</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Social Issues</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Environment</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Crime and Justice</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Travel</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Fashion and Lifestyle</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Food and Culinary</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Sports</button>
        </div>
        <div
          className="flex justify-center py-2 px-10 px-5 bg-blue-400"
          onClick={handleSearchQuery}
        >
          <button>Cricket</button>
        </div>
      </div>
    </div>
  );
};

export default index;
