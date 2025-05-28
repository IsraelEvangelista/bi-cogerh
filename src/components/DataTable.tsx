
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

interface TableData {
  id: string;
  name: string;
  faturamentoAtual: number;
  faturamentoAnterior: number;
  taxaCrescimento: number;
  inadimplencia: number;
}

const DataTable = () => {
  const [selectedFilter, setSelectedFilter] = useState('usuario');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  // Dados simulados
  const mockData: TableData[] = [
    {
      id: '001',
      name: 'CAGECE ETA GAVIÃO',
      faturamentoAtual: 24474830.73,
      faturamentoAnterior: 23100000.00,
      taxaCrescimento: 5.89,
      inadimplencia: 150000.00
    },
    {
      id: '002',
      name: 'CAGECE ETA OESTE',
      faturamentoAtual: 14164815.36,
      faturamentoAnterior: 14144000.00,
      taxaCrescimento: 0.14,
      inadimplencia: 89000.00
    },
    {
      id: '003',
      name: 'ARCELORMITTAL PECÉM',
      faturamentoAtual: 10466545.91,
      faturamentoAnterior: 10176000.00,
      taxaCrescimento: 2.86,
      inadimplencia: 45000.00
    }
  ];

  const filterOptions = {
    usuario: 'Usuário',
    categoria: 'Categoria',
    grupo: 'Grupo',
    mes: 'Mês'
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return <ChevronsUpDown className="w-4 h-4" />;
    }
    if (sortDirection === 'asc') {
      return <ChevronUp className="w-4 h-4" />;
    }
    if (sortDirection === 'desc') {
      return <ChevronDown className="w-4 h-4" />;
    }
    return <ChevronsUpDown className="w-4 h-4" />;
  };

  return (
    <Card className="p-6 bg-white">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Filtrar por:</label>
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usuario">Usuário</SelectItem>
            <SelectItem value="categoria">Categoria</SelectItem>
            <SelectItem value="grupo">Grupo</SelectItem>
            <SelectItem value="mes">Mês</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              className="cursor-pointer select-none"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center gap-2">
                {filterOptions[selectedFilter as keyof typeof filterOptions]}
                {getSortIcon('name')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer select-none text-right"
              onClick={() => handleSort('faturamentoAtual')}
            >
              <div className="flex items-center justify-end gap-2">
                Faturamento Atual
                {getSortIcon('faturamentoAtual')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer select-none text-right"
              onClick={() => handleSort('faturamentoAnterior')}
            >
              <div className="flex items-center justify-end gap-2">
                Faturamento Ano Anterior
                {getSortIcon('faturamentoAnterior')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer select-none text-right"
              onClick={() => handleSort('taxaCrescimento')}
            >
              <div className="flex items-center justify-end gap-2">
                Taxa de Crescimento
                {getSortIcon('taxaCrescimento')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer select-none text-right"
              onClick={() => handleSort('inadimplencia')}
            >
              <div className="flex items-center justify-end gap-2">
                Inadimplência
                {getSortIcon('inadimplencia')}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-right">
                R$ {row.faturamentoAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="text-right">
                R$ {row.faturamentoAnterior.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell className={`text-right ${row.taxaCrescimento >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {row.taxaCrescimento > 0 ? '+' : ''}{row.taxaCrescimento.toFixed(2)}%
              </TableCell>
              <TableCell className="text-right text-red-600">
                R$ {row.inadimplencia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default DataTable;
