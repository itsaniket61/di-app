import { Dashboard, HighchartsWidget, WidgetType } from "@/interfaces/Dashboard";
import { atom } from "recoil";

export const editChartWidgetState = atom<HighchartsWidget>({
    key: 'dashboardState',
    default: { data: ({} as any), title: '', id: '', type: WidgetType.Chart, style: {} },
});