import Card from "./Card-Approach";
function Approach() {
  return (
    <div className="py-44 font text-gray-50">
      <h1 className="text-4xl">My approach towards projects</h1>
      <p className="mt-8">
        When it comes to boosting profits, I have you covered. I employ
        industry-leading practices such as:
      </p>

      <div className="mt-14 grid lg:grid-cols-4 gap-6 md:gap-8">
        <Card
          short="SEO"
          title="S.E. Optimization"
          description="Search engine optimization (SEO) to enhance your online visibility, driving organic traffic to your site. "
        ></Card>
        <Card
          short="CTA"
          title="Smart Placed CTAs"
          description="From strategically placed call-to-action buttons to streamlined checkout processes, every element of your website or web app is optimized for maximum conversions. "
        />
        <Card
          short="UX"
          title="User Experience Design"
          description="With a focus on user experience (UX) design, I ensure that your visitors not only find what they're looking for effortlessly but also enjoy a seamless journey from start to finish. "
        ></Card>
        <Card
          short="SSR"
          title="Server Side Rendering"
          description="With server-side rendering and speed optimization, your website will reach new heights in terms of online visibility and user experience. By implementing these features, you can attract organic traffic and enhance your site's performance. "
        ></Card>
      </div>
    </div>
  );
}
export default Approach;
