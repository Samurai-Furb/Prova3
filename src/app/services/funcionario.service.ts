import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  // Usa o mesmo Proxy configurado para evitar CORS
  private readonly baseUrl = '/api/cadastro';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]> {
    // Faz GET na raiz (/api/cadastro) para tentar trazer todos
    return this.http.get<Funcionario[]>(this.baseUrl);
  }
}