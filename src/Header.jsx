const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-cyan-950 text-white">
      {/* Logo Section (left corner) */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-8 w-auto mr-4"
        />
      </div>

      {/* Navigation Section (right corner) */}
      <ul className="flex items-center space-x-6">
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        <li className="border border-white px-4 py-2 rounded hover:text-gray-400 cursor-pointer">
          Log In
        </li>
      </ul>
    </div>
  );
};

export default Header;
