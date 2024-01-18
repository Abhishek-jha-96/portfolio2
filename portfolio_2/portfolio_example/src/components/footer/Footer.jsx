const Footer = () => {
  return (
    <div className="flex flex-col text-white bg-gray-900 p-2 rounded-t-3xl mt-3">
      <div className="w-full flex justify-between p-8 border-b">
        <h1 className="font-bold text-3xl">Lets Connect there</h1>
        <button className="bg-[#FD853A] p-3 rounded-3xl">Hire Me</button>
      </div>
      <div className="flex w-full gap-2 border-b py-2">
        <div className="w-[40%] py-8 px-2">
          <div className="w-[60%]">
            <img src="./LOGO.png" alt="bottom" />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            cum tempore natus sequi. Quia facere iste consequuntur aspernatur
            velit tempore quo quidem quasi eaque ipsum. Impedit quas libero quo
            consectetur.
          </p>
          <div>icons</div>
        </div>
        <div className="w-[15%] px-2 py-4">
          <h1 className="pb-4 text-[#FD853A]">Navigations</h1>
          <div>
            <h1>Home</h1>
            <h1>Service</h1>
            <h1>About me</h1>
            <h1>Resume</h1>
            <h1>Project</h1>
          </div>
        </div>
        <div className="w-[17%] px-2 py-4">
          <h1 className="text-[#FD853A] pb-4">Contacts</h1>
          <div>
            <h1>+91 99999999</h1>
            <h1>example@gmail.com</h1>
            <h1>example.com</h1>
          </div>
        </div>
        <div className="w-[28%] px-2 py-4">
          <h1 className="text-[#FD853A]">Get the latest Information</h1>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-between px-2">
          <h1>Copyright © 2024 ABC Inc. All rights reserved.</h1>
          <h1>Terms of Use</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
