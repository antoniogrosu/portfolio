import Image from "next/image";
function Profits() {
  return (
    <div className="py-24 font text-gray-50">
      <h1 className="text-4xl">
        Are you looking to elevate your online presence and skyrocket your
        profits?
      </h1>
      <Image
        priority
        className="md:hidden block mt-16"
        src="/biz-img.svg"
        width={650}
        height={340}
        alt="Business Chart"
      />
      <div className="block md:flex items-end justify-between">
        <div className="md:w-8/12 w-full mt-16">
          <p className="w-10/12">
            As an experienced web developer with a passion for crafting
            exceptional websites and web applications, I am here to help you
            achieve your goals.
          </p>
          <p className="mt-8 w-10/12">
            By leveraging my technical expertise in web development and my keen
            eye for design, I can create an outstanding website or web app that
            not only captivates your audience but also drives conversions and
            boosts your bottom line.
          </p>
        </div>
        <Image
          priority
          className="hidden md:block"
          src="/biz-img.svg"
          width={450}
          height={140}
          alt="Business Chart"
        />
      </div>
    </div>
  );
}
export default Profits;
