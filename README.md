# VidaPlena — (FESF-SUS)

**Seleção FESF-SUS – 1 F.C**  
*Foco: Desenvolvimento Funcional da API e da Interface*

---

## 📋 Índice

1. [Descrição do Sistema](#descrição-do-sistema)
2. [Stack Tecnológica](#stack-tecnológica)
3. [Pré-requisitos de Instalação](#pré-requisitos-de-instalação)
4. [Rodando o Backend](#rodando-o-backend)
5. [Rodando o Frontend](#rodando-o-frontend)
6. [Variáveis de Ambiente](#variáveis-de-ambiente)
7. [Testando a API](#testando-a-api)
8. [Validando a Interface](#validando-a-interface)

---

## Descrição do Sistema

O **VidaPlena** é um sistema web para **gerenciamento de pacientes e controle integrado de agendamentos em saúde familiar**. O sistema atende a dois objetivos principais:

1. **Gerenciamento de Pacientes** — Cadastro e listagem de pacientes com validação de CPF (incluindo verificação de dígitos verificadores e unicidade), campos opcionais (email, telefone, sexo, observações) e interface responsiva com feedback visual de erros.
2. **Controle de Agendamentos** — Criação e listagem com filtros (por paciente, status e intervalo de datas).

O projeto é composto por uma **API RESTful** construída com FastAPI/Python e um **frontend SPA** desenvolvido com Next.js 14/React, comunicando-se via requisições HTTP.

---

## Stack Tecnológica

### Backend

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [FastAPI](https://fastapi.tiangolo.com/) | `0.115.6` | Framework web assíncrono para construção da API REST |
| [Python](https://www.python.org/) | 3.12 | Linguagem de programação |
| [SQLAlchemy](https://www.sqlalchemy.org/) | `2.0.36` | ORM para mapeamento objeto-relacional e abstração do banco |
| [SQLite](https://www.sqlite.org/) | — | Banco de dados relacional leve (arquivo local) |
| [aiosqlite](https://github.com/omnilib/aiosqlite) | `0.18.0` | Driver assíncrono para SQLite com suporte a `async/await` |
| [Pydantic](https://docs.pydantic.dev/) | `2.10.4` | Validação de dados, serialização e documentação automática da API |
| [email-validator](https://github.com/JoshData/python-email-validator) | `2.2.0` | Validação robusta de endereços de email no Pydantic |
| [uvicorn](https://www.uvicorn.org/) | `0.34.0` | Servidor ASGI para execução da aplicação FastAPI |

### Frontend

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Next.js](https://nextjs.org/) | `14.x` | Framework React para renderização e roteamento |
| [React](https://react.dev/) | `18.3.1` | Biblioteca de UI para componentes interativos |
| [TypeScript](https://www.typescriptlang.org/) | `5.5.4` | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | `3.4.7` | Framework utilitário para estilização responsiva |
| [PostCSS](https://postcss.org/) | `8.4.41` | Transformação de CSS via plugins (autoprefixer) |

---

## Pré-requisitos de Instalação

Antes de iniciar, certifique-se de ter os seguintes itens instalados em seu sistema:

### Backend

- **Python 3.12 ou superior**
  - Recomenda-se o uso do [`pyenv`](https://github.com/pyenv/pyenv) para gerenciar versões do Python:

    ```bash
    # Instalar Python 3.12
    pyenv install 3.12.4
    pyenv global 3.12.4
    ```
    
- **`venv`** (módulo padrão do Python para ambientes virtuais)

### Frontend

- **Node.js 18.x ou superior** com `npm` (ou `yarn`/`pnpm`)
  - Recomenda-se o uso do [`nvm`](https://github.com/nvm-sh/nvm):

    ```bash
    # Instalar Node.js 20 LTS
    nvm install 20
    nvm use 20
    ```

---

## Rodando o Backend

### 1. Navegar até o diretório do backend

```bash
cd backend
```

### 2. Criar e ativar o ambiente virtual

```bash
# Criar o ambiente virtual
python3 -m venv .venv

# Ativar o ambiente virtual
source .venv/bin/activate
```

### 3. Instalar as dependências

```bash
pip install -r requirements.txt
```

As dependências principais incluem:

- `fastapi` — Framework da API
- `uvicorn[standard]` — Servidor ASGI
- `sqlalchemy` — ORM
- `pydantic` — Validação de esquemas
- `email-validator` — Validação de email
- `aiosqlite` — Driver assíncrono para SQLite
- `pytest` + `httpx` — Testes

### 4. Iniciar o servidor

```bash
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

O servidor será iniciado em **`http://localhost:8000`**

## Rodando o Frontend

### 1. Navegar até o diretório do frontend

```bash
cd frontend
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do diretório `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **`http://localhost:3000`**.

---

## Testando a API

### Documentação Interativa (Swagger UI)

Com o backend rodando em `http://localhost:8000`, acesse:

```
http://localhost:8000/docs
```

Esta é a documentação automática gerada pelo FastAPI, que permite:

- **Visualizar todas as rotas**
- **Testar requisições diretamente**
- **Verificar esquemas de validação**
- **Examinar respostas esperadas**

## Validando a Interface

### Acesso

Com o frontend rodando, acesse:

```
http://localhost:3000
```

*Desenvolvido para o Processo de Seleção FESF-SUS*
