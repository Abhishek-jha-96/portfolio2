const list = [
  { name: "UI/UX", url: "./public/Frame_61.png" },
  { name: "Web Design", url: "./public/Frame_61_2.png" },
  {
    name: "Landing pages",
    url: "./public/Frame_61_3.png",
  },
];

const Card = () => {
  return (
    <div className="w-full flex justify-center gap-5 px-4">
      {list.map((item) => (
        <div
          key={item}
          className="flex-col p-2 justify-center w-[30%] border rounded-md border-white/80 h-fit shadow-md bg-inherit backdrop-blur-md"
        >
          <h1 className="my-2 w-full border-b font-sans font-semibold text-lg">{item.name}</h1>
          <img src={item.url} alt="designs" />
        </div>
      ))}
    </div>
  );
};

export default Card;
