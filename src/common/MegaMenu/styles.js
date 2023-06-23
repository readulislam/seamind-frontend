const megaMenu = (theme) => ({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   width: '100%', // full width
  //   padding: '16px',
  '& .MuiMenu-list': {
    pt: 0,
    pb: 0,
    pl: 0,
    pr: 0,
  },
  // //   backgroundColor: theme.palette.background.paper,
  //   boxShadow: theme.shadows[1],
});

const popoverPaper = (theme) => ({
  width: '100%',
  // top: '15% !important',
  maxWidth: 'calc(100% - 0px)',
  left: '0px !important',
});

const menuItem = (theme) => ({
  minWidth: '200px', // adjust width as needed
  display: 'flex',
  alignItems: 'center',
});

const menuItemText = (theme) => ({
  marginLeft: theme.spacing(1),
});

const link = {
  textDecoration: 'none',
  color: 'inherit',
};

export { megaMenu, popoverPaper, menuItem, menuItemText, link };
