import Link from "next/link";
function Collab() {
  return (
    <div className="lg:py-44 md:py-36 py-24 lg:px-48 md:px-36 px-8 font bg-gray-800">
      <div className="flex flex-col md:flex-row items-top justify-between">
        <h1 className="text-4xl">
          Let's embark on this{" "}
          <span className="relative">
            <span
              className=" font-bold block bg-gradient-to-r from-green-200 to-fuchsia-500 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              transformative journey
            </span>
          </span>
        </h1>
        <p className="md:w-8/12 md:mt-0 mt-8">
          Together, we will create a website or web app that goes above and
          beyond your expectations, driving substantial growth in your business
          and ensuring a strong return on your investment.
        </p>
      </div>
      <button className="border-r-8 border-2 border-gray-950  mt-8 md:mt-16 mr-8 text-gray-950 font-semibold rounded-full px-4 py-2 bg-gradient-to-r from-green-200 to-fuchsia-400">
        <Link
          className="p-1"
          href="mailto:your-email@example.com?subject=Collaboration&body=I%20would%20like%20to%20work%20with%20you.%20Could%20we%20schedule%20a%20call%3F"
        >
          Send an email{" "}
        </Link>
      </button>
    </div>
  );
}

export default Collab;
