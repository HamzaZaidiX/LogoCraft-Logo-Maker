import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuList = [
    {
      id: 1,
      name: "Icons",
    },
    {
      id: 2,
      name: "Background",
    },
    {
      id: 3,
      name: "Upgrade",
    },
  ];
  return (
    <div className="flex flex-col h-screen border shadow-md">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            key={index}
            className={`p-2 text-lg px-7 text-gray-400 my-2 cursor-pointer hover:bg-[#a5a4a4] hover:text-white ${
              activeIndex == index && "bg-primary text-white"
            }`}
          >
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;