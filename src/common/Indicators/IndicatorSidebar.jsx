import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import IconExpend from '../../assets/images/icon-expand (2).svg';
import RevertExpend from '../../assets/images/icon-expand (1).svg';

const topicos = ['Políticas', 'Parceiros', 'Temas', 'Ano'];

const IndicatorSidebar = () => {
  const [open, setOpen] = React.useState('');

  const handleClick = (menu) => {
    setOpen(!open);
  };

  return (
    <>
      <Typography color={'black'} sx={{ fontSize: '24px', my: 1, fontWeight: 600 }}>
        Tópicos
      </Typography>
      <List
        sx={{ width: '100%', maxWidth: 360, color: 'black' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {topicos.map((menu) => (
          <>
            <ListItemButton disableGutters disableRipple disableTouchRipple onClick={() => handleClick(menu)}>
              <ListItemText>
                <Typography color="#0066A4" fontWeight={600}>
                  {menu}
                </Typography>
              </ListItemText>
              {open ? <img src={RevertExpend} alt="" /> : <img src={RevertExpend} alt="" />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Disabled" />
              </FormGroup>
            </Collapse>
          </>
        ))}
      </List>
    </>
  );
};

export default IndicatorSidebar;
