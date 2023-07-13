import React from "react";

interface HeaderProps {
  children?: React.ReactNode; // 👈️ type children
  name?: String;
  className?: String;
}

const Header: React.FC<HeaderProps> = ({ children, name, className }) => {
  const newClassName = className === undefined ? "" : className;

  return (
    <header
      className={`flex flex-col items-center justify-center bg-white dark:bg-gray-800 min-h-screen text-lg text-black dark:text-white ${newClassName}`}
    >
      <p>{name}</p>
      {children}
    </header>
  );
};

export default Header;
