

const WhyHire = () => {
  return (
    <div className="flex text-slate-800 w-full h-[500px] items-center bg-white p-2 rounded-xl mt-2">
        <div className="flex justify-center w-[40%]">
            <img className="w-[200px] h-[200px]" src="./public/hireme.jpeg" alt="demo" />
        </div>
        <div className="flex flex-col w-[60%] p-2 pl-6">
        <h1 className=" font-serif font-semibold text-2xl">Why <span className="text-[#FD853A]">Hire me?</span></h1>
        <p className="text-slate-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi labore unde molestias, dolores repellendus repudiandae inventore alias quod optio quisquam voluptatibus! Nisi quibusdam nam maxime vitae, vel harum vero?</p>
        <div className="w-full py-4">
            <p className="pt-2 font-mono text-xl">450+</p>
            <p className="pb-2">Completed Projects</p>
        </div>
        <div className="flex justify-center w-full">
        <button className="border border-black/70 w-[130px] h-[4rem] rounded-3xl">Hire Me</button>
        </div>
        </div>
    </div>
  )
}

export default WhyHire