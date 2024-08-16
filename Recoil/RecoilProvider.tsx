import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilProviderProps {
  children: ReactNode;
}

export const RecoilProvider: React.FC<RecoilProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
