import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function DashboardForm() {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Create Dashboard</CardTitle>
        <CardDescription>
          Create new Dashboard with Charts and Tables interactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Dashboard Name</Label>
              <Input id='name' placeholder='Name of your dashboard' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='description'>Dashboard Description</Label>
              <Input id='name' placeholder='Description of your dashboard' />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
