import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-footerBack h-40  w-screen ">
    <div className="bg-footerBack h-40 flex flex-col justify-center items-center  ">

      <div>
        <div
          className={`items-center justify-between flex md:space-x-8 mx-auto max-w-screen-xl  p-4`}
          id="navbar-default"
        >
          <div
            className={`items-center justify-center w-full flex md:space-x-8 mx-auto max-w-screen-xl   p-4`}
            id="navbar-default"
          >
            <ul className="font-medium text-sm flex space-x-8 ">
              <li>
                <a aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#skills">Skills</a>
              </li>
              <li className="hidden md:inline">
                <a href="/#Qualification">Qualification</a>
              </li>
              <li className="hidden md:inline">
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li className="hidden md:inline">
                <a href="/#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex gap-x-2 my-4 relative bottom-3">
        <Image
          src="/githubwhite.svg"
          alt="Telegram logo"
          width={20}
          height={20}
          loading="eager"
          priority={true}
        />
        <Image
          src="/linkedwhite.svg"
          alt="Telegram logo"
          width={20}
          height={20}
          loading="eager"
          priority={true}
        />
        <Image
          src="/twiter.svg"
          alt="Telegram logo"
          width={20}
          height={20}
          loading="eager"
          priority={true}
        />
        <Image
          src="/facebook.svg"
          alt="Telegram logo"
          width={20}
          height={20}
          loading="eager"
          priority={true}
        />
        <Image
          src="/instagram.svg"
          alt="Telegram logo"
          width={20}
          height={20}
          loading="eager"
          priority={true}
        />
      </div>
      <div className=" text-sm">
        © Yusif Qasim. All rights reserved.
      </div>
    </div>
    </div>

  );
};

export default Footer;
