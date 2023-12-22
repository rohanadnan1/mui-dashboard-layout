import { InputBase } from "@mui/material";
import { NavbarMainBox, SearchButton, InputArea, Heading } from "./navStyles";
import { Search as SearchIcon } from "@mui/icons-material";
import { NavbarWrapper } from "../stylesheets";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarMainBox>
      <Heading>Navbar</Heading>
      <InputArea>
        <InputBase
          placeholder="Search your stuff"
          sx={{
            backgroundColor: " #d3d3d3",
            padding: "3px",
            borderRadius: "5px 0 0 5px",
            paddingLeft: "10px",
            fontSize: "15px",
            color: 'black'
          }}
        />
        <SearchButton>
          <SearchIcon sx={{ color: "#fff" }} />
        </SearchButton>
      </InputArea>
    </NavbarMainBox>
    </NavbarWrapper>
  );
};

export default Navbar;
