import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { HighchartsWidget } from '@/interfaces/Dashboard';

interface ChartWidgetProps {
  widget: HighchartsWidget;
  editable?: boolean;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ widget,editable }) => {

  return (
    <div className='relative'>
      <HighchartsReact highcharts={Highcharts} options={widget.data} />
    </div>
  );
};
export default ChartWidget;
