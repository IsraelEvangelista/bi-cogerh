import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Target, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const IndicadoresContent = () => {
  const [selectedGerencia, setSelectedGerencia] = useState<string | null>(null);

  const gerenciasData = [
    {
      id: 'geofi',
      nome: 'Gerência de Outorga e Fiscalização',
      sigla: 'GEOFI',
      descricao: 'Responsável pelo acompanhamento e gerenciamento de Outorgas e Fiscalizações',
      indicadores: ['Outorgas Atendidas', 'Outorgas Faturadas', 'Usuários Fiscalizados'],
      cor: 'from-blue-500 to-blue-600'
    },
    {
      id: 'gemed',
      nome: 'Gerência de Medição',
      sigla: 'GEMED',
      descricao: 'Responsável pelo acompanhamento e gerenciamento de medições',
      indicadores: ['Medidores Instalados', 'Conversão de Estimados em Medidos'],
      cor: 'from-green-500 to-green-600'
    },
    {
      id: 'gereu',
      nome: 'Gerência de Relacionamento com o Usuário',
      sigla: 'GEREU',
      descricao: 'Responsável pela gestão do relacionamento e faturamento com o usuário',
      indicadores: ['Usuários Regularizados', 'Redução da Inadimplência', 'Crescimento de Faturamento'],
      cor: 'from-purple-500 to-purple-600'
    }
  ];

  const regularizationData = [
    {
      gerencia: 'GRALTIAGUARIBE',
      meta: 4,
      regularizado: 2,
      percent: 50.0
    },
    {
      gerencia: 'GRBANABUIU',
      meta: 10,
      regularizado: 0,
      percent: 0.0
    },
    {
      gerencia: 'GRCARAU',
      meta: 12,
      regularizado: 5,
      percent: 41.67
    },
    {
      gerencia: 'GRCRATEUS',
      meta: 16,
      regularizado: 3,
      percent: 18.75
    },
    {
      gerencia: 'GRCURU',
      meta: 13,
      regularizado: 3,
      percent: 23.08
    }
  ];

  const pieColors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];

  const handleVerPainel = (gerenciaId: string) => {
    setSelectedGerencia(gerenciaId);
    console.log('Abrir painel da gerência:', gerenciaId);
  };

  if (selectedGerencia) {
    const gerencia = gerenciasData.find(g => g.id === selectedGerencia);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => setSelectedGerencia(null)} className="text-blue-600 hover:text-blue-800 mb-2 flex items-center gap-2">
              ← Voltar para Gerências
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{gerencia?.nome} - {gerencia?.sigla}</h1>
          </div>
          <div className="text-gray-600 text-sm">Data de Atualização: 20/05/2025</div>
        </div>

        {/* Cards de resumo específicos da gerência selecionada */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Usuários Regularizados</p>
                <p className="text-3xl font-bold">228</p>
              </div>
              <CheckCircle className="w-12 h-12 opacity-80" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Excesso de Regularizações</p>
                <p className="text-3xl font-bold">13</p>
              </div>
              <AlertCircle className="w-12 h-12 opacity-80" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Meta Total</p>
                <p className="text-3xl font-bold">990</p>
              </div>
              <Target className="w-12 h-12 opacity-80" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Percentual Atingido</p>
                <p className="text-3xl font-bold">23,03%</p>
              </div>
              <TrendingUp className="w-12 h-12 opacity-80" />
            </div>
          </Card>
        </div>

        {/* Conteúdo específico da gerência */}
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Regularização por Gerência - {gerencia?.sigla}</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3 text-left">Gerência</th>
                  <th className="p-3 text-center">Meta</th>
                  <th className="p-3 text-center">Regularizado</th>
                  <th className="p-3 text-center">%</th>
                  <th className="p-3 text-center">Janeiro</th>
                  <th className="p-3 text-center">Fevereiro</th>
                  <th className="p-3 text-center">Março</th>
                  <th className="p-3 text-center">Abril</th>
                  <th className="p-3 text-center">Maio</th>
                </tr>
              </thead>
              <tbody>
                {regularizationData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.gerencia}</td>
                    <td className="p-3 text-center">{item.meta}</td>
                    <td className="p-3 text-center">{item.regularizado}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-sm ${item.percent >= 50 ? 'bg-green-100 text-green-800' : item.percent >= 25 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {item.percent.toFixed(1)}%
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      {item.gerencia === 'GRCARAU' ? '2' : '0'}
                    </td>
                    <td className="p-3 text-center">
                      {item.gerencia === 'GRCARAU' ? '1' : '0'}
                    </td>
                    <td className="p-3 text-center">
                      {item.gerencia === 'GRCARAU' ? '10' : '0'}
                    </td>
                    <td className="p-3 text-center">
                      {item.gerencia === 'GRBANABUIU' ? '19' : '0'}
                    </td>
                    <td className="p-3 text-center">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Painel de Indicadores por Gerência</h1>
      </div>

      {/* Cards das Gerências */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gerenciasData.map(gerencia => (
          <Card key={gerencia.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className={`p-4 bg-gradient-to-r ${gerencia.cor} text-white`}>
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8" />
                <div>
                  <h3 className="font-bold text-lg">{gerencia.sigla}</h3>
                  <p className="text-sm opacity-90">{gerencia.nome}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <p className="text-gray-600 text-sm mb-4">{gerencia.descricao}</p>
              
              <div className="mb-4 flex-1">
                <h4 className="font-semibold text-gray-800 mb-2">Indicadores Acompanhados:</h4>
                <ul className="space-y-1">
                  {gerencia.indicadores.map((indicador, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {indicador}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => handleVerPainel(gerencia.id)} 
                className={`w-full bg-gradient-to-r ${gerencia.cor} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto`}
              >
                Ver Painel de Indicadores
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndicadoresContent;
