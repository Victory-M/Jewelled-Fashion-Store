import HeroImg from "/imgs/full.jpg";

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Hero = ({ setSearch }: Props) => {
  return (
    <div className="flex flex-col-reverse justify-between bg-red-50  md:max-h-96 md:flex-row">
      <div className=" m-auto space-y-3 py-8 px-4 md:px-0">
        <p className="uppercase text-red text-rose-900 font-semibold text-sm ">
          jewelled...
        </p>
        <h1 className=" text-black font-semibold text-4xl">
          <span className="text-red-900  "> No.1 </span>
          <br />
          Custom Made
          <br /> Jewelry Store
        </h1>
        <p className="text-red-900 text-sm font-semibold ">
          A variety of WristWatches, <br /> Necklaces, Bracelets, Earrings and
          Rings available.
        </p>
        <div>
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
            className=" w-full p-2 outline outline-red-900  capitalize placeholder:lowercase  md:text-base text-base  rounded-2xl "
          />
        </div>
      </div>
      <div className=" object-cover h-64 md:w-2/5 md:h-96">
        <img src={HeroImg} alt="" className="w-full h-full " />
      </div>
    </div>
  );
};

export default Hero;
