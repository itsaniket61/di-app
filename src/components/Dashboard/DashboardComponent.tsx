'use client';
import {
  Dashboard,
  HighchartsWidget,
  TableWidgetType,
  WidgetType,
} from '@/interfaces/Dashboard';
import ChartWidget from '@/components/widgets/ChartWidget';
import TableWidget from '../widgets/TableWidget';
import WidgetCard from './WidgetCard';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from '../ui/button';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../../../Recoil/Atoms/DashboardAtom';

interface DashboardProps {
  
}

const DashboardComponent: React.FC<DashboardProps> = () => {
  const [dashboard,setDashboard] = useRecoilState(dashboardState);

  const moveWidget = (dragIndex: number, hoverIndex: number) => {
    const updatedWidgets = [...dashboard?.widgets];
    const [draggedWidget] = updatedWidgets.splice(dragIndex, 1);
    updatedWidgets.splice(hoverIndex, 0, draggedWidget);
    setDashboard((prev:any)=>{
      return { ...prev,widgets:updatedWidgets };
    })
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex flex-wrap'>
        {dashboard?.widgets.map((widget, index) => (
          <WidgetCard
            key={widget.id}
            widget={widget}
            index={index}
            moveWidget={moveWidget}
          >
            {widget.type === WidgetType.Chart && (
              <ChartWidget
                widget={widget as HighchartsWidget}
                editable={dashboard.editMode}
              />
            )}
            {widget.type === WidgetType.Table && (
              <TableWidget widget={widget as TableWidgetType} />
            )}
          </WidgetCard>
        ))}
      </div>
      <div className='flex items-center space-x-2 fixed bottom-0 right-0 bg-white border-black border rounded p-2 z-50'>
        <Switch
          id='edit-mode'
          checked={dashboard.editMode}
          onCheckedChange={()=>setDashboard((prev)=>{
            return {...prev,editMode:!prev.editMode}
          })}
        />
        <Label htmlFor='edit-mode'>Edit Mode</Label>
        <Button
          className='m-2'
          onClick={() => {
            const jsonStr = JSON.stringify(dashboard, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            const dashboardName = prompt(`Enter Dashboard Name`);
           if(dashboardName) {
             link.download = `${dashboardName}.chartx`;
             document.body.appendChild(link);
             link.click();
             document.body.removeChild(link);
           }
          }}
        >
          Download Dashboard
        </Button>
      </div>
    </DndProvider>
  );
};

export default DashboardComponent;
