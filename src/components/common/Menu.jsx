import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const links = [
  { href: "/", text: "Inicio" },
  { href: "/pokemons/1", text: "Todos" },
  { href: "/favoritos", text: "Favoritos" },
];

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu ? (
        <button
          onClick={toggleOpenMenu}
          className=" flex items-center justify-center h-10 w-10 rounded cursor-pointer bg-white/30 hover:bg-white/50"
        >
          <RiMenu3Line />
        </button>
      ) : (
        <div className="absolute flex justify-center items-center inset-0 w-full bg-black/95 z-[99]">
          <button
            onClick={toggleOpenMenu}
            className="absolute top-6 right-6 flex items-center justify-center h-10 w-10 rounded cursor-pointer bg-white/30 hover:bg-white/50"
          >
            <IoMdClose size={24} />
          </button>
          <div className="flex flex-col justify-center items-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-4xl hover:text-yellow-400"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Menu;
