import Image from "next/image";
const About = () => {
  return (
    // entire screen div
    <div className="h-screen flex items-center" id="about">
      {/* section div */}
      <div className="flex justify-center items-center xl:w-3/4 border-2 border-solid border-red-700 mx-auto my-0 ">
        {/* image div */}
        <div className="w-2/4 ">
          <Image
          className="mx-auto my-0 rounded-2xl "
            src="/my.jpg"
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          />
        </div>

        {/* about information div */}
        <div className="xl:w-2/4 flex flex-col ">
          <h1>About me</h1>
          <h3>My Introduction</h3>
          <p className="w-full">
            individual, with broad skills, also energetic and eager to learn new
            ones. I am always highly enthused about my work and tasks ahead,
            extremely driven, with a clear goal to succeed, and committed to
            learning and self development. Furthermore, I am adept at handling
            multiple tasks on a daily basis competently and at working well
            under pressure
          </p>
          {/* experiece and awards div */}
          <div className="flex gap-2">
            <div>
              <h1>+2</h1>
              <span>
                <p>Years</p>
                <p>Experience</p>
              </span>
            </div>
            <div>
              <h1>+10</h1>
              <span>
                <p>Project</p>
                <p>Completed</p>
              </span>
            </div>
            <div>
              <h1>+05</h1>
              <span>
                <p>Web Development</p>
                <p>Certifications</p>
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-textColor hover:bg-violet-800 transition ease-in-out delay-10 duration-200 gap-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-2.5 mt-4 text-center inline-flex items-center "
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
        </div>
      </div>
    </div>
  );
};

export default About;
