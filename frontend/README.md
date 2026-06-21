# VidaPlena Frontend 

Frontend React/Next.js para o sistema de gestão de saúde familiar VidaPlena, desenvolvido para o processo de seleção FESF-SUS.

## Stack tecnológico

- **Next.js 14.2**: Framework React com App Router
- **React 18.3**: Biblioteca UI
- **TypeScript 5.5**: Tipagem estática
- **Tailwind CSS 3.4**: Estilização utilitária
- **Fetch API**: Requisições HTTP (sem dependências extras)

## Instalação

```bash
cd frontend
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Build para produção

```bash
npm run build
npm run start
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do frontend:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Como executar

1. **Garantir que o backend está rodando:**

   ```bash
   cd backend
   python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
   ```

2. **Rodar o frontend:**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Acessar a aplicação:**
   - Home: `http://localhost:3000`