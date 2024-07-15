import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Legend,
  Tooltip,
  Title
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Order & Delivery',
    },
  },
};

const data = {
  labels: [ 'Completed', 'Pending'],
  datasets: [
    {
      label: 'Order',
      data: [10, 20],
      backgroundColor: [
        '#219ebc',
        '#8ecae6',
        
      ],
      borderColor: [
        'rgba(25, 99, 132, 5)',
        'rgba(165, 19, 152, 0.5)',
        
      ],
      borderWidth: 1,
    },
  ],
};

function Piechart() {
  return (
    // <div >
    <div className='mt-4' style={{ width: '250px', height: '300px', marginLeft:'30%'}}>
      <Pie data={data} options={options} />
     
    </div>
  );
}

export default Piechart;
