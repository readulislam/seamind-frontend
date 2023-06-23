import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Logo2 from '../../../assets/images/logo-alt.svg';
import Logo from '../../../assets/images/logo-xl.svg';

import MegaMenu from '../../../common/MegaMenu';
import TopNavbarMenu from '../../../common/TopNavbarMenu';
import { toggleActions } from '../../../store/ToggleSlice';
import { navItems, policyMegaMenu, teamMegaMenu } from '../../../utils/mockData';
import Sidebar from '../Sidebar';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main,
  position: 'absolute',
  boxShadow: 'none',
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const {
    auth: { isLoggedIn },
  } = useSelector((state) => state);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const path = location.pathname;
  // console.log(location);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMegaMenuValue, setOpenMegaMenuValue] = React.useState('');
  const navigate = useNavigate();
  const { toggle } = useSelector((state) => state);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavButton = React.useCallback(
    (url) => {
      navigate(url);
    },
    [navigate]
  );

  const handleOpenMegaMenu = (e, val) => {
    setAnchorEl(e.currentTarget);
    setOpenMegaMenuValue(val);
  };

  const setMegaMenuElement = React.useCallback(
    (value) => {
      setAnchorEl(value);
    },
    [setAnchorEl]
  );
  const handleLangChange = (event) => {
    dispatch(toggleActions.switchLanguage(event.target.value));
  };

  useEffect(() => {
    i18n.changeLanguage(toggle.language);
    // console.log('change language');
  }, [i18n, toggle]);
  // console.log(toggle);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar>
        <Container maxWidth="xl">
          <Toolbar>
            {/* mobile toggle icon */}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box variant="" component="div" sx={{ flexGrow: 1, paddingY: 4, display: { xs: 'none', sm: 'block' } }}>
              <Box
                component="img"
                src={path === '/' ? Logo : Logo2}
                alt=""
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavButton('/')}
              />
            </Box>

            <Box sx={path !== '/' && { display: 'flex', flexDirection: 'row-reverse', gap: 2, alignItems: 'center' }}>
              <TopNavbarMenu handleLangChange={handleLangChange} />

              <Box sx={{ display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
                {navItems.map((item) =>
                  item.isExternal ? (
                    <Button
                      key={item.id}
                      sx={{ color: '#fff', fontWeight: 500, letterSpacing: 0.4 }}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      component="a"
                    >
                      {t(item.title)}
                    </Button>
                  ) : (
                    <Button
                      key={item.id}
                      sx={{ color: '#fff', fontWeight: 500, letterSpacing: 0.4 }}
                      onClick={(e) =>
                        item.isMegaMenu ? handleOpenMegaMenu(e, item.isMegaMenuValue) : handleNavButton(item.url)
                      }
                    >
                      {t(item.title)}
                      {item.isMegaMenu && <ExpandMoreIcon />}
                    </Button>
                  )
                )}
                <MegaMenu
                  anchorEl={anchorEl}
                  setAnchorEl={setMegaMenuElement}
                  menuList={openMegaMenuValue === navItems[0].isMegaMenuValue ? policyMegaMenu : teamMegaMenu}
                />
                <Link to="/editor">
                  <ButtonBase sx={{ px: 3, ml: 1, py: 1.5, background: '#0065A4', borderRadius: 4, color: '#FFFF' }}>
                    <Typography
                      color={'white'}
                      sx={{ textDecoration: 'none', fontWeight: 600, letterSpacing: 0.4 }}
                      variant="body"
                    >
                      Editor
                    </Typography>
                  </ButtonBase>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>
      {/* sidebar start */}
      <Sidebar handleDrawerToggle={handleDrawerToggle} handleNavButton={handleNavButton} mobileOpen={mobileOpen} />

      {/* sidebar end */}
    </Box>
  );
};

export default Navbar;
