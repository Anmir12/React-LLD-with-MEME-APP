import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [memesData, setMemesData] = useState([]);
  // const [isLoading,setIsLoading] =useState(false);

  useEffect(() => {
    fetchMemesData();
  }, []);
 
 const fetchMemesData = async () => {
    try {
      // setIsLoading(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      const json = await data.json();
      const {memes} =json;
      console.log(json);
      console.log(memes);
      setMemesData(memes);
      // setIsLoading(false)
    } catch (error) {
      if (error) {
        return new Error("Error while making an api call");
      }
      // setIsLoading(false)
    }
  };
  return (
    <div className="memes-container">
      {memesData.map((meme, idx) => {
        return <div className="flex h-100 w-100 border border-black " key={meme?.url}>
          <p>{meme?.author}</p>
          <p>{meme?.title}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
