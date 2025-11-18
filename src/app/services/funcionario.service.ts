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
    foto: 'https://img.freepik.com/fotos-premium/um-desenvolvedor-trabalhando-em-otimizacao-de-algoritmos-e-melhorias-de-desempenho_1104763-17453.jpg',
    email: 'joao.silva@example.com',
    subobjeto: {
      propriedade1: 'Cargo: Desenvolvedor',
      propriedade2: 'Setor: TI'
    }
  },
  {
    id: 2,
    nome: 'Maria Souza',
    foto: 'https://images.imagenmia.com/model_version/1df843cb6790d0651e956078c93e0f37a1535300950019cc576ef7b8cc5d62a5/1723806278854-output.jpg',
    email: 'maria.souza@example.com',
    subobjeto: {
      propriedade1: 'Cargo: Analista',
      propriedade2: 'Setor: RH'
    }
  },
  {
    id: 3,
    nome: 'Carlos Almeida',
    foto: 'https://images.imagenmia.com/model_version/c5e4533b56d3e5048df34eec31df7cfa2f0a10f477886af442a2fb372569324e/1723815980081-output.jpg',
    email: 'carlos.almeida@example.com',
    subobjeto: {
      propriedade1: 'Cargo: UX Designer',
      propriedade2: 'Setor: Design'
    }
  },
  {
    id: 4,
    nome: 'Fernanda Couto',
    foto: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_6e6e558597ba5ebf940a55a3b9d48cb5.webp',
    email: 'fernanda.couto@example.com',
    subobjeto: {
      propriedade1: 'Cargo: Gerente de Projetos',
      propriedade2: 'Setor: PMO'
    }
  },
  {
    id: 5,
    nome: 'Ricardo Torres',
    foto: 'https://tse4.mm.bing.net/th/id/OIP.iXDPI6spe612IGk-pGlM1wHaHU?rs=1&pid=ImgDetMain&o=7&rm=3',
    email: 'ricardo.torres@example.com',
    subobjeto: {
      propriedade1: 'Cargo: Administrador de Redes',
      propriedade2: 'Setor: Infraestrutura'
    }
  },
  {
    id: 6,
    nome: 'Bianca Martins',
    foto: 'https://i.pinimg.com/736x/bd/f8/01/bdf801bcabf175c0608e43731a71288c.jpg',
    email: 'bianca.martins@example.com',
    subobjeto: {
      propriedade1: 'Cargo: Cientista de Dados',
      propriedade2: 'Setor: Data Science'
    }
  },
];


  constructor() { }

  getAll(): Observable<Funcionario[]> {
    return of(this.funcionarios);
  }
}
