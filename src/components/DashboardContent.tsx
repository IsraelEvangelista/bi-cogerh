
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import DataTable from './DataTable';

const DashboardContent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  // Dados modificados para incluir ano anterior
  const monthlyData = [
    { month: 'Jan', faturadoAtual: 21, faturadoAnterior: 19, trimestre: 1 },
    { month: 'Fev', faturadoAtual: 20, faturadoAnterior: 18, trimestre: 1 },
    { month: 'Mar', faturadoAtual: 18, faturadoAnterior: 20, trimestre: 1 },
    { month: 'Abr', faturadoAtual: 19, faturadoAnterior: 17, trimestre: 2 },
    { month: 'Mai', faturadoAtual: 7, faturadoAnterior: 12, trimestre: 2 },
    { month: 'Jun', faturadoAtual: 16, faturadoAnterior: 15, trimestre: 2 },
    { month: 'Jul', faturadoAtual: 18, faturadoAnterior: 16, trimestre: 3 },
    { month: 'Ago', faturadoAtual: 19, faturadoAnterior: 18, trimestre: 3 },
    { month: 'Set', faturadoAtual: 20, faturadoAnterior: 19, trimestre: 3 },
    { month: 'Out', faturadoAtual: 21, faturadoAnterior: 20, trimestre: 4 },
    { month: 'Nov', faturadoAtual: 22, faturadoAnterior: 21, trimestre: 4 },
    { month: 'Dez', faturadoAtual: 25, faturadoAnterior: 23, trimestre: 4 }
  ];

  const topClients = [
    { name: 'CAGECE ETA GAVIÃO', value: 24474830.73, growth: 5.89 },
    { name: 'CAGECE ETA OESTE', value: 14164815.36, growth: 0.14 },
    { name: 'ARCELORMITTAL PECÉM', value: 10466545.91, growth: 2.86 }
  ];

  const handleBarClick = (data: any) => {
    if (data && data.activeLabel) {
      setSelectedPeriod(data.activeLabel);
      console.log('Filtro aplicado para:', data.activeLabel);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const atual = payload.find((p: any) => p.dataKey === 'faturadoAtual')?.value || 0;
      const anterior = payload.find((p: any) => p.dataKey === 'faturadoAnterior')?.value || 0;
      const diferenca = ((atual - anterior) / anterior * 100).toFixed(2);
      
      return (
        <div className="bg-white p-3 border rounded shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-blue-600">Ano Atual: R$ {atual}Mi</p>
          <p className="text-gray-600">Ano Anterior: R$ {anterior}Mi</p>
          <p className={`${parseFloat(diferenca) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            Variação: {diferenca}%
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomXAxisTick = ({ x, y, payload }: any) => {
    const monthIndex = monthlyData.findIndex(d => d.month === payload.value);
    const isFirstOfQuarter = monthIndex % 3 === 0;
    
    return (
      <g>
        <text x={x} y={y + 4} textAnchor="middle" className="text-xs fill-gray-600">
          {payload.value}
        </text>
        {isFirstOfQuarter && (
          <text x={x + 60} y={y + 20} textAnchor="middle" className="text-xs fill-gray-500 font-medium">
            Trim {Math.floor(monthIndex / 3) + 1}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="space-y-6">
      {/* Cards principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Faturado Ano Atual</p>
              <p className="text-2xl font-bold">R$ 85.319.489,37</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>-6,28% em relação ao ano anterior</span>
              </div>
            </div>
            <DollarSign className="w-12 h-12 opacity-80" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Inadimplência</p>
              <p className="text-2xl font-bold">R$ 2.184.926,88</p>
              <div className="flex items-center mt-2 text-sm">
                <span className="bg-red-700 px-2 py-1 rounded">40,52%</span>
                <span className="ml-2">Taxa de Inadimplência 2,56%</span>
              </div>
            </div>
            <TrendingUp className="w-12 h-12 opacity-80" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total Usuários Faturados</p>
              <p className="text-2xl font-bold">4057</p>
              <div className="mt-2 text-sm">
                <p>Usuários com Parcelamento: 65</p>
                <p>Faturas Canceladas: 10</p>
              </div>
            </div>
            <Users className="w-12 h-12 opacity-80" />
          </div>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de barras mensal com comparação melhorada */}
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">
            Faturamento Mensal Comparativo (R$ Mi)
            {selectedPeriod && (
              <span className="text-sm font-normal text-gray-600 ml-2">
                - Filtrado por: {selectedPeriod}
              </span>
            )}
          </h3>
          <div className="mb-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span>Ano Atual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span>Ano Anterior</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData} onClick={handleBarClick} barCategoryGap="15%">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={<CustomXAxisTick />}
                height={60}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Barra do ano anterior (mais larga, atrás) */}
              <Bar 
                dataKey="faturadoAnterior" 
                fill="#9ca3af" 
                name="Ano Anterior"
                barSize={40}
                radius={[3, 3, 0, 0]}
                opacity={0.8}
              />
              
              {/* Barra do ano atual (mais estreita, na frente) */}
              <Bar 
                dataKey="faturadoAtual" 
                fill="#3b82f6" 
                name="Ano Atual"
                barSize={28}
                radius={[3, 3, 0, 0]}
              />
              
              {/* Linhas de separação dos trimestres */}
              <ReferenceLine x="Mar" stroke="#e5e7eb" strokeDasharray="2 2" />
              <ReferenceLine x="Jun" stroke="#e5e7eb" strokeDasharray="2 2" />
              <ReferenceLine x="Set" stroke="#e5e7eb" strokeDasharray="2 2" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top maiores faturamentos */}
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Top 3 Maiores Faturamentos do Ano</h3>
          <div className="space-y-4">
            {topClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex-1">
                  <p className="font-medium text-sm">{client.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(client.growth * 10, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-green-600">
                    R$ {client.value.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-sm text-gray-600">{client.growth}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Tabela de dados com filtros */}
      <DataTable />
    </div>
  );
};

export default DashboardContent;
