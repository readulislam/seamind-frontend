import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import headerIcon from '../../assets/images/icon-metas.svg';
import iconRight from '../../assets/images/icon-right.svg';
import GoalCard from '../../common/GoalCard';
import GoalSubCard from '../../common/GoalSubCard';
import HeroHeader from '../../components/HeroHeader';
import { CustomTypography } from '../../globalStyles';
import { metasGoalCardDatas } from '../../utils/mockData';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MetasView = () => {
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box>
            <img src={headerIcon} alt="" />
            <Typography pt={2} variant="h3">
              Metas
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 24, maxWidth: 800 }}>
            {' '}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </Typography>
        </Box>
      </HeroHeader>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingY: 5 }}>
          <Typography>Início</Typography>
          <img src={iconRight} alt="" />
          <Typography>Políticas</Typography>
          <img src={iconRight} alt="" />
          <Typography>Estratégia Nacional para o Mar 2021-2030</Typography>
          <img src={iconRight} alt="" />
          <Typography>Metas</Typography>
        </Box>
        <CustomTypography>Visão</CustomTypography>
        <Typography pt={4} color={'black'}>
          Promover um Oceano saudável para potenciar o desenvolvimento azul sustentável, o bem estar dos portugueses e
          afirmar Portugal como líder na governação do Oceano, apoiada no conhecimento científico.
        </Typography>
        <Typography py={2} color={'black'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet
        </Typography>

        {metasGoalCardDatas.map(({ id, mainTitle, description, minCardTitle, minCardImg }) => (
          <>
            <Box my={3}>
              <GoalCard
                props={{
                  leftBackgroundColor: '#9FCC3C',
                  rightBackgroundColor: '#003E65',
                  buttonColor: '#9FCC3C',
                  buttonStartIcon: VisibilityOutlinedIcon,
                  minCardTitle,
                  minCardImg,
                  headerTitle: 'OBJETIVO ESTRATÉGICO',
                  mainTitle: minCardTitle,
                  description,
                  serialNo: id,
                }}
              />
            </Box>
          </>
        ))}

        <GoalSubCard />
        <GoalSubCard />
      </Container>
    </>
  );
};

export default MetasView;
