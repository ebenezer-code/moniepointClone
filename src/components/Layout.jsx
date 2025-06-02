import { useState } from "react"


export default function Layout({children, className = ""}) {
    const[isActive, setIsActive] = useState(false);
    
  return (
    <div className={`min-height-screen overflow-y-auto overflow-x-hidden perspective-[30px] ${className}`}>
        <div className="bg-[#061435] h-[50px]">
            <ul className="grid grid-cols-2 font-sans text-[20px] text-white text-center p-2 le">
                <li className="">Business</li>
                <li className="">Personal</li>
            </ul>
        </div>
        
       {children}

    </div>
  )
}
