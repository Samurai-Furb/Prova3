import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  idBusca: number | null = null;
  
  funcionario: any = {
    id: null,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  mensagem: string = '';
  status: string = ''; 
  novoFuncionario = {
    id: null, 
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  constructor(private cadastroService: CadastroService) {}
  consultar() {
    if (!this.idBusca) {
      alert('Digite um ID para consultar.');
      return;
    }

    this.limparFeedback();

    this.cadastroService.consultar(this.idBusca).subscribe({
      next: (dados) => {
        this.funcionario = dados;
        
        if (!this.funcionario.id && !this.funcionario.nome) {
           this.status = 'Erro';
           this.mensagem = 'Funcionário não encontrado ou resposta vazia.';
        }
      },
      error: (err) => {
        console.error(err);
        this.status = 'Erro';
        this.mensagem = 'Erro na requisição de consulta.';
        this.limparDadosTela();
      }
    });
  }

  excluir() {
    if (!this.funcionario.id) return;

    this.cadastroService.excluir(this.funcionario.id).subscribe({
      next: (res) => {
        this.status = res.status;
        this.mensagem = res.mensagem;

        if (this.status === 'Ok') {
          this.limparDadosTela();
        }
      },
      error: (err) => {
        console.error(err);
        this.status = 'Erro';
        this.mensagem = 'Falha técnica ao tentar excluir.';
      }
    });
  }

  alterar() {
    if (!this.funcionario.id) return;

    this.cadastroService.alterar(this.funcionario.id, this.funcionario).subscribe({
      next: (res) => {
        this.status = res.status;
        this.mensagem = res.mensagem;
      },
      error: (err) => {
        console.error(err);
        this.status = 'Erro';
        this.mensagem = 'Falha técnica ao tentar alterar.';
      }
    });
  }

  cadastrar() {
    this.cadastroService.cadastrar(this.novoFuncionario).subscribe({
      next: (res) => {
        this.status = res.status;
        this.mensagem = res.mensagem;
        
        if (this.status === 'Ok') {
          this.novoFuncionario = { id: null, nome: '', departamento: '', endereco: '', email: '' };
        }
      },
      error: (err) => {
        console.error(err);
        this.status = 'Erro';
        this.mensagem = 'Falha técnica ao tentar cadastrar.';
      }
    });
  }

  private limparFeedback() {
    this.status = '';
    this.mensagem = '';
  }

  private limparDadosTela() {
    this.funcionario = { id: null, nome: '', departamento: '', endereco: '', email: '' };
  }
}