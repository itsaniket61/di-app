import Highcharts from 'highcharts';
import { CSSProperties } from 'react';

// Represents a widget specifically for Highcharts
export interface HighchartsWidget extends Widget {
  type: WidgetType.Chart;
  data: HighchartsOptions;
}

// Highcharts options export interface extending Highcharts' native options
export interface HighchartsOptions extends Highcharts.Options {
  series: Highcharts.SeriesOptionsType[];
  xAxis?: Highcharts.XAxisOptions | Highcharts.XAxisOptions[];
  yAxis?: Highcharts.YAxisOptions | Highcharts.YAxisOptions[];
  title?: Highcharts.TitleOptions;
  subtitle?: Highcharts.SubtitleOptions;
  tooltip?: Highcharts.TooltipOptions;
}

// Represents the entire dashboard
export interface Dashboard {
  id: string;
  title: string;
  description?: string;
  widgets: Widget[];
  editMode: boolean;
}

// Represents individual widgets on the dashboard
export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  data: any;
  style:CSSProperties;
}

// Enum for widget types
export enum WidgetType {
  Chart = 'chart',
  Table = 'table',
  Text = 'text',
  Image = 'image',
}

// Represents a table widget
export interface TableWidgetType extends Widget {
  type: WidgetType.Table;
  columns: TableColumn[];
  rows: TableRow[];
}

// Represents a column in a table
export interface TableColumn {
  header: string;
  key: string;
  width?: number;
}

// Represents a row in a table
export interface TableRow {
  [key: string]: any;
}
