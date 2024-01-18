const complist = [
  {
    name: "Cognizent, Mumbai",
    date: "Sep 2016 - July 2020",
  },
  {
    name: "Sugee Pvt. Ltd, Mumbai",
    date: "Sep 2020 - July 2023",
  },
  {
    name: "Cinetstox, Mumbai",
    date: "Sep 2023",
  },
];

const slider = [
  {
    background: "bg-black",
  },
  {
    background: "bg-[#FD853A]",
  },
];

const experiences = [
  {
    title: "Experience Designer",
    discription:
      "Responsible for creating and enhancing the overall experience users have when interacting with a product, service, or system. Their primary goal is to ensure that users can easily and effectively navigate, engage, and derive value from the digital or physical environment they are designing.",
  },
  {
    title: "UI/UX Designer",
    discription:
      "Creating digital experiences that are not only visually appealing but also highly user-friendly and effective. This role involves a combination of design, psychology, and technology to enhance the overall interaction users have with a digital product, such as a website, mobile app, or software application.",
  },
  {
    title: "Lead UX Designer",
    discription:
      "User experience design, responsible for providing leadership, guidance, and strategic direction to a team of UX designers. This role involves not only hands-on design work but also managerial and collaborative responsibilities to ensure the successful execution of user-centered design processes.",
  },
];
const WorkExperience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className=" font-serif font-bold text-4xl py-10">
        My <span className="text-[#FD853A]">Work Experience</span>{" "}
      </h1>
      <div className="w-full grid grid-cols-5 grid-rows-1 gap-4">
        <div className="col-span-2 px-5">
          <div className="flex flex-col justify-center">
            {complist.map((item) => (
              <div key={item} className=" pb-16">
                <h1 className=" font-sans font-bold text-2xl">{item.name}</h1>
                <p>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-start-3">
          <div className="w-full flex flex-col justify-center items-center">
            {slider.map((item) => (
              <div
                key={item}
                className="flex flex-col justify-center items-center w-full"
              >
                <div className="mt-1 flex justify-center items-center w-8 h-8 rounded-3xl border-[2px] border-black border-dashed ">
                  <div
                    className={`w-6 h-6 rounded-3xl ${item.background}`}
                  ></div>
                </div>
                <div className="mt-1 w-1 h-[90px] border-r-2 border-black border-dashed"></div>
              </div>
            ))}
            <div className="mt-1 flex justify-center items-center w-8 h-8 rounded-3xl border-[2px] border-black border-dashed ">
              <div className={`w-6 h-6 rounded-3xl bg-black`}></div>
            </div>
          </div>
        </div>
        <div className="col-span-2 col-start-4">
          {experiences.map((item) => (
            <div className="mr-2 pb-1" key={item}>
              <h1 className=" font-serif font-semibold text-xl">
                {item.title}
              </h1>
              <p className="text-sm">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
