import { useState, useEffect } from "react";
import "../App.css";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
  const [memesData, setMemesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemesData();
  }, []);

  const fetchMemesData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://meme-api.com/gimme/50");
      const json = await data.json();
      const { memes } = json;
      console.log(json);
      setMemesData(memes);
      setIsLoading(false);
    } catch (error) {
      if (error) {
        return new Error("Error while making an api call");
      }
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap border border-black bg-gray-400">
        {memesData &&
          memesData.map((meme, idx) => {
            return <MemeCard memes={meme} key={meme?.url} />;
          })}
      </div>
    </div>
  );
}

export default Body;
