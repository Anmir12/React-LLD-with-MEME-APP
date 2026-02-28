import "../App.css";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
import UseFetchData from "../hooks/UseFetchData";

function Body() {
  const { memesData, isLoading } = UseFetchData();

  return (
    <div>
      <div className="flex flex-wrap border border-black bg-gray-400">
        {memesData &&
          memesData.map((meme, idx) => {
            return <MemeCard memes={meme} key={meme?.url || idx} />;
          })}
      {isLoading && <Shimmer />}
      </div>
    </div>
  );
}

export default Body;
