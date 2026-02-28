import React, { useEffect, useState } from "react";
import { MEME_API_URL } from "../utils/constants";

const UseFetchData = () => {
  const [memesData, setMemesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMemesData();
    document.addEventListener("scroll", handleInfiniteScroll);
    return () => {
      document.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  const handleInfiniteScroll = () => {
    if (isLoading) return;
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 100
    ) {
      fetchMemesData();
    }
  };
  const fetchMemesData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(MEME_API_URL);
      const json = await data.json();
      const { memes } = json;
      console.log(json);
      setMemesData((memesList)=> [...memesList,...memes]);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { memesData, isLoading };
};

export default UseFetchData;
