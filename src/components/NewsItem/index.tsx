import defaultNewsImage from "../../images/default_news.jpg";
import { Article } from "../../types/Article";

interface NewsItemProps {
  article: Article;
}

const Index = (props: NewsItemProps) => {
  const formatDate = (date: string): string => {
    const inputDate = new Date(date);
    const day = inputDate.getUTCDate();
    const month = inputDate.getUTCMonth() + 1;
    const year = inputDate.getUTCFullYear();

    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;
  };

  return (
    <div
      className="bg-blue-200 cursor-pointer"
      onClick={() => window.open(props.article.url)}
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          className="object-cover"
          src={
            props.article.urlToImage
              ? props.article.urlToImage
              : defaultNewsImage
          }
          alt="Error loading"
        />
      </div>
      <div>
        <div className="p-2 flex flex-row justify-between">
          <span className="">
            {props.article.author ? props.article.author : "Unknown"}
          </span>
          <span>{formatDate(props.article.publishedAt)}</span>
        </div>
        <div className="p-2">
          <p>{props.article.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
