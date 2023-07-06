import Image from "next/image";
import Link from "next/link";

function Project(props) {
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  return (
    <div className="py-24">
      <h1 className="text-4xl font mb-14">{props.name}</h1>
      <div className="flex md:flex-row flex-col items-start justify-between font">
        <div className="w-full md:w-4/12">
          <Image
            priority
            src={props.src}
            alt={"Business Logo"}
            width={320}
            height={320}
            className="object-cover"
          />
        </div>
        <div className="md:w-7/12 w-full">
          <p className="text-gray-50 md:mt-0 mt-8">{props.text}</p>
          <button className="rounded-full mt-8 px-4 mr-4 py-2 bg-gradient-to-r from-green-200 to-fuchsia-500">
            <Link href={props.url} target="blank">
              visit live
            </Link>
          </button>
          <button
            className="rounded-full px-4 py-2 bg-transparent border-2 border-gray-50"
            style={{ boxSizing: "border-box" }}
          >
            <Link href={props.repo} target="blank">
              github repo
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-12 flex md:flex-row flex-col items-start justify-between">
        <div className="md:w-5/12">
          <h3 className="text-gray-50/50 tracking-widest text-xl">TECHSTACK</h3>
          <div className="flex items-center justify-start gap-6 mt-4">
            {props.logos.map((item) => {
              return (
                <div className="w-2/12" key={generateId()}>
                  <Image
                    src={item}
                    alt="logo"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-5/12 mt-12">
          <h3 className="text-gray-50/50 tracking-widest text-xl">
            KEY FEATURES
          </h3>
          <div className="flex flex-col items-start mt-4 gap-1 justify-between">
            {props.features.map((item) => {
              return <p key={generateId()}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
