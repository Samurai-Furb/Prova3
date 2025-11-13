import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: 'João Silva',
      foto: 'https://via.placeholder.com/250',
      email: 'joao.silva@example.com',
      subobjeto: {
        propriedade1: 'Cargo: Desenvolvedor',
        propriedade2: 'Setor: TI'
      }
    },
    {
      id: 2,
      nome: 'Maria Souza',
      foto: 'https://via.placeholder.com/250',
      email: 'maria.souza@example.com',
      subobjeto: {
        propriedade1: 'Cargo: Analista',
        propriedade2: 'Setor: RH'
      }
    }
  ];

  constructor() { }

  getAll(): Observable<Funcionario[]> {
    return of(this.funcionarios);
  }
}
