import { useSelector } from 'react-redux';
import { TabList } from '@mui/lab';
import { Avatar, Box, Tab, styled } from '@mui/material';
import React, { useState } from 'react';

import iconEditorFormatar from '../../assets/images/icon-editor--formatar.svg';
import iconAlert from '../../assets/images/icon-alertalt2.svg';
import iconEditorRepresentar from '../../assets/images/icon-editor--representar.svg';
import iconEditorSelecionar from '../../assets/images/icon-editor--selecionar.svg';
import iconEditor from '../../assets/images/icon-editor-exportar.svg';
import iconEditorGravar from '../../assets/images/icon-editor-gravar.svg';

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#0066A4',
  borderRadius: '5px',
  width: '119px',
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

const EditorTab = ({ tabHandler }) => {
  const {
    auth: { user, isLoggedIn },
  } = useSelector((state) => state || {});
  console.log(user);
  return (
    <>
      <Box maxWidth={'md'} sx={{ background: '#00000014', padding: 1, borderRadius: 1, marginY: 4 }}>
        <TabList indicatorColor="white" onChange={tabHandler} aria-label="lab API tabs example">
          <CustomTab
            // disabled={user.user_type.name_en === 'Public' && true}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditorSelecionar} alt="" />
              </Avatar>
            }
            label="Selecionar"
            value="1"
          />
          <CustomTab
            // disabled={user.user_type.name_en === 'Public' && true}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditorFormatar} alt="" />
              </Avatar>
            }
            label="Formatar"
            value="2"
          />
          <CustomTab
            disabled={
              user?.user_type?.name_en === 'Public' || user?.user_type?.name_en === 'Partner' || (!isLoggedIn && true)
            }
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditorRepresentar} alt="" />
              </Avatar>
            }
            label="Representar"
            value="3"
          />
          <CustomTab
            disabled={
              user?.user_type?.name_en === 'Public' || user?.user_type?.name_en === 'Partner' || (!isLoggedIn && true)
            }
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditorGravar} alt="" />
              </Avatar>
            }
            label="Gravar"
            value="4"
          />
          <CustomTab
            disabled={user?.user_type?.name_en === 'Public' || (!isLoggedIn && true)}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditor} alt="" />
              </Avatar>
            }
            label="Exportar"
            value="5"
          />
          <CustomTab
            disabled={user?.user_type?.name_en === 'Public' || (!isLoggedIn && true)}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditor} alt="" />
              </Avatar>
            }
            label="Imprimir"
            value="6"
          />
          <CustomTab
            disabled={user?.user_type?.name_en === 'Public' || (!isLoggedIn && true)}
            icon={
              <Avatar sx={{ bgcolor: 'transparent' }} variant="square" alt="test avatar">
                <img src={iconEditor} alt="" />
              </Avatar>
            }
            label="Metadados"
            value="7"
          />
        </TabList>
      </Box>
    </>
  );
};

export default EditorTab;
