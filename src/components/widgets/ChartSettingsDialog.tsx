import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface ChartSettingsDialogProps {
  chartOptionsState: any;
}

const ChartSettingsDialog: React.FC<ChartSettingsDialogProps> = ({
  chartOptionsState,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const typeOfCharts = [
    'line',
    'spline',
    'area',
    'areaspline',
    'column',
    'bar',
    'pie',
    'scatter',
  ];

  const [chartOptions, setChartOptions] = chartOptionsState;

  const switchChartType = (chartType: string) => {
    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        type: chartType,
      },
    }));
  };

  const updateChartColor = (color: string) => {
    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      series: prevOptions.series.map((serie: any) => ({
        ...serie,
        color: color,
      })),
    }));
  };


  const updateXAxisTitle = (title: string) => {
    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      xAxis: {
        ...prevOptions.xAxis,
        title: {
          text: title,
        },
      },
    }));
  };

  const updateYAxisTitle = (title: string) => {
    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      yAxis: {
        ...prevOptions.yAxis,
        title: {
          text: title,
        },
      },
    }));
  };

  const updateLegendVisibility = (isVisible: boolean) => {
    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      legend: {
        ...prevOptions.legend,
        enabled: isVisible,
      },
    }));
  };

  const updateChartConfigFromDataSource = async (dataSourceUrl:string) => {
    fetch(`http://localhost:3000/api/charts/config`,{
      method:'POST'
    }).then((res)=>res.json().then((chartConfig)=>setChartOptions(chartConfig)));

  }
  return (
    <Card ref={dialogRef} className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Chart Settings</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Chart Type Selection */}
        <label>Chart Type:</label>
        <Select
          onValueChange={(value) => switchChartType(value)}
          defaultValue={chartOptions.chart?.type || 'line'}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Chart Type' />
          </SelectTrigger>
          <SelectContent>
            {typeOfCharts.map((type) => (
              <SelectItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Chart Color Picker */}
        <label>Chart Color:</label>
        <Input
          type='color'
          onChange={(e) => updateChartColor(e.target.value)}
          defaultValue={chartOptions.plotOptions?.series?.color || '#000000'}
        />

        {/* X-Axis Title */}
        <label>X-Axis Title:</label>
        <Input
          type='text'
          onChange={(e) => updateXAxisTitle(e.target.value)}
          placeholder='Enter X-Axis Title'
          defaultValue={chartOptions.xAxis?.title?.text || ''}
        />

        {/* Y-Axis Title */}
        <label>Y-Axis Title:</label>
        <Input
          type='text'
          onChange={(e) => updateYAxisTitle(e.target.value)}
          placeholder='Enter Y-Axis Title'
          defaultValue={chartOptions.yAxis?.title?.text || ''}
        />

        {/* Toggle Legend Visibility */}
        <label>Show Legend:</label>
        <Select
          onValueChange={(value) => updateLegendVisibility(value === 'true')}
          defaultValue={chartOptions.legend?.enabled ? 'true' : 'false'}
        >
          <SelectTrigger>
            <SelectValue placeholder='Select Legend Visibility' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='true'>Show</SelectItem>
            <SelectItem value='false'>Hide</SelectItem>
          </SelectContent>
        </Select>

        {/* Data Source */}
        <label>Data Source:</label>
        <Input
          type='text'
          onBlur={(e) => updateChartConfigFromDataSource(e.target.value)}
          placeholder='Data Source Url'
          defaultValue={chartOptions.yAxis?.title?.text || ''}
        />
      </CardContent>
    </Card>
  );
};

export default ChartSettingsDialog;
