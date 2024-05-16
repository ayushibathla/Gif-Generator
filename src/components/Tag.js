import React from "react";
import { useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Tag = () => {

  const [tag,setTag] = useState('car');
  const {gif,loading, fetchData } = useGif(tag);
  return (
        <div className=" flex flex-col items-center w-96 h-80 bg-orange-300 mt-4 mb-4 gap-y-5 p-2 border-x border-y border-slate-700">
          <h1 className="text-2xl underline uppercase">RANDOM {tag} GIF</h1>
          {
          loading?<Spinner/>:<img src={gif} alt={gif} className="w-2/5 h-2/5"/>
          }
          <input onChange={(event)=>{
            setTag(event.target.value)
          }} value={tag} className="w-4/5 bg-white rounded-md opacity-60 p-2"/>
          <button onClick={() => {
            fetchData();
            }} className="w-4/5 bg-white rounded-md opacity-60 p-2">Generate</button>
      </div>
  )
}
export default Tag
