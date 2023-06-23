import { AccountCircle } from '@mui/icons-material';
import { Avatar, Box, Button, FormControl, IconButton, Menu, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageIcon from '../../assets/images/icon-language.svg';
import SearchIcon from '../../assets/images/icon-search.svg';
import { authActions } from '../../store/authSlice';

const menuStyles = { color: '#fff', fontWeight: 500, letterSpacing: 0.4 };

const TopNavbarMenu = ({ handleLangChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;
  const {
    toggle,
    auth: { isLoggedIn, user },
  } = useSelector((state) => state);

  const logOutHandler = () => {
    dispatch(authActions.logOut());
    setAnchorEl(null);
    navigate('/login');
  };
  // console.log(location.pathname);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      sx={{ marginTop: 6, color: 'black' }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem sx={{ color: 'black' }} onClick={handleMenuClose}>
        Name: {user.name} {user.surname}
      </MenuItem>
      <MenuItem sx={{ color: 'black' }} onClick={handleMenuClose}>
        Email: {user.email}
      </MenuItem>
      <MenuItem onClick={logOutHandler} sx={{ ...menuStyles, order: 3, color: 'black' }}>
        {/* <Avatar  variant="square" src={LogOutIcon} alt="" sx={{ width: 18, height: 18, background:'#003E65' }} />
        {path === '/' && t('Enter')} */}
        LogOut
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
        <Button
          sx={path === '/' ? { ...menuStyles, order: 0 } : { ...menuStyles, order: 1 }}
          startIcon={<Avatar variant="square" src={SearchIcon} alt="" sx={{ width: 18, height: 18 }} />}
        >
          {path === '/' && t('Search')}
        </Button>

        <Button
          sx={path === '/' ? { ...menuStyles, order: 1 } : { ...menuStyles, order: 0 }}
          startIcon={<Avatar variant="square" src={LanguageIcon} alt="" sx={{ width: 18, height: 18 }} />}
        >
          <FormControl sx={{ color: 'white' }}>
            <Select
              disableUnderline
              icon
              sx={{ color: 'white' }}
              defaultValue={toggle.language}
              variant="standard"
              //  value={1}
              onChange={handleLangChange}
              // displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'en'}>
                EN/<span id="lineThrough">PT</span>
              </MenuItem>
              <MenuItem value={'pt'}>
                PT/<span id="lineThrough">EN</span>
              </MenuItem>
            </Select>
          </FormControl>
        </Button>

        {isLoggedIn ? (
          <IconButton
            sx={{ order: 3 }}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        ) : (
          <Button sx={{ order: 3 }}>
            <Link to="/login">
              <Typography sx={{ color: 'white', fontWeight: 400, fontSize: 16 }}>Login</Typography>
            </Link>
          </Button>
        )}
      </Box>

      {anchorEl && renderMenu}
    </>
  );
};

export default TopNavbarMenu;

/*  <Box pb={path !== '/' ? 0 : 2} sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
                {path === '/'
                  ? topNavItems.map((item) => (
                      <Button
                        onClick={() => handleMenu2(item.id)}
                        key={item.id}
                        sx={{ color: '#fff', fontWeight: 500, letterSpacing: 0.4 }}
                        startIcon={<Avatar variant="square" src={item.img} alt="" sx={{ width: 18, height: 18 }} />}
                      >
                         <img src={item.img} alt="" /> } {item.name}
                        </Button>
                        ))
                      : topNavItems2.map((item) => (
                          <Button
                            onClick={() => handleMenu1(item.id)}
                            key={item.id}
                            sx={{ color: '#fff', fontWeight: 500, letterSpacing: 0.4 }}
                            startIcon={<Avatar variant="square" src={item.img} alt="" sx={{ width: 18, height: 18 }} />}
                          >
                            {/* <img src={item.img} alt="" /> }
                            {item.name}
                          </Button>
                        ))}
                  </Box> */
