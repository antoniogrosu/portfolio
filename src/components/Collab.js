function Collab() {
  return (
    <div className="px-8 py-24 md:p-24 font bg-gray-800">
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
        Send an Email
      </button>
      <button className="border-2 border-gray-50  mt-16  text-gray-50 font-semibold rounded-full px-4 py-2 bg-trasnparent">
        See my work
      </button>
    </div>
  );
}

export default Collab;
