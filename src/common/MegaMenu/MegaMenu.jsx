import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { useTranslation } from 'react-i18next';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { megaMenu, popoverPaper, menuItem, link } from './styles';

import { GREY } from '../../theme/palette';

const MenuItemListItem = ({ linkItem, imageUrl, title, description, isSubMenu = false }) => (
  <ListItem disablePadding sx={{ pl: isSubMenu ? 4 : 0 }}>
    <ListItemButton component={linkItem.length === 0 ? 'div' : RouterLink} to={linkItem} sx={{ link }}>
      <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
        <img src={imageUrl} alt={''} style={{ width: 24, height: 24 }} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="subtitle1"
            fontFamily={'Poppins'}
            color={linkItem.length > 0 ? 'primary.lighter' : 'text.secondary'}
            fontWeight={600}
          >
            {title}
          </Typography>
        }
        secondary={
          <Typography variant="subtitle1" fontFamily={'Roboto'} fontWeight={'regular'} color={GREY[900]}>
            {description}
          </Typography>
        }
      />
    </ListItemButton>
  </ListItem>
);

const MegaMenu = ({ anchorEl, setAnchorEl, menuList }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="mega-menu"
      sx={megaMenu}
      PaperProps={{
        sx: popoverPaper,
      }}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img src={menuList.imageUrl} alt={menuList.title} />
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: '6%',
            }}
          >
            <Typography variant="h4" color={'primary.dark'} gutterBottom mb={2}>
              {t(menuList.title)}
            </Typography>
            <Typography variant="subtitle1" fontFamily={'Roboto'} fontWeight={'regular'} color={GREY[900]}>
              {menuList.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3.5}>
          <List>
            {menuList.menuOne.map((item) => (
              <React.Fragment key={item.title}>
                <MenuItemListItem
                  linkItem={item.link}
                  title={t(item.title)}
                  imageUrl={item.iconUrl}
                  description={item.description}
                />
                {item.subMenu.length > 0 && (
                  <List>
                    {item.subMenu.map((menuItem) => (
                      <MenuItemListItem
                        linkItem={menuItem.link}
                        title={t(menuItem.title)}
                        imageUrl={menuItem.iconUrl}
                        description={menuItem.description}
                        isSubMenu
                        key={menuItem.title}
                      />
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={3.5}>
          <List>
            {menuList.menuTwo.map((item) => (
              <React.Fragment key={item.title}>
                <MenuItemListItem
                  linkItem={item.link}
                  title={t(item.title)}
                  imageUrl={item.iconUrl}
                  description={item.description}
                />
                {item.subMenu.length > 0 && (
                  <List>
                    {item.subMenu.map((menuItem) => (
                      <MenuItemListItem
                        linkItem={menuItem.link}
                        title={t(menuItem.title)}
                        imageUrl={menuItem.iconUrl}
                        description={menuItem.description}
                        isSubMenu
                        key={menuItem.title}
                      />
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default MegaMenu;
