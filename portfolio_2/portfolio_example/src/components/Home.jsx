import HeroSection from "./Home/HeroSection";
import NavBar from "./Home/NavBar";

const Home = () => {
  return (
    <div className=" bg-gray-100 w-full h-full flex flex-col justify-center py-4">
      <header className="flex justify-center">
        <NavBar />
      </header>

      <HeroSection />
    </div>
  );
};

export default Home;
