function Navbar() {
  return (
    <nav className="fixed w-full cursor-pointer md:text-sm font flex item-center justify-between text-gray-50 px-8 py-4 md:px-24 md:py-6 bg-gray-950">
      <h1 className="font-bold">antoniogrosu.dev</h1>
      <div className="flex items-center justify-between w-1/3 md:w-1/4 ">
        <p>my work</p>
        <p>collab</p>
      </div>
    </nav>
  );
}
export default Navbar;
