import Link from "next/link";
export default function Footer() {
  return (
    <div className=" lg:py-44 md:py-36 py-24 lg:px-48 md:px-36 px-8 font text-gray-50 bg-gray-950 flex md:flex-row flex-col items-start md:items-center justify-between">
      <h3 className="font-bold text-xl">Copyright © Antonio Grosu 2023</h3>
      <div className="mt-8 md:flex-row flex-col flex items-start justify-around p-4 gap-8 md:w-5/12">
        <Link
          href="https://github.com/antoniogrosu"
          className="underline"
          target="blank"
        >
          github
        </Link>
        <Link href="/work" className="underline" target="blank">
          portfolio
        </Link>
        <Link
          href="https://www.linkedin.com/in/antonio-grosu-787110246/"
          className="underline"
          target="blank"
        >
          linkedin
        </Link>
      </div>
    </div>
  );
}
