
import React from 'react';
import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';

interface EmptyPanelProps {
  title: string;
  description: string;
}

const EmptyPanel: React.FC<EmptyPanelProps> = ({ title, description }) => {
  return (
    <div className="space-y-6">
      <Card className="p-12 bg-white text-center">
        <Construction className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold mb-2">Painel em Desenvolvimento</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500">
          Este painel será implementado com visualizações específicas para {title.toLowerCase()}.
        </p>
      </Card>
    </div>
  );
};

export default EmptyPanel;
