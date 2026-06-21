export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">VidaPlena</h1>
        <p className="text-xl text-gray-600 mb-2">
          Ecossistema Digital de Gestão de Saúde e Bem-Estar Familiar
        </p>
        <p className="text-lg text-gray-500">
          MVP desenvolvido para o Processo de Seleção Pública FESF-SUS
        </p>
      </div>

      {/* Ações rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a
          href="/pacientes"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Pacientes</h2>
          <p className="text-gray-600">
            Gerencie o cadastro de pacientes e acesse seus dados completos.
          </p>
        </a>

        <a
          href="/agendamentos"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-green-600"
        >
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Agendamentos</h2>
          <p className="text-gray-600">
            Agora em breve. Organize e acompanhe os agendamentos de atendimentos.
          </p>
        </a>
      </div>

      {/* Sobre MVP */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Sobre este MVP</h3>
        <p className="text-gray-700 mb-3">
          Este sistema implementa as funcionalidades mínimas viáveis para demonstrar:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Backend:</strong> API FastAPI com CRUD completo de Pacientes e Agendamentos</li>
          <li><strong>Frontend:</strong> Interface React/Next.js integrada com a API</li>
          <li><strong>Dados:</strong> Banco SQLite com validações robustas (CPF, datas, relacionamentos)</li>
          <li><strong>Documentação:</strong> Swagger automático em /docs (Backend)</li>
        </ul>
      </div>
    </div>
  );
}
