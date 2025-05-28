import React from 'react';
import { Filter } from 'lucide-react';
interface PanelHeaderProps {
  title: string;
}
const PanelHeader: React.FC<PanelHeaderProps> = ({
  title
}) => {
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  return <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-left justify-between shadow-sm">
      <h1 className="text-xl text-gray-800 font-bold">{title}</h1>
      
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Última atualização: {getCurrentDate()}
        </span>
        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>
    </div>;
};
export default PanelHeader;