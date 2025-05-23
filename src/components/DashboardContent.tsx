import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const DashboardContent = () => {
  // Dados simulados baseados nas imagens
  const monthlyData = [{
    month: 'Jan',
    faturado: 21,
    consumo: 18
  }, {
    month: 'Fev',
    faturado: 20,
    consumo: 19
  }, {
    month: 'Mar',
    faturado: 18,
    consumo: 16
  }, {
    month: 'Abr',
    faturado: 19,
    consumo: 17
  }, {
    month: 'Mai',
    faturado: 7,
    consumo: 15
  }, {
    month: 'Jun',
    faturado: 16,
    consumo: 14
  }, {
    month: 'Jul',
    faturado: 18,
    consumo: 16
  }, {
    month: 'Ago',
    faturado: 19,
    consumo: 17
  }, {
    month: 'Set',
    faturado: 20,
    consumo: 18
  }, {
    month: 'Out',
    faturado: 21,
    consumo: 19
  }, {
    month: 'Nov',
    faturado: 22,
    consumo: 20
  }, {
    month: 'Dez',
    faturado: 25,
    consumo: 22
  }];
  const topClients = [{
    name: 'CAGECE ETA GAVIÃO',
    value: 24474830.73,
    growth: 5.89
  }, {
    name: 'CAGECE ETA OESTE',
    value: 14164815.36,
    growth: 0.14
  }, {
    name: 'ARCELORMITTAL PECÉM',
    value: 10466545.91,
    growth: 2.86
  }];
  const pieData = [{
    name: 'Carcinicultura',
    value: 38.43,
    color: '#22c55e'
  }, {
    name: 'Piscicultura',
    value: 34.00,
    color: '#3b82f6'
  }, {
    name: 'Demais Usos',
    value: 23.47,
    color: '#f59e0b'
  }, {
    name: 'Outros',
    value: 4.10,
    color: '#ef4444'
  }];
  return <div className="space-y-6">
      {/* Header com data */}
      <div className="flex justify-between items-center">
        
        
      </div>

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
        {/* Gráfico de barras mensal */}
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Faturamento Mensal (R$ Mi)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={value => [`R$ ${value}Mi`, '']} />
              <Bar dataKey="faturado" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top maiores faturamentos */}
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Top 3 Maiores Faturamentos do Ano</h3>
          <div className="space-y-4">
            {topClients.map((client, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex-1">
                  <p className="font-medium text-sm">{client.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{
                  width: `${Math.min(client.growth * 10, 100)}%`
                }}></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-green-600">
                    R$ {client.value.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-sm text-gray-600">{client.growth}%</p>
                </div>
              </div>)}
          </div>
        </Card>
      </div>

      {/* Gráfico de pizza - Crescimento por categoria */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Crescimento por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
                {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={value => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4">
            {pieData.map((entry, index) => <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded mr-2" style={{
              backgroundColor: entry.color
            }}></div>
                <span className="text-sm">{entry.name}: {entry.value}%</span>
              </div>)}
          </div>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Taxa de Crescimento</h3>
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">-6,28%</div>
              <div className="text-gray-600 mt-2">Taxa de Crescimento</div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                <div className="bg-gray-100 p-2 rounded text-center">jan</div>
                <div className="bg-gray-100 p-2 rounded text-center">fev</div>
                <div className="bg-gray-100 p-2 rounded text-center">mar</div>
                <div className="bg-gray-100 p-2 rounded text-center">abr</div>
                <div className="bg-gray-100 p-2 rounded text-center">mai</div>
                <div className="bg-gray-100 p-2 rounded text-center">jun</div>
                <div className="bg-gray-100 p-2 rounded text-center">jul</div>
                <div className="bg-gray-100 p-2 rounded text-center">ago</div>
                <div className="bg-gray-100 p-2 rounded text-center">set</div>
                <div className="bg-gray-100 p-2 rounded text-center">out</div>
                <div className="bg-gray-100 p-2 rounded text-center">nov</div>
                <div className="bg-gray-100 p-2 rounded text-center">dez</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default DashboardContent;