import * as React from "react";
import { styled, alpha } from "@material-ui/core/styles";
import {AppBar,Box,Container,Toolbar,IconButton,Typography,InputBase,Badge,Menu,MenuItem,Link,Divider} from "@material-ui/core";
import MoreIcon from '@material-ui/icons/More';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

// #region styled
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderBottom: "1px solid",
  borderColor: theme.palette.primary.light,
  boxShadow: "none",
  "& *": {
    color: theme.palette.secondary.contrastText,
  },
}));

const TopToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "flex-end",
  minHeight: "auto !important",
  "& hr": {
    margin: `0 ${theme.spacing(6)}`,
  },
}));

const MiddleToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const BottomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "flex-start",
  minHeight: "auto !important",
  padding: `${theme.spacing(1)} 0`,
  "& a": {
    paddingRight: theme.spacing(2),
  },
}));

const IconButtonVertical = styled(IconButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "0",
}));

const Search = styled("div")(({ theme }) => ({
  width:'100%',
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  right:0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width:'100%',
  color: "inherit",
  borderRadius: 100,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// #endregion styled

export default function MainAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingBasketOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
        >
          <Badge badgeContent={11} color="secondary">
            <AccountCircleOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} bgcolor="secondary.main">
      <AppBarStyled position="static" evaluation={0}>
        <Box py={2}>
          <Container>
            <TopToolbar>
              <Link href="#" underline="none">
                ขายสินค้ากับเรา
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link href="#" underline="none">
                ศูนย์ช่วยเหลือ
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link href="#" underline="none">
                ดาวน์โหลด
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link href="#" underline="none">
                ลงชื่อเข้าใช้งาน
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link href="#" underline="none">
                สมัครสมาชิก
              </Link>
            </TopToolbar>
          </Container>
        </Box>
        <Box borderBottom="1px solid" borderColor="primary.light">
          <Container>
            <MiddleToolbar>
              <Typography
                variant="h4"
                fontWeight="bold"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Mondotouch
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButtonVertical
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingBasketOutlinedIcon />
                  </Badge>
                  <Typography>ตะกร้า</Typography>
                </IconButtonVertical>
                <IconButtonVertical
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="secondary">
                    <AccountCircleOutlinedIcon />
                  </Badge>
                  <Typography>บัญชี</Typography>
                </IconButtonVertical>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </MiddleToolbar>
          </Container>
        </Box>
        <Box>
          <Container>
            <BottomToolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Link href="#" underline="none">
                หน้าแรก
              </Link>
              <Link href="#" underline="none">
                เกี่ยวกับเรา
              </Link>
              <Link href="#" underline="none">
                ประโยชน์
              </Link>
              <Link href="#" underline="none">
                กฎหมายปัจจุบัน
              </Link>
            </BottomToolbar>
          </Container>
        </Box>
      </AppBarStyled>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
