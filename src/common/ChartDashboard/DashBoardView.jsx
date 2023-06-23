import { Box, Container, Grid, Stack } from '@mui/material';
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useState } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  horizontalBarChartData,
  horizontalChartOptions,
  optionDoughnut,
  topLevels,
  verticalBarChartData,
  verticalChartOptions,
} from '../../utils/chart';

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

// optionDoughnut

const DashBoardView = () => {
  const [completed, setCompleted] = useState(50);
  // for doughnut chart
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${completed}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    },
  };
  // for Doughnut chart
  const doughnutChartData = {
    labels: ['completed', 'uncompleted'],
    datasets: [
      {
        label: 'value',
        data: [completed, 100 - completed],
        backgroundColor: ['#0066A4', '#EFEFEF'],
        hoverOffset: 0,
        cutout: '75%',
      },
    ],
  };

  const verticalChart = 'VERTICAL';
  const horizontalChart = 'HORIZONTAL';
  return (
    <>
      <Container maxWidth={'xl'}>
        <Grid marginTop={20} gap={12} justifyContent={'center'} alignItems={'center'} container>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={12} md={3} lg={3} item>
            <Box>
              <Doughnut lineWidth={1} plugins={[textCenter]} options={optionDoughnut} data={doughnutChartData} />
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }} lg={1} item>
            <Stack direction={'column'} gap={2} width={110}>
              <Pie
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: ['completed', 'uncompleted'],
                  datasets: [
                    {
                      label: 'value',
                      data: [85, 100 - 85],
                      backgroundColor: ['#0066A4', '#EFEFEF'],
                    },
                  ],
                }}
              />
              <Pie
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: ['completed', 'uncompleted'],
                  datasets: [
                    {
                      label: 'value',
                      data: [45, 100 - 45],
                      backgroundColor: ['#0066A4', '#EFEFEF'],
                    },
                  ],
                }}
              />
              <Pie
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: ['completed', 'uncompleted'],
                  datasets: [
                    {
                      label: 'value',
                      data: [30, 100 - 30],
                      backgroundColor: ['#0066A4', '#EFEFEF'],
                    },
                  ],
                }}
              />
            </Stack>
          </Grid>

          <Grid sx={{ display: 'flex', justifyContent: 'center', width: '100%' }} xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ width: '100%', marginX: 'auto' }}>
              <Bar
                plugins={[ChartDataLabels, topLevels(horizontalChart)]}
                options={horizontalChartOptions}
                data={horizontalBarChartData}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Horizentol chart */}
      <Box sx={{ background: '#F0F6FA', marginY: 12 }}>
        <Container sx={{ paddingY: 4 }} maxWidth={'xl'}>
          <Bar
            plugins={[ChartDataLabels, topLevels(verticalChart)]}
            options={verticalChartOptions}
            data={verticalBarChartData}
          />
        </Container>
      </Box>
    </>
  );
};
export default DashBoardView;
