import React from "react";
import {
  ProfileMenuContainer,
  ProfileMenuLink,
  ProfileMenuButton
} from "./navbarStyles";

const NavbarProfileMenu = ({ open }) => {
  return open ? (
    <ProfileMenuContainer>
      <ProfileMenuLink href="https://open.spotify.com" target="_blank">
        Account
      </ProfileMenuLink>
      <ProfileMenuButton onClick={() => alert("Sign Session")}>
        Logout
      </ProfileMenuButton>
    </ProfileMenuContainer>
  ) : null;
};

export default NavbarProfileMenu;
