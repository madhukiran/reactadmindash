import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  y: string; // The X-axis key
  [key: string]: number | string; // Other keys (ykeys) must be numbers
}

interface CustomAreaChartProps {
  id?: string;
  data: DataPoint[];
  xkey: string;
  ykeys: string[];
  labels: string[];
  lineColors: string[];
}

const CustomAreaChart: React.FC<CustomAreaChartProps> = ({
  id = 'area-chart-1',
  data = [
    { y: '2011 Q1', item1: 2666, item2: 2666 },
    { y: '2011 Q2', item1: 2778, item2: 2294 },
  ],
  xkey = 'y',
  ykeys = ['item1', 'item2'],
  labels = ['Item 1', 'Item 2'],
  lineColors = ['#a0d0e0', '#3c8dbc'],
}) => {
  return (
    <div id={id} style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xkey} />
          <YAxis />
          <Tooltip />
          {ykeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={lineColors[index]}
              fill={lineColors[index]}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;
