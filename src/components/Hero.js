import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <div className="flex items-center justify-between pt-24 pb-24">
      <div>
        <h1 className="text-4xl md:text-6xl">
          Crafting{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-fuchsia-400">
            Innovative
          </span>
          <div className="py-1" />
          Web Experiences
        </h1>
        <Image
          className="md:hidden my-12"
          priority
          src="/hero-img.svg"
          width={800}
          height={800}
          alt="Hero Image"
        />
        <p className="mt-16 w-full md:w-8/12">
          Hi, I’m Antonio, a Web Developer. With 2 years of experience, I
          specialize in building captivating websites that engage users and
          drive results. From responsive layouts to intuitive interfaces, I
          transform ideas into seamless digital solutions.{" "}
        </p>
        <div className="md:hidden mt-8 flex md:flex-col w-full items-center justify-between ">
          <button className="md:mt-16 md:block text-gray-950 font-semibold rounded-md px-4 py-2 bg-gradient-to-r from-green-200 to-fuchsia-400">
            <Link href={"/work"}>Explore My Work</Link>
          </button>
          <div className="cursor-pointer md:mt-4 bg-gradient-to-b rounded-md from-green-200 to-green-200/0 p-1 w-fit">
            <div className="w-full bg-gray-950 rounded-sm px-3 py-1">
              <Link
                className="p-1"
                href="mailto:your-email@example.com?subject=Collaboration&body=I%20would%20like%20to%20work%20with%20you.%20Could%20we%20schedule%20a%20call%3F"
              >
                Let's collaborate
              </Link>
            </div>
          </div>
        </div>
        <button className="hidden mt-16 md:block text-gray-950 font-semibold rounded-md px-8 py-3 bg-gradient-to-r from-green-200 to-fuchsia-400">
          <Link href={"/work"}>Explore My Work</Link>
        </button>
        <div className="hidden md:block cursor-pointer mt-4 bg-gradient-to-b rounded-md from-green-200 to-green-200/0 p-1 w-fit">
          <div className="w-full bg-gray-950 rounded-sm px-7 py-2">
            <Link
              className="p-1"
              href="mailto:your-email@example.com?subject=Collaboration&body=I%20would%20like%20to%20work%20with%20you.%20Could%20we%20schedule%20a%20call%3F"
            >
              Let's collaborate
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="hidden md:block"
        priority
        src="/hero-img.svg"
        width={600}
        height={600}
        alt="Hero Image"
      />
    </div>
  );
}
export default Hero;
