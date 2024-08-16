import React, { CSSProperties } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Card, CardTitle } from '../ui/card';
import { Widget } from '@/interfaces/Dashboard';
import { Button } from '../ui/button';
import { Pen, Trash } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { dashboardState } from '../../../Recoil/Atoms/DashboardAtom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import ChartSettingsDialog from '../widgets/ChartSettingsDialog';
import { editChartWidgetState } from '../../../Recoil/Atoms/EditChartWidgetAtom';

const cssTextToMap = (cssText: string): CSSProperties => {
  const cssMap: CSSProperties = {}; // Initialize with the correct type
  const rules = cssText.split(';').filter((rule) => rule.trim());

  rules.forEach((rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());
    if (property && value) {
      // Convert property name to camelCase
      const camelCaseProperty = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      ) as keyof CSSProperties;
      (cssMap[camelCaseProperty] as any) = value;
    }
  });

  return cssMap;
};

interface WidgetCardProps {
  widget: Widget;
  index: number;
  moveWidget: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
}

const WidgetCard: React.FC<WidgetCardProps> = ({
  widget,
  index,
  moveWidget,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [dashboard, setDashboard] = useRecoilState(dashboardState);

  const [{ isDragging }, drag] = useDrag({
    type: 'WIDGET',
    item: { index },
    canDrag: dashboard.editMode,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'WIDGET',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveWidget(item.index, index);
        item.index = index;
      }
    },
  });

  if (dashboard.editMode) {
    drag(drop(ref));
  }

  return (
    <Card
      ref={ref}
      className='p-0 relative'
      onMouseUp={(e) => {
        const node = e.target as HTMLElement;
        if (node.style.resize) {
          widget.style = cssTextToMap(node.style.cssText);
        }
      }}
      style={{
        ...widget.style,
        opacity: isDragging ? 0.5 : 1,
        cursor: dashboard.editMode ? 'move' : '',
      }}
    >
      {widget.title && (
        <div className='text-center p-2'>
          <CardTitle>{widget.title}</CardTitle>
        </div>
      )}
      {children}
      {dashboard.editMode && (
        <div className='absolute top-0 right-0'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Pen size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Chart</SheetTitle>
                <SheetDescription>
                  Make changes to your chart here. Click save when you are done.
                </SheetDescription>
              </SheetHeader>
              {/* <ChartSettingsDialog chartOptionsState={editChartWidgetState} />; */}
            </SheetContent>
          </Sheet>
          <Button
            variant='outline'
            size='icon'
            onClick={() => {
              const updatedWidgetArray = dashboard?.widgets.filter(
                (w) => w.id !== widget.id
              );
              setDashboard((prev: any) => {
                return { ...prev, widgets: updatedWidgetArray };
              });
            }}
          >
            <Trash size={20} />
          </Button>
        </div>
      )}
    </Card>
  );
};

export default WidgetCard;
