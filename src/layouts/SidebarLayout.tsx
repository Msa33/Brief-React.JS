import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface SidebarLayoutProps {
  children: ReactNode;
}

function  SidebarLayout ({ children }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;




