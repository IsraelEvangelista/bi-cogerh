
# Mapa do Projeto - BI Analítico Financeiro COGEU

## Estrutura de Pastas para Desenvolvimento Local

```
cogeu-bi-project/
│
├── frontend/                          # Aplicação React (atual projeto Lovable)
│   ├── src/
│   │   ├── components/                 # Componentes React
│   │   │   ├── ui/                    # Componentes base (shadcn/ui)
│   │   │   ├── charts/                # Componentes de gráficos específicos
│   │   │   ├── tables/                # Componentes de tabelas interativas
│   │   │   ├── layout/                # Componentes de layout (Sidebar, Header)
│   │   │   └── panels/                # Componentes específicos de cada painel
│   │   ├── hooks/                     # Custom hooks React
│   │   ├── services/                  # Serviços de API e integração
│   │   ├── types/                     # Definições TypeScript
│   │   ├── utils/                     # Utilitários e helpers
│   │   └── styles/                    # Estilos CSS customizados
│   ├── public/                        # Arquivos estáticos
│   ├── package.json                   # Dependências Node.js
│   └── vite.config.ts                 # Configuração Vite
│
├── backend/                           # API Backend Python
│   ├── app/
│   │   ├── main.py                    # Aplicação FastAPI principal
│   │   ├── config/                    # Configurações da aplicação
│   │   │   ├── __init__.py
│   │   │   ├── database.py            # Configuração PostgreSQL
│   │   │   └── settings.py            # Variáveis de ambiente
│   │   ├── models/                    # Modelos de dados (SQLAlchemy)
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── financial.py
│   │   │   └── metrics.py
│   │   ├── schemas/                   # Schemas Pydantic (validação)
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── financial.py
│   │   │   └── metrics.py
│   │   ├── api/                       # Endpoints da API
│   │   │   ├── __init__.py
│   │   │   ├── v1/                    # Versão 1 da API
│   │   │   │   ├── __init__.py
│   │   │   │   ├── dashboard.py       # Endpoints do dashboard
│   │   │   │   ├── indicators.py      # Endpoints de indicadores
│   │   │   │   ├── regularization.py  # Endpoints de regularização
│   │   │   │   ├── analysis.py        # Endpoints de análises
│   │   │   │   └── reports.py         # Endpoints de relatórios
│   │   │   └── deps.py                # Dependências comuns
│   │   ├── services/                  # Lógica de negócio
│   │   │   ├── __init__.py
│   │   │   ├── dashboard_service.py
│   │   │   ├── metrics_service.py
│   │   │   ├── analysis_service.py
│   │   │   └── report_service.py
│   │   ├── utils/                     # Utilitários Python
│   │   │   ├── __init__.py
│   │   │   ├── data_processing.py     # Processamento de dados com Pandas
│   │   │   ├── calculations.py        # Cálculos financeiros com NumPy
│   │   │   └── validators.py          # Validadores customizados
│   │   └── core/                      # Funcionalidades core
│   │       ├── __init__.py
│   │       ├── security.py            # Autenticação e autorização
│   │       └── middleware.py          # Middlewares customizados
│   ├── requirements.txt               # Dependências Python
│   ├── alembic/                       # Migrations do banco de dados
│   └── pytest.ini                     # Configuração de testes
│
├── notebooks/                         # Jupyter Notebooks para análise
│   ├── data_analysis/                 # Análise exploratória de dados
│   │   ├── 01_data_exploration.ipynb
│   │   ├── 02_financial_metrics.ipynb
│   │   └── 03_user_behavior.ipynb
│   ├── modeling/                      # Modelos estatísticos e ML
│   │   ├── 01_revenue_prediction.ipynb
│   │   ├── 02_churn_analysis.ipynb
│   │   ├── 03_demand_forecasting.ipynb
│   │   └── 04_risk_assessment.ipynb
│   ├── reporting/                     # Notebooks para relatórios
│   │   ├── monthly_report.ipynb
│   │   ├── quarterly_analysis.ipynb
│   │   └── annual_summary.ipynb
│   └── utils/                         # Utilitários para notebooks
│       ├── data_loader.py
│       ├── plot_helpers.py
│       └── model_evaluation.py
│
├── data/                              # Dados e arquivos relacionados
│   ├── raw/                           # Dados brutos
│   ├── processed/                     # Dados processados
│   ├── exports/                       # Exportações e relatórios
│   └── backup/                        # Backups de dados
│
├── database/                          # Scripts e configurações do DB
│   ├── migrations/                    # Scripts de migração
│   ├── seeds/                         # Dados iniciais
│   ├── schemas/                       # Esquemas do banco
│   └── docker-compose.yml             # PostgreSQL em Docker
│
├── docs/                              # Documentação do projeto
│   ├── api/                           # Documentação da API
│   ├── frontend/                      # Documentação do frontend
│   ├── deployment/                    # Guias de deploy
│   └── user_guide/                    # Manual do usuário
│
├── scripts/                           # Scripts utilitários
│   ├── setup.sh                       # Script de setup inicial
│   ├── backup.sh                      # Script de backup
│   ├── deploy.sh                      # Script de deploy
│   └── data_import.py                 # Importação de dados
│
├── tests/                             # Testes automatizados
│   ├── frontend/                      # Testes do frontend (Jest/React Testing Library)
│   ├── backend/                       # Testes do backend (pytest)
│   └── integration/                   # Testes de integração
│
├── docker/                            # Configurações Docker
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
│
├── .env.example                       # Exemplo de variáveis de ambiente
├── README.md                          # Documentação principal
└── .gitignore                         # Arquivos ignorados pelo Git
```

