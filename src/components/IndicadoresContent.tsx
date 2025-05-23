
import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Target, TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const IndicadoresContent = () => {
  const regularizationData = [
    { gerencia: 'GRALTIAGUARIBE', meta: 4, regularizado: 2, percent: 50.0 },
    { gerencia: 'GRBANABUIU', meta: 10, regularizado: 0, percent: 0.0 },
    { gerencia: 'GRCARAU', meta: 12, regularizado: 5, percent: 41.67 },
    { gerencia: 'GRCRATEUS', meta: 16, regularizado: 3, percent: 18.75 },
    { gerencia: 'GRCURU', meta: 13, regularizado: 3, percent: 23.08 },
  ];

  const pieColors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Indicador de Regularização</h1>
        <div className="text-white text-sm">Data de Atualização: 20/05/2025</div>
      </div>

      {/* Cards de resumo */}
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

      {/* Tabela de regularização por gerência */}
      <Card className="p-6 bg-white">
        <h3 className="text-lg font-semibold mb-4">Regularização por Gerência</h3>
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
                    <span className={`px-2 py-1 rounded text-sm ${
                      item.percent >= 50 ? 'bg-green-100 text-green-800' : 
                      item.percent >= 25 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
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

      {/* Gráficos de pizza */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Meta Inadimplência - Regularização por Gerência</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regularizationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="regularizado"
                nameKey="gerencia"
              >
                {regularizationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-4">
            {regularizationData.map((entry, index) => (
              <div key={index} className="flex items-center text-xs">
                <div 
                  className="w-3 h-3 rounded mr-1" 
                  style={{ backgroundColor: pieColors[index % pieColors.length] }}
                ></div>
                <span>{entry.gerencia.substring(2)}: {entry.percent.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Meta Novos Usuários - Regularização por Gerência</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regularizationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="meta"
                nameKey="gerencia"
              >
                {regularizationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-4">
            {regularizationData.map((entry, index) => (
              <div key={index} className="flex items-center text-xs">
                <div 
                  className="w-3 h-3 rounded mr-1" 
                  style={{ backgroundColor: pieColors[index % pieColors.length] }}
                ></div>
                <span>{entry.gerencia.substring(2)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IndicadoresContent;
