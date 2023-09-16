import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [exp,setExp]=useState(false);
  const [blocks,setBlocks]=useState(false);
  const width=window.innerWidth;

  useEffect(()=>{
      if(width<600){
    setExp(true);
  }
  },[])

  

  return (
    <div>
    <div className="w-full flex justify-around max-md:justify-between ">
      <div className="flex p-2 hover:scale-110 transition-all ease-in-out"><div className="flex items-center max-md:mx-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FF2171" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg> </div><div className="text-lg text-center ml-2 font-bold"><span className="text-2xl">Map</span><br />SvgIT</div>
      </div>
      {exp?(<div className="flex items-center mx-10" onClick={(e)=>setBlocks(blocks=>!blocks)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>):
      
      (<div className="flex font-bold justify-around gap-10 max-md:gap-2 mr-1 items-center">

        <Link to={'/'} className="hover:scale-125 transition-all ease-in-out">🏡 Home</Link>
        <Link to={'/'} className="hover:scale-125 transition-all ease-in-out">🛠️ Get Services</Link>
        <Link to={'/'} className="hover:scale-125 transition-all ease-in-out">❔ Help</Link>
        <Link to={'/'} className="hover:scale-125 transition-all ease-in-out">❤️ About</Link>
        <button className="bg-black text-white px-6 py-2 text-xl border-2 border-black hover:bg-white hover:text-black transition-all ease-in">✈️ Start</button>
       
      </div>) }
    </div><hr className="border border-black mx-10 mt-1 "/>
    {blocks?(<div><div className="flex flex-col text-3xl font-bold justify-around items-center">

<Link to={'/'} className="hover:scale-125 m-4 transition-all ease-in-out">🏡 Home</Link>
<Link to={'/'} className="hover:scale-125 m-4 transition-all ease-in-out">🛠️ Get Services</Link>
<Link to={'/'} className="hover:scale-125 m-4 transition-all ease-in-out">❔ Help</Link>
<Link to={'/'} className="hover:scale-125 m-4 transition-all ease-in-out">❤️ About</Link>
<button className="bg-black  text-white m-3 px-8 py-3 text-4xl  border-2 border-black hover:bg-white hover:text-black transition-all ease-in">✈️ Start</button>

</div></div>):""}
    </div>
  )
}

export default Header