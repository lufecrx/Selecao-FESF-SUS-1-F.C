const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface ApiError {
  status: number;
  message: string;
  detail?: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = `HTTP Error: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.detail || errorData.message || errorMessage;
    } catch {
      // Se não conseguir fazer parsing do erro, usa a mensagem padrão
    }
    throw {
      status: response.status,
      message: errorMessage,
    } as ApiError;
  }

  // Para 204 No Content, retorna null
  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
}

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return handleResponse<T>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          status: 0,
          message: 'Erro de conexão com a API. Verifique se o servidor está rodando.',
        } as ApiError;
      }
      throw error;
    }
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse<T>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          status: 0,
          message: 'Erro de conexão com a API. Verifique se o servidor está rodando.',
        } as ApiError;
      }
      throw error;
    }
  },

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse<T>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          status: 0,
          message: 'Erro de conexão com a API. Verifique se o servidor está rodando.',
        } as ApiError;
      }
      throw error;
    }
  },

  async delete(endpoint: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      await handleResponse<void>(response);
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          status: 0,
          message: 'Erro de conexão com a API. Verifique se o servidor está rodando.',
        } as ApiError;
      }
      throw error;
    }
  },
};
