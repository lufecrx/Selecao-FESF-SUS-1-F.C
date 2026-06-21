export interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  telefone?: string;
  email?: string;
  sexo?: string;
  observacoes?: string;
}

export interface CreatePacienteRequest {
  nome: string;
  cpf: string;
  data_nascimento: string;
  telefone?: string;
  email?: string;
  sexo?: string;
  observacoes?: string;
}

export interface UpdatePacienteRequest {
  nome?: string;
  cpf?: string;
  data_nascimento?: string;
  telefone?: string;
  email?: string;
  sexo?: string;
  observacoes?: string;
}
