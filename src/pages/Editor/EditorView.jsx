import { useSelector } from 'react-redux';
import * as FlexmonsterReact from 'react-flexmonster';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import iconRight from '../../assets/images/icon-right.svg';
import iconAlert from '../../assets/images/icon-alertalt2.svg';
import iconEditorFormatar from '../../assets/images/icon-editor--formatar.svg';
import { lists, lists1, representarType } from '../../utils/mockData';
import EditorTab from './EditorTab';
import CustomTabList, { commonShadow } from '../../common/CustomTabList';
import { Demo } from '../../utils/Demo';

const EditorView = () => {
  const {
    auth: { user },
  } = useSelector((state) => state || {});
  const [tabValue, setTabValue] = useState('1');
  const [isTrue, setIsTrue] = useState(false);
  const [open, setOpen] = useState({});
  const [open1, setOpen1] = useState({});
  const [isRepresentor, setIsRepresentor] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [value1, setValue1] = useState('1');
  const data2 = null;
  const data3 = null;
  console.log(isTrue);
  let keyValue;
  let keyValue1;

  if (keyValue) {
    setOpen({ [keyValue]: false });
  }

  if (keyValue1) {
    setOpen({ [keyValue1]: false });
  }
  const handleClick = (key) => {
    setOpen({ [key]: !open[key] });
  };
  const handleClick2 = (key) => {
    setOpen1({ [key]: !open1[key] });
  };
  const tabHandler = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  return (
    <Box className="editor" id="editor" sx={{ marginTop: 12 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingY: 5 }}>
        <Typography>{'Início'}</Typography>
        <img src={iconRight} alt="" />
        <Typography>{'Editor'}</Typography>
      </Box>

      <Typography color={'black'} variant="h3">
        Condições de seleção
      </Typography>
      <Typography color={'gray'} marginTop={2}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </Typography>

      {/* <Stack
        maxWidth={'md'}
        sx={{ background: '#00000014', padding: 1, borderRadius: 1, marginY: 4 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditorSelecionar} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Selecionar</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditorFormatar} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Formatar</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditorRepresentar} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Representar</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditorGravar} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Gravar</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditor} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Exportar</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditor} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Imprimir</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F0F6FA',
            padding: 1,
            borderRadius: 1,
            width: '100px',
          }}
        >
          <img width={24} height={24} src={iconEditor} alt="" />
          <Typography sx={{ fontSize: '14px', paddingTop: 1 }}>Metadados</Typography>
        </Box>
      </Stack> */}

      <TabContext value={tabValue}>
        <EditorTab tabHandler={tabHandler} />

        <TabPanel value="1">
          <Grid pt={4} mb={12} container justifyContent={'space-between'}>
            {/* column 1 */}
            <Grid item xs={12} xl={3.8} alignItems="center" justify="center">
              <Paper sx={{ padding: 2, boxShadow: '0px 6px 28px #00000014' }}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      background: '#003E65',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                  >
                    1
                  </Box>
                  <Typography color={'#00253D'} fontWeight={600} variant="h5">
                    Indicadores a trabalhar
                  </Typography>
                </Stack>
                <Box sx={{ height: '520px', overflowY: 'auto', overflowX: 'hidden', marginTop: 5 }}>
                  <FormControl
                    sx={{
                      border: '1px solid #EBEBEB',
                      paddingX: 1,
                      paddingY: 2,
                      boxShadow: '0px 6px 28px #00000014',
                      borderRadius: 1,
                      color: '#0066A4',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      onChange={() => setIsTrue(!isTrue)}
                      value="top"
                      control={<Checkbox />}
                      label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                      labelPlacement="start"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      border: '1px solid #EBEBEB',
                      paddingX: 1,
                      paddingY: 2,
                      boxShadow: '0px 6px 28px #00000014',
                      borderRadius: 1,
                      color: '#0066A4',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      value="top"
                      control={<Checkbox />}
                      label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                      labelPlacement="start"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      border: '1px solid #EBEBEB',
                      paddingX: 1,
                      paddingY: 2,
                      boxShadow: '0px 6px 28px #00000014',
                      borderRadius: 1,
                      color: '#0066A4',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      value="top"
                      control={<Checkbox />}
                      label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                      labelPlacement="start"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      border: '1px solid #EBEBEB',
                      paddingX: 1,
                      paddingY: 2,
                      boxShadow: '0px 6px 28px #00000014',
                      borderRadius: 1,
                      color: '#0066A4',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      value="top"
                      control={<Checkbox />}
                      label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                      labelPlacement="start"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      border: '1px solid #EBEBEB',
                      paddingX: 1,
                      paddingY: 2,
                      boxShadow: '0px 6px 28px #00000014',
                      borderRadius: 1,
                      color: '#0066A4',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      value="top"
                      control={<Checkbox />}
                      label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
                      labelPlacement="start"
                    />
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            {/* column 2 */}
            <Grid item xs={12} xl={3.8} alignItems="center" justify="center">
              <Paper sx={!data2 && { background: '#F0F6FA', padding: 2 }}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      background: '#003E65',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                  >
                    2
                  </Box>
                  <Typography color={'#00253D'} fontWeight={600} variant="h5">
                    Dimensões a representar
                  </Typography>
                </Stack>
                <Box sx={{ height: '520px', overflowY: 'auto', marginTop: 5 }}>
                  {!isTrue && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        minHeight: '400px',
                      }}
                    >
                      <img width={44} src={iconAlert} alt="" />
                      <Typography sx={{ fontSize: '14px', pb: 2, pt: 2 }}>Sem indicadores selecionados.</Typography>
                      <Typography sx={{ fontSize: '14px' }}>
                        Selecione um ou mais indicadores da lista "Indicadores para trabalhar" para a elaboração do
                        quadro
                      </Typography>
                    </Box>
                  )}
                  {isTrue && (
                    <>
                      <List component="nav">
                        {lists.map(({ key, label, items }) => {
                          keyValue = key;
                          return (
                            <div key={key}>
                              <ListItem
                                // disableRipple
                                // disablePadding
                                sx={{
                                  borderBottom: '1px solid #EBEBEB',
                                  paddingLeft: 0,
                                  marginLeft: 0,
                                  color: 'black',
                                }}
                                onClick={() => handleClick(key)}
                              >
                                <ListItemText inset primary={label} />
                                {open[key] ? <ExpandLess /> : <ExpandMore />}
                              </ListItem>
                              <Collapse in={open[key]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {items.map(({ key: childKey, label: childLabel }) => (
                                    <ListItem sx={{ borderBottom: '1px solid #EBEBEB', paddingLeft: 0 }} key={childKey}>
                                      {/* <ListItemText inset primary={childLabel} /> */}

                                      <FormControl
                                        sx={{
                                          color: 'black',

                                          borderRadius: 1,

                                          fontWeight: 600,

                                          width: '100%',
                                        }}
                                      >
                                        <FormControlLabel
                                          onChange={() => setIsRepresentor(!isRepresentor)}
                                          value="top"
                                          control={<Checkbox />}
                                          label={childLabel}
                                          labelPlacement="start"
                                        />
                                      </FormControl>
                                    </ListItem>
                                  ))}
                                </List>
                              </Collapse>
                            </div>
                          );
                        })}
                      </List>
                    </>
                  )}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} xl={3.8} alignItems="center" justify="center">
              <Paper sx={!data2 && { background: '#F0F6FA', padding: 2, position: 'relative' }}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      background: '#003E65',
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                  >
                    3
                  </Box>
                  <Typography color={'#00253D'} fontWeight={600} variant="h5">
                    Condições de filtragem
                  </Typography>
                </Stack>
                <Box sx={{ height: '520px', overflowY: 'auto', marginTop: 5 }}>
                  {!isRepresentor && (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        minHeight: '400px',
                      }}
                    >
                      <img width={44} src={iconAlert} alt="" />
                      <Typography sx={{ fontSize: '14px', pb: 2, pt: 2 }}>Sem indicadores selecionados.</Typography>
                      <Typography sx={{ fontSize: '14px' }}>
                        Selecione um ou mais indicadores da lista "Indicadores para trabalhar" para a elaboração do
                        quadro
                      </Typography>
                    </Box>
                  )}

                  {isRepresentor && (
                    <>
                      <List component="nav">
                        {lists1.map(({ key, label, items }) => {
                          keyValue1 = key;
                          return (
                            <div key={key}>
                              <ListItem
                                // disableRipple
                                // disablePadding
                                sx={{
                                  borderBottom: '1px solid #EBEBEB',
                                  paddingLeft: 0,
                                  marginLeft: 0,
                                  color: 'black',
                                }}
                                onClick={() => handleClick2(key)}
                              >
                                <ListItemText inset primary={label} />
                                {open1[key] ? <ExpandLess /> : <ExpandMore />}
                              </ListItem>
                              <Collapse in={open1[key]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {items.map(({ key: childKey, label: childLabel }) => (
                                    <ListItem sx={{ borderBottom: '1px solid #EBEBEB', paddingLeft: 0 }} key={childKey}>
                                      {/* <ListItemText inset primary={childLabel} /> */}

                                      <FormControl
                                        sx={{
                                          color: 'black',

                                          borderRadius: 1,

                                          fontWeight: 600,

                                          width: '100%',
                                        }}
                                      >
                                        <FormControlLabel
                                          onChange={() => setIsFilter(!isFilter)}
                                          control={<Checkbox />}
                                          label={childLabel}
                                          labelPlacement="start"
                                        />
                                      </FormControl>
                                    </ListItem>
                                  ))}
                                </List>
                              </Collapse>
                            </div>
                          );
                        })}
                      </List>
                    </>
                  )}
                </Box>
                {isFilter && (
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', paddingY: 2, paddingX: 1 }}>
                    <Button variant="contained" sx={{ width: '100%', background: '#0066A4' }}>
                      Formatar Quadro
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel sx={{ marginBottom: 10 }} value="2">
          {user?.user_type?.name_en === 'Editor' ||
          user?.user_type?.name_en === 'Administrator' ||
          user?.user_type?.name_en === 'Partner' ? (
            <FlexmonsterReact.Pivot toolbar />
          ) : (
            <FlexmonsterReact.Pivot report="https://cdn.flexmonster.com/reports/report.json" />
          )}
        </TabPanel>
        <TabPanel value="3">
          <TabContext value={value1}>
            <Grid container spacing={2}>
              <Grid lg={8.5} item>
                <Paper
                  sx={{
                    border: ' 1px solid #EBEBEB',
                    boxShadow: '0px 6px 28px #00000014',
                    minHeight: '524px',
                    padding: 2,
                  }}
                >
                  <TabPanel value="1">Table</TabPanel>
                  <TabPanel value="2">
                    <Demo />
                  </TabPanel>
                  <TabPanel value="3">3</TabPanel>
                  <TabPanel value="4">4</TabPanel>
                  <TabPanel value="5">5</TabPanel>
                  <TabPanel value="6">6</TabPanel>
                </Paper>
              </Grid>
              <Grid lg={3.3} item>
                <Paper sx={{ ...commonShadow, minHeight: '524px', padding: 2, overflowY: 'auto' }}>
                  <CustomTabList
                    tabSx={{
                      justifyContent: 'flex-start',
                      fontWeight: 600,
                      ...commonShadow,
                      py: 0,
                      my: 0.5,
                      width: '100%',
                    }}
                    iconPosition="start"
                    orientation="vertical"
                    tabListData={representarType}
                    tabListHandler={(e, n) => setValue1(n)}
                  />
                </Paper>
              </Grid>
            </Grid>
          </TabContext>
        </TabPanel>
        <TabPanel value="4">4</TabPanel>
        <TabPanel value="5">5</TabPanel>
        <TabPanel value="6">6</TabPanel>
        <TabPanel value="7">7</TabPanel>
      </TabContext>

      {/*  */}
    </Box>
  );
};

export default EditorView;
