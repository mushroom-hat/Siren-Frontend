import React from 'react'
import TopNav from "./topNav";

const mainDisplay = ({children}) => {
  return (
    <div className="mt-1 mx-8 min-h-full flex-1 bg-[#f4f5f2] text-black font-medium shadow-lg rounded-tl-xl">
      <TopNav />
      <hr className="mx-10 h-px border-0 dark:bg-gray-300"/>
        {children}
    </div>
  )
}

export default mainDisplay;
