import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen" id="">
      <div>
        <div>
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

        <div>
          <div className="">
            <div>
              {" "}
              <h1 className="">Hi, I am Yusif</h1>
              <h3 className="">
                Front End Web Developer & Spring Boot Developer
              </h3>
              <p className="">
                I have a passion for building intuitive, user-friendly
                interfaces that provide an enjoyable and seamless user
                experience.
              </p>
              <a href="#contact">
                Contact Me<i className=""></i>
              </a>
            </div>
            <div>
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
        <div>
        <Image
            src="/telegram.svg"
            alt="Next.js Logo"
            width={24}
            height={24}
            priority
          />

        </div>
      </div>
    </div>
  );
};

export default Home;
