import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    // intire screen dev
    <div className="h-screen flex justify-center items-center relative" id="">
      {/* linkes dev */}
      <div className="flex xl:justify-center justify-start ml-12 xl:ml-0 items-center gap-8 mb-24 flex-wrap ">
        <div className="flex flex-col gap-6 ">
          <Link
            href={
              "https://iq.linkedin.com/in/yusif-qasim-208473232?trk=people-guest_people_search-card"
            }
            target="_blank"
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/linked.svg"
              alt="linked in logo"
              width={24}
              height={24}
              priority
            />
          </Link>
          <Link
            href={"https://github.com/YusifQasim"}
            target="_blank"
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/github.svg"
              alt="git hub logo"
              width={24}
              height={24}
              priority
            />
          </Link>
          <Link
            href={"tel:+9647502369315"}
            target="_blank"
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Image
              src="/telegram.svg"
              alt="telegram logo"
              width={24}
              height={24}
              priority
            />
          </Link>
        </div>
        {/* the texts and the scroll down div */}
        <div className=" w-3/4 md:w-1/3  order-3 md:order-none">
          <div className="">
            <div>
              <h1 className="xl:text-5xl text-3xl text-white font-semibold xl:break-words xl:w-52 xl:leading-tight">
                Hi, I am Yusif
              </h1>
              <h3 className=" text-base font-bold text-grayColor  mb-3">
                Front End Web Developer
              </h3>
              <p className="w-4/4 text-xs text-grayColor font-medium mb-3">
                I have a passion for building intuitive, user-friendly
                interfaces that provide an enjoyable and seamless user
                experience.
              </p>
              <button
                type="button"
                class="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center "
              >
                Contact me
                <Image
                  src="/direct.svg"
                  alt="telegram logo"
                  width={20}
                  height={20}
                  priority
                />
              </button>
            </div>

            <Link href={"#about"}>
              <div className="xl:flex gap-1 absolute bottom-32 hidden ">
                <Image
                  src="/mouse.svg"
                  alt="mouse Logo"
                  width={24}
                  height={24}
                  priority
                />
                <p>Scroll Down</p>
                <Image
                  className="animate-bounce "
                  src="/down.svg"
                  alt="down Logo"
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </Link>
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
