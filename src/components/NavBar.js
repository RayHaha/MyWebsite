import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ThemeSwitch from "./ThemeSwitch";
import FormControlLabel from "@mui/material/FormControlLabel";

const pages = ["Home", "Experience", "Skils", "Projects", "Contact"];

const NavBar = (props) => {
  const { mode, themeOnClick } = props;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="secondary"
      sx={{
        height: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: mode === "dark" ? "white" : "black",
              textDecoration: "none",
            }}
          >
            YU-JUI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={mode === "dark" ? "white" : "black"}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: -1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: mode === "dark" ? "white" : "black",
              textDecoration: "none",
            }}
          >
            YU-JUI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <AnchorLink
                key={page}
                href={"#" + page}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: mode === "dark" ? "white" : "black",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </AnchorLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: -1 }}>
            <FormControlLabel
              control={
                <ThemeSwitch
                  checked={mode === "dark"}
                  onChange={themeOnClick}
                />
              }
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
