import React from "react";
import {
  StyledLink,
  StyledNavBrand,
  StyledNavItems,
  StyledNavbar,
} from "../styled/Navbar";
import { Accent } from "../styled/Random";

export default function NavBar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Learn.Build.<Accent>Type.</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
