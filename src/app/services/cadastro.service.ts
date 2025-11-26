import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseUrl = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";

  constructor(private http: HttpClient) {}

  consultar(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  excluir(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  alterar(id: number, dados: any) {
    return this.http.put(this.baseUrl + id, dados);
  }
}
