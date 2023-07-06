export default function Footer() {
  return (
    <div className="px-8 py-24 md:px-24 font text-gray-50 bg-gray-950 flex md:flex-row flex-col items-start md:items-center justify-between">
      <h3 className="font-bold text-xl">Copyright © Antonio Grosu 2023</h3>
      <div className="mt-8 md:flex-row flex-col flex items-center justify-around p-4 gap-8 md:w-5/12">
        <p className="underline">portfolio</p>
        <p className="underline">linkedin</p>
        <p className="underline">email</p>
      </div>
    </div>
  );
}
