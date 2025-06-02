


export default function Layout({children, className = ""}) {
  
  return (
    <div className={`min-h-screen overflow-y-auto overflow-x-hidden perspective-[30px] ${className}`}>
      <div className="pt-[100px]">
       {children}
     </div>
    </div>
  )
}
