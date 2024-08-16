'use client';
import React from 'react';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      <div className='text-center p-6'>
        <Card className='max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg'>
          <Link href='https://evacta.com' target='_blank'>Evacta</Link>
          <CardTitle className='text-3xl font-bold mb-4'>
            Welcome to the Charts Application
          </CardTitle>
          <CardDescription className='text-lg mb-6'>
            Easily visualize your data with interactive charts and insightful
            analytics.
          </CardDescription>
          <Link href='/page/dashboard'>
            <Button>Get Started</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
