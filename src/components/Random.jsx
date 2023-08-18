import axios from 'axios';
import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-[34%] h-[582px]  rounded-lg border border-black  
    flex flex-col justify-between items-center gap-y-5 mt-[15px]">
    
      <h1 className="text-2xl uppercase underline font-semibold text-white mt-1">A Random Gif</h1>

      {loading ? <Spinner /> : <img loading='lazy' src={gif} width="450" className="rounded-md h-[70%] max-h-[70%] object-cover"/>}

      <button
        onClick={() => fetchData()}
        className="w-[83%] align-bottom text-white bg-blue-600 hover:bg-blue-800 transition-all duration-200
          mb-[15px] text-xl py-2 rounded-lg font-bold"
      >
       Click to Generate
      </button>
    </div>
  );
};

export default Random;
