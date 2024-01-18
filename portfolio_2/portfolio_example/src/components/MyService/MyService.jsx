import Card from "./Card"


const MyService = () => {
  return (
    <div className="flex-col w-full -my-[1.8%] bg-[url('./public/Frame58.png')] bg-opacity-20 bg-center bg-cover rounded-3xl text-white">
        <div className="flex px-[3%] py-[7%] w-full justify-between">
            <p className="w-[60%] font-bold text-2xl">My <span className="text-[#FD853A]">Service</span></p>
            <p className="w-[40%] text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur esse, error dicta laudantium sint, dolorem nostrum impedit quasi deserunt ducimus repellendus dolores eius mollitia voluptates aut corporis modi cumque.</p>
        </div>
        <div className="flex p-2 w-full">
            <Card />
        </div>
        <div className="flex w-full justify-center p-2">
            <div className=" w-7 h-2 bg-[#FD853A] rounded-3xl"></div>
            <div className=" w-2 h-2 bg-white/90 rounded-3xl ml-1"></div>
            <div className=" w-2 h-2 bg-white/90 rounded-3xl ml-1"></div>
        </div>
        
    </div>
  )
}

export default MyService