
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/Sidebar';
import DashboardContent from '@/components/DashboardContent';
import IndicadoresContent from '@/components/IndicadoresContent';
import EmptyPanel from '@/components/EmptyPanel';
import PanelHeader from '@/components/PanelHeader';

const Index = () => {
  const [activePanel, setActivePanel] = useState('dashboard');

  const getPanelTitle = () => {
    switch (activePanel) {
      case 'dashboard':
        return 'Dashboard';
      case 'indicadores':
        return 'Indicadores';
      case 'regularizacao':
        return 'Regularização';
      case 'analises':
        return 'Análises';
      case 'relatorios':
        return 'Relatórios';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (activePanel) {
      case 'dashboard':
        return <DashboardContent />;
      case 'indicadores':
        return <IndicadoresContent />;
      case 'regularizacao':
        return <EmptyPanel title="Regularização" description="Painéis de controle e monitoramento de processos de regularização de usuários." />;
      case 'analises':
        return <EmptyPanel title="Análises" description="Análises avançadas com modelos estatísticos e probabilísticos de previsões." />;
      case 'relatorios':
        return <EmptyPanel title="Relatórios" description="Relatórios detalhados e exportação de dados em diversos formatos." />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-white">
        <AppSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <div className="flex-1 w-full ml-64">
          <div className="flex flex-col h-screen">
            <PanelHeader title={getPanelTitle()} />
            
            <main className="flex-1 p-6 overflow-auto bg-white">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
