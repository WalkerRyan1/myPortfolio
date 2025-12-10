import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" color="foreground">
          My App
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
