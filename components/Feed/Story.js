import { useEffect } from "react";

const Story = ({ img, name }) => {
  useEffect(() => {
    
   console.log('image url', img)
  }, [])
  return (
    <div className="pl-3">
      <img className="rounded-full h-14 w-14 ring-2 ring-red-500 cursor-pointer border-2 p-[1.5px] hover:scale-110 transition transform duration-200 ease-out" src={img} alt="" />
      <p className="text-xs w-14 truncate text-center">{name}</p>
    </div>
  );
}

export default Story;