export const CardStyles = (bgColor) => {
  return {
    background: bgColor,
    color: 'white',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
    width: '240px',
    minHeight: '270px',
    padding: '10px',
    //   height: '20vh',
    // [theme.breakpoints.up('sm')]: {
    //   minHeight: 800,
    //   maxHeight: 1300,
    // },
  };
};
