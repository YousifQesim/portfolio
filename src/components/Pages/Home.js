import Image from "next/image";

const Home = () => {
  return (
    // intire screen dev
    <div className="h-screen flex justify-center items-center relative" id="">
      {/* linkes dev */}
      <div className="flex justify-center items-center gap-8 mb-24 flex-wrap ">
        <div className="flex flex-col gap-6 ">
          <Image
            src="/linked.svg"
            alt="linked in logo"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/github.svg"
            alt="git hub logo"
            width={24}
            height={24}
            priority
          />
          <Image
            src="/telegram.svg"
            alt="telegram logo"
            width={24}
            height={24}
            priority
          />
        </div>
        {/* the texts and the scroll down div */}
        <div className=" w-3/4 md:w-1/3  order-3 md:order-none">
          <div className="">
            <div>
              <h1 className="text-5xl text-white font-semibold break-words w-52 leading-tight">Hi, I am Yusif</h1>
              <h3 className=" text-base font-bold text-grayColor  mb-3">
                Front End Web Developer 
              </h3>
              <p className="w-4/4 text-xs text-grayColor font-medium mb-3">
                I have a passion for building intuitive, user-friendly
                interfaces that provide an enjoyable and seamless user
                experience.
              </p>
              <a href="#contact" className="flex gap-2 bg-textColor text-white rounded-lg w-36 p-2 mt-4">
                Contact Me  <Image
            src="/direct.svg"
            alt="Next.js Logo"
            width={18}
            height={18}
            priority
          />
              </a>
            </div>
            <div className="flex gap-1 absolute bottom-32 ">
              <Image
                src="/mouse.svg"
                alt="mouse Logo"
                width={24}
                height={24}
                priority
              />
              <p>Scroll Down</p>
              <Image
            
                src="/down.svg"
                alt="down Logo"
                width={24}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
        {/* personal image div */}
        <div className="">
          <Image
            src="/my.jpg"
            alt="Next.js Logo"
            width={270}
            height={270}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
