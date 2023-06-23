import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DashBoardView from './DashBoardView';
import GoalCardView from '../GoalCard/GoalCardView';
import GoalSubCardView from '../GoalSubCard/GoalSubCardView';
import Image from '../../assets/images/icon-oe1.svg';

const ChartDashboard = () => {
  // const props = {
  //   mainTitle:'OBJETIVO ESTRATÉGICO 3',
  //   headerTitle:"Descarbonização, Energias Renováveis e Autonomia Energética",
  //   minCardTitle:"DESCARBONIZAÇÃO E ENERGIAS RENOVÁVEIS",
  //   minCardImg:Image,
  //   serialNo:"1",
  //   description:"A neutralidade carbónica é um dos grandes desafios do país para os próximos anos. Com a aposta em energias renováveis oceânicas, o favorecimento do carbono azul, e o incentivo a processos de menor pegada carbónica, o Mar pode assumir um contributo decisivo para este desígnio.",
  //   buttonColor:"#F15A26",
  //   leftBackgroundColor:"#F15A26",
  //   rightBackgroundColor:"#003E65",
  //   buttonStartIcon:<RemoveRedEyeIcon/>
  // };
  return (
    <>
      <DashBoardView />
      {/* <GoalCardView props={props}/> */}
    </>
  );
};

export default ChartDashboard;