## Stack Tecnológica Detalhada

### Backend (Python)
- **Framework**: FastAPI
- **Banco de Dados**: PostgreSQL com SQLAlchemy ORM
- **Processamento**: Pandas, NumPy
- **Validação**: Pydantic
- **Testes**: pytest
- **Migrations**: Alembic

### Frontend (React)
- **Base**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Gráficos**: Recharts
- **Tabelas**: TanStack Table
- **Estado**: React Query para cache de API
- **Roteamento**: React Router Dom

### Análise de Dados (Jupyter)
- **Ambiente**: Jupyter Lab/Notebook
- **Visualização**: Matplotlib, Seaborn, Plotly
- **Machine Learning**: Scikit-learn, Prophet (previsões)
- **Estatística**: SciPy, Statsmodels

### Infraestrutura
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker
- **Proxy Reverso**: Nginx (produção)
- **Monitoramento**: Logs estruturados

## APIs Principais a Implementar

### Dashboard (`/api/v1/dashboard/`)
- `GET /overview` - Métricas gerais
- `GET /monthly-revenue` - Faturamento mensal
- `GET /top-clients` - Maiores clientes
- `GET /growth-metrics` - Métricas de crescimento

### Indicadores (`/api/v1/indicators/`)
- `GET /regularization` - Dados de regularização
- `GET /compliance` - Indicadores de conformidade
- `GET /targets` - Metas e objetivos

### Análises (`/api/v1/analysis/`)
- `GET /predictions` - Previsões estatísticas
- `GET /trends` - Análise de tendências
- `POST /custom-analysis` - Análises customizadas

### Relatórios (`/api/v1/reports/`)
- `GET /monthly` - Relatório mensal
- `GET /quarterly` - Relatório trimestral
- `POST /custom` - Relatórios customizados
- `GET /export/{format}` - Exportação (PDF, Excel, CSV)

## Próximos Passos de Desenvolvimento

1. **Setup do Backend**: Configurar FastAPI com PostgreSQL
2. **Modelos de Dados**: Definir esquemas do banco de dados
3. **APIs Base**: Implementar endpoints principais
4. **Integração Frontend**: Conectar React com APIs
5. **Notebooks**: Desenvolver análises estatísticas
6. **Testes**: Implementar testes automatizados
7. **Deploy**: Configurar ambiente de produção

Este mapa fornece uma estrutura completa para desenvolvimento local e deploy em servidor próprio com PostgreSQL.
```
