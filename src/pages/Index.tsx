
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

  const getPanelDescription = () => {
    switch (activePanel) {
      case 'dashboard':
        return 'Dashboard - Indicadores';
      case 'indicadores':
        return 'Painel de Indicadores Financeiros';
      case 'regularizacao':
        return 'Painéis de controle e monitoramento de processos de regularização de usuários';
      case 'analises':
        return 'Análises avançadas com modelos estatísticos e probabilísticos de previsões';
      case 'relatorios':
        return 'Relatórios detalhados e exportação de dados em diversos formatos';
      default:
        return 'Dashboard - Indicadores';
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
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen w-full bg-white relative">
        <AppSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        
        {/* Painel principal que ocupa toda a largura */}
        <div className="w-full min-h-screen flex flex-col">
          <PanelHeader title={getPanelTitle()} />
          
          <main className="flex-1 p-6 overflow-auto bg-white pl-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
