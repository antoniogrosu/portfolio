import Link from "next/link";

function Navbar() {
  return (
    <nav className="z-10 fixed backdrop:fixed w-full cursor-pointer md:text-sm font flex item-center justify-between text-gray-50 px-8 py-4  lg:px-48 md:px-36 px-8 md:py-6 bg-gray-950">
      <h1 className="font-bold">
        <Link href="/">antoniogrosu.dev</Link>
      </h1>
      <div className="flex items-center justify-between w-3/12  lg:w-1/12 ">
        <p>
          {" "}
          <Link href="/work">my work</Link>
        </p>
        <Link
          className="p-1"
          href="mailto:your-email@example.com?subject=Collaboration&body=I%20would%20like%20to%20work%20with%20you.%20Could%20we%20schedule%20a%20call%3F"
        >
          collab{" "}
        </Link>{" "}
      </div>
    </nav>
  );
}
export default Navbar;
