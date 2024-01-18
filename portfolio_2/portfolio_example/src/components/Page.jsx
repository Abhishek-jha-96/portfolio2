import { IoArrowRedoOutline } from "react-icons/io5";

const Page = () => {
  return (
    <div>
      <div className="flex w-full justify-center p-4">
        <img className="w-[40%] drop-shadow-md" src="./public/frame_26.png" alt="" />
      </div>
      <div className="flex w-full justify-center p-2">
        <div className=" w-7 h-2 bg-[#FD853A] rounded-3xl"></div>
        <div className=" w-2 h-2 bg-white/90 rounded-3xl ml-1"></div>
        <div className=" w-2 h-2 bg-white/90 rounded-3xl ml-1"></div>
      </div>
      <div className=" flex w-full justify-center gap-6 px-6 py-2">
        <div className=" bg-slate-300 p-2 rounded-3xl border border-gray-400">Landing Page</div>
        <div className=" bg-slate-300 p-2 rounded-3xl border border-gray-400">Product Design</div>
        <div className=" bg-slate-300 p-2 rounded-3xl border border-gray-400">Animation</div>
        <div className=" bg-slate-300 p-2 rounded-3xl border border-gray-400">Glassmorphism</div>
        <div className=" bg-slate-300 p-2 rounded-3xl border border-gray-400">Cards</div>
      </div>
      <div className="flex justify-center p-5">
        <h1 className=" font-serif font-bold text-3xl">Lirante - Food Dilvery Solution</h1>
        <button><IoArrowRedoOutline /></button>
      </div>
      <div className="flex w-full justify-center items-center">
        <p className=" w-[80%] font-mono text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          eveniet odit dolorem illo tempora neque quos officiis, ab repudiandae
          possimus deleniti unde hic, facere cupiditate assumenda modi non ea
          dolore?
        </p>
      </div>
    </div>
  );
};

export default Page;
