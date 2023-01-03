const { default: Link } = require("next/link");
const { default: DarkModeButton } = require("../components/DarkModeButton");

const Header = () => {
  const navigation = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/posts" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="h-16 mb-14 flex  items-center justify-between ">
      <div>
        <ul className="flex gap-4 font-bold text-black">
          {navigation.map((nav) => (
            <Link
              href={nav.path}
              className="font-semibold text-white-400 dark:text-white hover:text-gray-400 "
            >
              {nav.label}
            </Link>
          ))}
        </ul>
      </div>
      <DarkModeButton />
    </header>
  );
};
export default Header;
