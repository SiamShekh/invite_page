import InvitePage from '@/pages/InvitePage';
import type { ComponentType, JSX } from 'react';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: InvitePage },
];
