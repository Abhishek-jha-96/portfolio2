const NavBar = () => {
  return (
    <div className=" w-[90%] ">
      <div className=" flex justify-between w-full h-16 bg-black rounded-[50px]">
        <div className=" w-[40%] flex justify-between items-center px-6">

          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out">
            <p className=" text-white">Home</p>
          </div>
          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out">
            <p className=" text-white">About</p>
          </div>
          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out">
            <p className=" text-white">Service</p>
          </div>
        </div>

        <div className=" text-white w-[20%] flex justify-center items-center">
          <img src="/public/LOGO.png" alt="logo" />
        </div>

        <div className="w-[40%] flex justify-between items-center px-6">
          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out" >
            <p className=" text-white">Resume</p>
          </div>
          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out">
            <p className=" text-white">Project</p>
          </div>
          <div className="flex justify-center items-center w-[8vw] h-12 rounded-[50px] hover:bg-[#FD853A] transition duration-200 ease-in hover:ease-out">
            <p className=" text-white">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
