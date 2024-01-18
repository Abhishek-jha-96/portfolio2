import { LuArrowUpRightFromCircle } from "react-icons/lu";

const ToggleButton = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center justify-between w-[200px] border rounded-3xl h-[50px] shadow bg-inherit backdrop-blur-md ">
        <div className="flex justify-center items-center gap-2 text-white rounded-3xl w-[50%] px-2 bg-[#FD853A] h-[80%] ml-2">
          <button>Portfolio</button>
          <LuArrowUpRightFromCircle />
        </div>
        <div className="mr-3 font-mono text-white">
          Hire ME
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
