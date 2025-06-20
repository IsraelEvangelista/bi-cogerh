import React from 'react';
import { LayoutDashboard, BarChart, Settings, Folder, LayoutList } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
interface AppSidebarProps {
  activePanel: string;
  setActivePanel: (panel: string) => void;
}
const menuItems = [{
  title: "Dashboard",
  icon: LayoutDashboard,
  id: "dashboard"
}, {
  title: "Indicadores",
  icon: BarChart,
  id: "indicadores"
}, {
  title: "Regularização",
  icon: Settings,
  id: "regularizacao"
}, {
  title: "Análises",
  icon: LayoutList,
  id: "analises"
}, {
  title: "Relatórios",
  icon: Folder,
  id: "relatorios"
}];
export function AppSidebar({
  activePanel,
  setActivePanel
}: AppSidebarProps) {
  return <Sidebar className="bg-blue-900 border-r-0 fixed z-50 w-64">
      <SidebarHeader className="p-4 border-b border-blue-800 bg-blue-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xs">BI</span>
            </div>
          </div>
          <div className="text-white">
            <div className="text-sm font-semibold">COGERH</div>
            <div className="text-xs opacity-80">Companhia de Gestão dos Recursos Hídricos</div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-blue-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton isActive={activePanel === item.id} onClick={() => setActivePanel(item.id)} className="text-white hover:bg-blue-800 data-[active=true]:bg-blue-700 data-[active=true]:text-white h-12 transition-colors justify-start">
                    <item.icon className="w-5 h-5" />
                    <span className="ml-3">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="bg-blue-900 border-t border-blue-800 p-4">
        <div className="text-white text-xs opacity-70 text-center">
          GEREU - v1.0
        </div>
      </SidebarFooter>
    </Sidebar>;
}