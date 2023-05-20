import { ReactNode } from "react";

export interface ISidebarElements {
  data: {
    title: string;
    to: string;
    icon: ReactNode;
  }[];
  pages: {
    title: string;
    to: string;
    icon: ReactNode;
  }[];
  charts: {
    title: string;
    to: string;
    icon: ReactNode;
  }[];
}
