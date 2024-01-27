import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="p-3 w-full flex gap-4 justify-center">
        <Image
          src="/logo2.png"
          alt="logo"
          width={101}
          height={96}
          className="object-contain "
        />
        <p className="my-auto text-3xl">Anime Now</p>
      </div>
      <header className="bg-white bg-hero bg-opacity-20 rounded-xl bg-center bg-cover bg-no-repeat sm:p-60 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
        <div className=" ">
          <h1 className="sm:text-6xl bg-black/30 p-20 rounded-xl backdrop-blur-lg text-5xl text-center text-white lg:max-w-x; font-bold leading-[120%]">
            Find the Anime to watch <span className="red-gradient">Now</span>
          </h1>
        </div>
      </header>
    </>
  );
}

export default Hero;
