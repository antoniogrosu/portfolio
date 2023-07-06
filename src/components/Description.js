import Image from "next/image";
function Description() {
  return (
    <div className="py-24 font text-gray-50 md:flex-row flex-col flex items-center justify-between">
      <div className="md:w-5/12">
        <h1 className="text-4xl">My technologies</h1>
        <div className="grid grid-cols-4 mt-8 gap-4 md:hidden mx-auto">
          <Image
            src="/react.png"
            alt="React.js Logo"
            width={240}
            height={240}
          />
          <Image src="/next.png" alt="Next.js Logo" width={240} height={240} />
          <Image
            src="/firebase.png"
            alt="Firebase Logo"
            width={240}
            height={240}
          />

          <Image
            src="/tailwind.png"
            alt="Tailwind Logo"
            width={240}
            height={240}
          />
        </div>
        <p className="mt-8">
          In my exhilarating journey, I discovered the true potential of React,
          Next.js, Tailwind, and Firebase. <br />
          React's modular approach empowered me to build reusable UI components,
          while Next.js elevated my projects with blazing-fast page loads and
          seamless navigation.
          <br /> With Tailwind CSS, I effortlessly crafted stunning designs
          without the repetitive CSS hassle. <br />
          And Firebase's scalable backend services ensured my applications were
          always secure and up to date.
        </p>
        <p className="mt-12 text-gray-50/50 tracking-widest">
          see my projects &#10549;{" "}
        </p>
      </div>
      <div className="hidden md:grid grid-cols-2 gap-4 md:w-4/12">
        <Image src="/react.svg" alt="React.js Logo" width={240} height={240} />
        <Image src="/next.svg" alt="Next.js Logo" width={240} height={240} />
        <Image
          src="/firebase.png"
          alt="Firebase Logo"
          width={240}
          height={240}
        />

        <Image
          src="/tailwind.png"
          alt="Tailwind Logo"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
}

export default Description;
