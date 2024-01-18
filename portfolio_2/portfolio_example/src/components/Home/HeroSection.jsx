import MyService from "../MyService/MyService";
import Page from "../Page";
import WhyHire from "../WorkExperience/WhyHire";
import WorkExperience from "../WorkExperience/WorkExperience";
import Footer from "../footer/Footer";
import ToggleButton from "./ToggleButton";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center pt-6 pb-0 -mb-4">
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-center">
          <div className=" border-2 border-black w-20 rounded-[50px] flex justify-center ml-4">
            <h1 className="font-sans text-xl ">Hello!</h1>
          </div>
          <span className="ml-[2px]">
            <img
              className=" top-[-10px] relative h-4"
              src="/public/Vector_1.png"
              alt="vector1"
            />
          </span>
        </div>
        <h1 className="text-[6vmax]">
          I&apos;m <span className="text-[#FD853A]">Luke</span>,
        </h1>
        <div className="flex justify-center">
          <img
            className=" z-10 relative top-[3vmax] lg:top-[5vmax] left-3 -rotate-12"
            src="/public/Vector_2.png"
            alt="vector2"
          />
          <h1 className="text-[6vmax] my-[-20px] ">Product Designer</h1>
        </div>
        <div className="w-full flex justify-between px-4">
          <div className="w-[15%] ml-3">
            <img
              className="w-[2.5vw] h-[3vh]"
              src="/public/quote-up.png"
              alt="quotes"
            />
            <p className="relative text-[1.8vw]">
              Luke&apos;s Exceptional Product design <br />
              ensure our website&apos;s success
            </p>
          </div>
          <div className="relative inline-block w-[70%]">
            <img
              className=" max-w-[100%] h-auto"
              src="/public/Frame 57.png"
              alt="photo"
            />
            <div className="absolute bottom-[5%] right-[50%] translate-x-[50%]">
              <ToggleButton />
            </div>
          </div>

          <div className="flex-row text-right w-[15%] mr-3">
            <div className="w-full flex justify-end">
              <img className="w-[80%]" src="/public/Frame 4.png" alt="stars" />
            </div>
            <h1 className="text-[3.5vw]">10 Years</h1>
            <h1 className="text-[1.6vw]">Experience</h1>
          </div>
        </div>

        <div className="w-full">
          <MyService />
        </div>
        <div className="w-full mt-3">
          <WorkExperience />
        </div>
        <div className="w-full">
          <WhyHire />
        </div>

        <div className="flex justify-between w-full p-6">
          <div className="w-[50%] font-mono text-2xl font-bold">
            Lets have a look at my portfolio
          </div>
          <div>
            <button className="bg-[#FD853A] text-white w-[5rem] h-[3rem] rounded-3xl">
              See ALL
            </button>
          </div>
        </div>
        <div className="w-full">

        <Page />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
