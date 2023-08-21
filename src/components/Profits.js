import Image from "next/image";
function Profits() {
  return (
    <div className="lg:py-44 md:py-36 py-24 font text-gray-50 flex items-center justify-between gap-16">
      <div>
        <h1 className="md:text-6xl text-4xl">
          Are you looking to elevate your online presence and skyrocket your
          profits?
        </h1>
        <Image
          priority
          className="lg:hidden block mt-16"
          src="/biz-img.svg"
          width={650}
          height={340}
          alt="Business Chart"
        />
        <div className="block md:flex items-end justify-between">
          <div className="lg:w-10/12 w-full mt-24">
            <p className="w-full">
              As an experienced web developer with a passion for crafting
              exceptional websites and web applications, I am here to help you
              achieve your goals.
            </p>
            <p className="mt-8 w-full">
              By leveraging my technical expertise in web development and my
              keen eye for design, I can create an outstanding website or web
              app that not only captivates your audience but also drives
              conversions and boosts your bottom line.
            </p>
          </div>
        </div>
      </div>
      <Image
        priority
        className="hidden lg:block"
        src="/biz-img.svg"
        width={850}
        height={350}
        alt="Business Chart"
      />
    </div>
  );
}
export default Profits;
