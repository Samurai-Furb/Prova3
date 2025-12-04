import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // URL base SEM a barra no final (para evitar duplicações acidentais)
  private readonly baseUrl = '/api/cadastro';

  constructor(private http: HttpClient) {}

  // GET: /api/cadastro/1
  consultar(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // DELETE: /api/cadastro/1
  // responseType: 'text' evita o erro "SyntaxError" se a API retornar texto simples
  excluir(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // PUT: /api/cadastro/1
  alterar(id: number, dados: any) {
    return this.http.put(`${this.baseUrl}/${id}`, dados, { responseType: 'text' });
  }

  // POST: /api/cadastro/ (A barra no final ajuda o servidor a reconhecer a rota de cadastro)
  cadastrar(dados: any): Observable<any> {
    // Corrigido o erro de %{} para ${} e garantido o formato correto
    return this.http.post(`${this.baseUrl}/`, dados, { responseType: 'text' });
  }
}