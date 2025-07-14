const Header = () => {
  return (
    <header className="bg-red-600 text-white flex justify-between items-center px-4 py-2">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold">⦿+</div>
        <input
          type="text"
          placeholder="Search for Orders, Returns, or Items"
          className="px-3 py-1 rounded text-black w-96"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm">HELP CENTER</button>
        <div className="flex items-center gap-1 text-sm">PROFILE ▼</div>
      </div>
    </header>
  );
};

export default Header;
