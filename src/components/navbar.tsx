"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";

export default function DefaultNavbar() {
  return (
    <div className="dark:text-white">
      <Navbar fluid className="border-y border-gray dark:bg-gray-900">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Radhitka Adha
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
          <Navbar.Link href="#"></Navbar.Link>
        </Navbar.Collapse>
        <div className="flex text-center">
          <DarkThemeToggle />
        </div>
      </Navbar>
    </div>
  );
}
