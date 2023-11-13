import React, { useEffect, useState } from 'react'
import Loader from './Loader'

function News() {
const [mynews, setMynews] = useState([])
const [isLoading, setisLoading] = useState(true)
  const fetchData=async ()=>{
    try{
    let res=await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3b42beb0957b41128c87843558ef08df")
    let data=await res.json();
    setMynews(data.articles);
    setisLoading(false);
    }catch(error){
        console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  
    
  if(isLoading){
    return (
       <>
        <Loader/>
      </>
    )
  }

  return (
    <>
    <div className="main grid grid-cols-4 grid-rows-5 gap-2">
  {  mynews.map((elem)=>{
        return(
            <>
        <div className=" card max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-clip overflow-hidden">
           <a href={elem.url}><img className="rounded-t-lg" src={elem.urlToImage || "dummy.jpg"} alt="" /> </a>
          <div className="p-5">
        <a href={elem.url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elem.description}</p>
        <a href={elem.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    </div>

            </>
        )
    })
    
  }
   </div>
    </>
  )
}

export default News