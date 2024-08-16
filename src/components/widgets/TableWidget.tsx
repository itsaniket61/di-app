import React, { useState } from 'react';
import { TableWidgetType } from '@/interfaces/Dashboard';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface TableWidgetProps {
  widget: TableWidgetType;
}

const TableWidget: React.FC<TableWidgetProps> = ({ widget }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {widget.columns.map((column:any) => (
              <TableHead key={column.key}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {widget.rows.map((row:any, rowIndex:number) => (
            <TableRow key={rowIndex}>
              {widget.columns.map((column:any) => (
                <TableCell key={column.key}>{row[column.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableWidget;
