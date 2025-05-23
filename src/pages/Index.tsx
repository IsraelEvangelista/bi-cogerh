
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/Sidebar';
import DashboardContent from '@/components/DashboardContent';
import IndicadoresContent from '@/components/IndicadoresContent';
import EmptyPanel from '@/components/EmptyPanel';

const Index = () => {
  const [activePanel, setActivePanel] = useState('dashboard');

  const renderContent = () => {
    switch (activePanel) {
      case 'dashboard':
        return <DashboardContent />;
      case 'indicadores':
        return <IndicadoresContent />;
      case 'regularizacao':
        return (
          <EmptyPanel 
            title="Regularização" 
            description="Painéis de controle e monitoramento de processos de regularização de usuários."
          />
        );
      case 'analises':
        return (
          <EmptyPanel 
            title="Análises" 
            description="Análises avançadas com modelos estatísticos e probabilísticos de previsões."
          />
        );
      case 'relatorios':
        return (
          <EmptyPanel 
            title="Relatórios" 
            description="Relatórios detalhados e exportação de dados em diversos formatos."
          />
        );
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <AppSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <SidebarInset className="flex-1">
          <main className="flex-1 p-6 overflow-auto">
            {renderContent()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
