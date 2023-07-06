import Project from "@/components/Project";
import Collab from "@/components/Collab";
import Description from "@/components/Description";
function Work() {
  return (
    <>
      <div className="bg-gray-950 md:px-24 px-8 pt-8 font">
        <Description />

        <Project
          name="Teen Psycholgy Blog"
          src={"/logo1.svg"}
          text="Through the creation of a captivating blog for a psychologist, I implemented strategic solutions that had an impactuous effect on the business. By crafting compelling content, optimizing for search engines, and integrating user-friendly features, the blog became a powerful tool for attracting new clients, establishing expertise, and fostering meaningful connections. Growth was evident as the business expanded its reach and experienced increased engagement and conversions."
          url="https://teen-psychology.vercel.app"
          repo="https://github.com/antoniogrosu/blog"
          logos={["/next.svg", "/auth.svg", "/firebase.svg", "/tailwind.svg"]}
          features={[
            "Authentication",
            "Custom Posting System",
            "Server Side Rendering",
          ]}
        />
        <Project
          name="TheVokabulary Dictionary"
          src={"/logo2.svg"}
          text="Introducing my online dictionary project! With a sleek and user-friendly interface, it offers fast and accurate word meanings, synonyms, and related information. Say goodbye to tedious searches and welcome instant language assistance. It's a valuable addition to my portfolio, showcasing my ability to create useful and efficient applications."
          url="https://thevokabulary.vercel.app/"
          repo="https://github.com/antoniogrosu/thevokabulary"
          logos={["/react.svg", "/router.svg", "/tailwind.svg"]}
          features={[
            "Intuitive UI",
            "Routes on Single Page App",
            "High Speed responses from API ",
          ]}
        />
      </div>
      <Collab />
    </>
  );
}
export default Work;
