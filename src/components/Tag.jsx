import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    // const [gif,setGif]=useState('car');
    // const [loading,setLoading]=useState(false);

    const [tag,setTag]=useState('')
    const {gif,loading, fetchData}=useGif(tag)

    
  return (
    <div className='w-[34%] h-[582px]  rounded-lg border border-black flex flex-col justify-between items-center
    gap-y-5 mt-[15px]'>

        <h1 className="mt-[10px] text-2xl uppercase underline font-semibold text-white">Random {tag} Gif</h1>
        
            {loading?(<Spinner/>):(<img loading='lazy' src={gif} alt="" width={450} className="rounded-md h-[376px] max-h-[376px] object-cover"/>) }
        
        <input type="text" className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' 
          onChange={(event)=> setTag(event.target.value)}
          value={tag}
          placeholder='Enter Your Gif'
        />
        <button className=' text-white  font-medium bg-blue-600 hover:bg-blue-800 transition-all duration-200
         w-[83%] text-lg py-2 rounded-lg mb-[15px]' 
        onClick={()=>fetchData(tag)}>Click to Generate</button>
    </div>
  )
}

export default Tag