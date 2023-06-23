export const verticalChartOptions = {
  plugins: {
    datalabels: {
      color: '#FFFFFF',
    },

    legend: {
      display: false,
    },
  },
  indexAxis: 'x',

  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      stacked: true,
      grid: {},
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
      },
      stacked: true,
    },
  },
};

// for horizontal chart options
export const horizontalChartOptions = {
  plugins: {
    datalabels: {
      color: '#FFFFFF',
    },
    legend: {
      display: false,
    },
  },
  indexAxis: 'y',
  responsive: true,
  scales: {
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      stacked: true,
    },
    x: {
      stacked: true,
    },
  },
};

// for bar chart
export const horizontalBarChartData = {
  labels: [2011, 2012, 2013, 2014, 2015],
  datasets: [
    {
      label: false,
      data: [12, 19, 8, 6, 10],
      borderWidth: 1,
      backgroundColor: '#003E65',
      barPercentage: 0.7,
    },
    {
      //   label: '$ of Votes',
      data: [20, 19, 8, 6, 10],
      borderWidth: 1,
      backgroundColor: '#0066A4',
      barPercentage: 0.7,
    },
  ],
};
// for bar chart
export const verticalBarChartData = {
  labels: [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2022, 2023,
  ],
  datasets: [
    {
      label: false,
      data: [64, 89, 82, 83, 33, 52, 87, 39, 54, 53, 74, 80, 86, 89, 22, 31, 42, 83, 50, 98, 11, 69],
      borderWidth: 1,
      backgroundColor: '#003E65',
      barPercentage: 0.7,
    },
    {
      //   label: '$ of Votes',
      data: [73, 94, 81, 69, 85, 62, 76, 75, 13, 53, 81, 72, 74, 29, 56, 58, 77, 25, 33, 18, 89, 80],
      borderWidth: 1,
      backgroundColor: '#0066A4',
      barPercentage: 0.7,
    },
  ],
};

// top levels
export const topLevels = (dimension = 'VERTICAL') => {
  return {
    id: 'topLevels',
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        scales: { x, y },
      } = chart;
      chart.data.datasets[0].data.forEach((datapoint, index) => {
        const datasetArray = [];
        chart.data.datasets.forEach((dataset) => {
          datasetArray.push(dataset.data[index]);
        });
        console.log(datasetArray);
        // sum array
        const totalSum = (total, values) => {
          return total + values;
        };
        const sum = datasetArray.reduce(totalSum, 0);
        ctx.font = 'semibold 12px sans-serif';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        if (dimension === 'VERTICAL') {
          ctx.fillText(sum, x.getPixelForValue(index), chart.getDatasetMeta(1).data[index].y - 10);
        } else {
          ctx.fillText(sum, chart.getDatasetMeta(1).data[index].x + 10, y.getPixelForValue(index) + 2);
        }
      });
    },
  };
};

// optionDoughnut
export const optionDoughnut = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

//  border radius for doughnut chart
const doughnutBorderRadius = {
  afterUpdate(chart) {
    chart.getDatasetMeta(0).data.forEach((arc) => {
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (arc.outerRadius + arc.innerRadius) / 2,
        thickness: (arc.outerRadius - arc.innerRadius) / 2,
        backgroundColor: arc.options.backgroundColor,
      };
    });
  },
  afterDraw: (chart) => {
    const { ctx, canvas } = chart;

    chart.getDatasetMeta(0).data.forEach((arc) => {
      const startAngle = Math.PI / 2 - arc.startAngle;
      const endAngle = Math.PI / 2 - arc.endAngle;

      ctx.save();
      ctx.translate(arc.round.x, arc.round.y);
      ctx.beginPath();

      ctx.arc(
        arc.round.radius * Math.sin(startAngle),
        arc.round.radius * Math.cos(startAngle),
        arc.round.thickness,
        0,
        2 * Math.PI
      );
      ctx.fill();
      ctx.fillStyle = arc.options.backgroundColor;
      ctx.beginPath();

      ctx.arc(
        arc.round.radius * Math.sin(endAngle),
        arc.round.radius * Math.cos(endAngle),
        arc.round.thickness,
        0,
        2 * Math.PI
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
  },
};
