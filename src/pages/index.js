import Hero from "@/components/Hero";
import Profits from "@/components/Profits";
import Approach from "@/components/Approach";
import Collab from "@/components/Collab";
function Homepage() {
  return (
    <>
      <div className="bg-gray-950 lg:px-48 md:px-36 px-8 pt-8 font">
        <Hero />
        <Profits />
        <Approach />
      </div>
      <Collab />
    </>
  );
}

export default Homepage;
