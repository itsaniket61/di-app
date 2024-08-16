import React, { useState } from 'react';
import Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';
import { Dashboard, HighchartsWidget, Widget } from '@/interfaces/Dashboard';
import ChartSettingsDialog from './ChartSettingsDialog';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Pen, Trash } from 'lucide-react';

// Initialize the 3D module
Highcharts3D(Highcharts);

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
