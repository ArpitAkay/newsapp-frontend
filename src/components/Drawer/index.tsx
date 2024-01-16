import { Article } from "../../types/Article";

interface DrawerProps {
  setSearchQuery: (value: string) => void;
  setPageNo: (value: number) => void;
  setArticles: (articles: Article[]) => void;
  setScrollPosition: (value: number) => void;
}

const index = (props: DrawerProps) => {
  const newsTopics = [
    "World News",
    "Politics",
    "Technology",
    "Economy and Business",
    "Science",
    "Health",
    "Environment",
    "Education",
    "Social Issues",
    "Crime and Justice",
    "Sports",
    "Football",
    "Cricket",
    "Entertainment",
    "Travel",
    "Fashion and Lifestyle",
    "Food and Culinary",
    "Automotive",
    "Space Exploration",
    "Art and Culture",
    "Fitness and Wellness",
    "Home and Design",
    "Science Fiction",
    "Human Rights",
  ];

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
      <div className="text-white cursor-pointer overflow-scroll h-lvh">
        {newsTopics.map((newsTopic, index) => {
          return (
            <div
              key={index}
              className="flex justify-center py-2 px-10 bg-blue-400"
              onClick={handleSearchQuery}
            >
              <button>{newsTopic}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
