import { TabList } from '@mui/lab';
import { Avatar, Tab, styled } from '@mui/material';
import React from 'react';

export const commonShadow = {
  border: ' 1px solid #EBEBEB',
  boxShadow: '0px 6px 28px #00000014',
};

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  // fontWeight: theme.typography.fontWeightRegular,
  // fontSize: theme.typography.pxToRem(15),
  // marginRight: theme.spacing(1),

  textAlign: 'left',
  borderRadius: '5px',

  //   width: '119px',
  backgroundColor: '#ffffff',
  '&.Mui-selected': {
    backgroundColor: '#F0F6FA',
    color: '',
    border: '1px solid #0066A4',
    borderRadius: '5px',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#ffffff',
  },
}));

const CustomTabList = ({ orientation, tabListHandler, tabListData, iconPosition, tabSx }) => {
  return (
    <>
      <TabList
        orientation={orientation}
        indicatorColor="white"
        onChange={tabListHandler}
        aria-label="lab API tabs example"
      >
        {tabListData.map((data) => (
          <CustomTab
            sx={{ ...tabSx }}
            iconPosition={iconPosition}
            key={data.id}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={data.img} alt="" />
              </Avatar>
            }
            label={data.title}
            value={data.id}
          />
        ))}
      </TabList>
    </>
  );
};

export default CustomTabList;
