import { Dashboard, HighchartsWidget, WidgetType } from "./Dashboard";

const dashboard: Dashboard = {
  id: 'dashboard1',
  title: 'Sales Overview',
  widgets: [
    {
      id: 'widget1',
      type: WidgetType.Chart,
      title: 'Monthly Sales',
      position: { x: 0, y: 0, width: 12, height: 6 },
      data: {
        chart: { type: 'column' },
        title: { text: 'Monthly Sales Data' },
        xAxis: {
          categories: ['January', 'February', 'March'],
          title: { text: 'Month' },
        },
        yAxis: {
          min: 0,
          title: { text: 'Sales (in USD)' },
        },
        series: [
          {
            name: 'Sales 2024',
            data: [1500, 2000, 1800],
          },
        ],
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>',
        },
      },
    } as HighchartsWidget,
  ],
};
