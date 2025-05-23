
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart, 
  Settings, 
  Menu,
  Folder,
  LayoutList
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activePanel: string;
  setActivePanel: (panel: string) => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    id: "dashboard",
  },
  {
    title: "Indicadores",
    icon: BarChart,
    id: "indicadores",
  },
  {
    title: "Regularização",
    icon: Settings,
    id: "regularizacao",
  },
  {
    title: "Análises",
    icon: LayoutList,
    id: "analises",
  },
  {
    title: "Relatórios",
    icon: Folder,
    id: "relatorios",
  },
];

export function AppSidebar({ activePanel, setActivePanel }: AppSidebarProps) {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar className="bg-blue-900 border-r-0">
      <SidebarHeader className="p-4 border-b border-blue-800">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/ab3f39fd-be8b-4c1e-9c33-344e9ff91233.png" 
              alt="COGEU Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          {state === "expanded" && (
            <div className="text-white">
              <div className="text-sm font-semibold">COGEU</div>
              <div className="text-xs opacity-80">Companhia de Gestão dos Recursos Hídricos</div>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-blue-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activePanel === item.id}
                    onClick={() => setActivePanel(item.id)}
                    className={`
                      text-white hover:bg-blue-800 data-[active=true]:bg-blue-700 
                      data-[active=true]:text-white h-12 transition-colors
                      ${state === "collapsed" ? "justify-center" : "justify-start"}
                    `}
                    tooltip={state === "collapsed" ? item.title : undefined}
                  >
                    <item.icon className="w-5 h-5" />
                    {state === "expanded" && <span className="ml-3">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="bg-blue-900 border-t border-blue-800 p-4">
        <div className="text-white text-xs opacity-70 text-center">
          {state === "expanded" ? "GEREU - v1.0" : "v1.0"}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
