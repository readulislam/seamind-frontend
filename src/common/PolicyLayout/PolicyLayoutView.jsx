import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import icon from '../../assets/images/Home A/icon-linkedin.svg';
import iconRight from '../../assets/images/icon-right.svg';
import HeroHeader from '../../components/HeroHeader';
import { CustomTypography, commonHeading } from '../../globalStyles';
import Cards from '../Cards';
import Indicators from '../Indicators';

const PolicyLayoutView = ({
  headerTitle,
  headerIcon,
  headerBgColor,
  logozIndex,
  headerQuote,
  NextTags,
  cardHeaderTitle,
  CardsData,
  IndicatorHeaderTitle,
  IndicatorSubTitle,
}) => {
  const { t } = useTranslation();
  // backgroundImage, children, bgColor, component, opacity

  return (
    <>
      <HeroHeader bgColor={headerBgColor} logozIndex={logozIndex}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box>
            <img src={headerIcon} alt="" />
            <Typography pt={2} variant="h3">
              {t(headerTitle)}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 24, maxWidth: 800 }}>{t(headerQuote)}</Typography>
        </Box>
      </HeroHeader>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingY: 5 }}>
          <Typography>{t('home')}</Typography>
          <img src={iconRight} alt="" />
          <Typography>{t('Policy')}</Typography>
          <img src={iconRight} alt="" />
          <NextTags />
        </Box>
        {/* main title  */}
        <CustomTypography>{t(cardHeaderTitle)}</CustomTypography>
        {/* sub title */}
        <Typography py={4} color={'black'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum
        </Typography>

        <Cards CardsData={CardsData} />

        <Indicators IndicatorHeaderTitle={t(IndicatorHeaderTitle)} IndicatorSubTitle={t(IndicatorSubTitle)} />
      </Container>
    </>
  );
};

export default PolicyLayoutView;
