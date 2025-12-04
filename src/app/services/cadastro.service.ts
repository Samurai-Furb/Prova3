import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly baseUrl = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";

  constructor(private http: HttpClient) {}

  consultar(id: number) {
    return this.http.get<any>(`${this.baseUrl}${id}`);
  }

  excluir(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  alterar(id: number, dados: any) {
    return this.http.put<any>(`${this.baseUrl}${id}`, dados);
  }

cadastrar(dados: any): Observable<any>{
  return this.http.post<any>(`%{this.baseUrl}/`, dados);
}
}
