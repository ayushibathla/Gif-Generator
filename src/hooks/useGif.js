import React from "react";
import { useState,useEffect} from "react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  
  const [gif,setgif] = useState('');
  const [loading,setLoading] = useState('false');
  const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const taggedurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  
  async function fetchData() {
    setLoading(true);
    const output =await axios.get(tag ? taggedurl : randomurl);
//  console.log(output);
    const source = output.data.data.images.downsized_large.url;
    console.log(source);
    setgif(source);
    setLoading(false);
  }

  useEffect (()=>{
    fetchData();
  },[]);

  return {gif,loading,fetchData};
}
export default useGif