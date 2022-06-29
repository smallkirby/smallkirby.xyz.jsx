import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Tooltip,
  LinearScale,
  TimeScale,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { sotsuronTweets } from 'data/sotsuron';
import 'chartjs-adapter-moment';

ChartJS.register(
  PointElement,
  LineElement,
  Tooltip,
  LinearScale,
  TimeScale,
  CategoryScale,
);

const tweetData = sotsuronTweets.map((tweet) => {
  return {
    x: moment.unix(tweet.timestamp).toDate(),
    y: tweet.done_pages,
    text: tweet.text,
  };
});

const pointColor = '#BE1BD9';
const borderColor = '#84A87F';
const defaultColor = '#FBEBC2';
const defaultFontFamily = 'Ubuntu Mono';
const defaultFont = {
  color: defaultColor,
  font: {
    family: defaultFontFamily,
    size: 23,
  },
};

const xScale = {
  type: 'time',
  display: true,
  time: {
    displayFormats: {
      'day': 'YYYY/MM/DD',
      'minute': 'YYYY/MM/DD',
    },
  },
  ticks: {
    color: defaultColor,
    font: {
      family: defaultFontFamily,
    },
    maxTicksLimit: 15,
  },
  title: {
    text: 'DATE',
    display: true,
    ...defaultFont,
  },
};

const yScale = {
  ticks: {
    color: defaultColor,
    font: {
      family: defaultFontFamily,
    },
  },
  title: {
    text: 'DONE PAGES',
    display: true,
    ...defaultFont,
  },
};

const options = {
  responsive: true,
  scales: {
    x: xScale,
    y: yScale,
  },
  interaction: {
    mode: 'nearest',
  },
  plugins: {
    tooltip: {
      callbacks: {
        label(context: any) {
          return context.raw.text;
        },
        labelColor(context: any) {
          return {
            borderColor: defaultColor,
            backgroundColor: defaultColor,
          };
        },
        title(context: any) {
          return `${context[0].parsed.y} pages (` + moment(context[0].label).format('YYYY/MM/DD HH:mm') + ')';
        },
      },
      backgroundColor: '#32302F',
      displayColors: false,
      titleFont: defaultFontFamily,
      borderColor: defaultColor,
      borderWidth: 1,
      caretSize: 30,
      padding: 15,
      intersect: false,
    },
  },
};

const data = {
  datasets: [
    {
      borderColor: borderColor,
      pointBorderColor: pointColor,
      pointRadius: 5,
      fill: true,
      data: tweetData,
    },
  ],
};

export default function SotsuronChart() {
  return (
    // @ts-ignore
    <Line options={options} data={data} />
  );
}
