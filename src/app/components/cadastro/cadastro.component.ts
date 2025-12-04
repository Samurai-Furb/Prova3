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
        // Se a API retornar "null" ou vazio
        if (!dados) {
           this.status = 'Erro';
           this.mensagem = 'Funcionário não encontrado.';
           this.limparDadosTela();
           return;
        }
        this.funcionario = dados;
        // Limpa mensagem de erro anterior se houver
        this.status = '';
        this.mensagem = '';
      },
      error: (err) => {
        console.error(err);
        this.status = 'Erro';
        this.mensagem = 'Funcionário não encontrado ou erro na API.';
        this.limparDadosTela();
      }
    });
  }

  excluir() {
    if (!this.funcionario.id) return;
    this.cadastroService.excluir(this.funcionario.id).subscribe({
      next: (res) => {
        this.status = 'Ok';
        this.mensagem = 'Funcionário excluído com sucesso!';
        this.limparDadosTela();
      },
      error: (err) => {
        this.status = 'Erro';
        this.mensagem = 'Falha ao excluir.';
      }
    });
  }
  alterar() {
    if (!this.funcionario.id) return;

    this.cadastroService.alterar(this.funcionario.id, this.funcionario).subscribe({
      next: (res) => {
        this.status = 'Ok';
        this.mensagem = 'Dados alterados com sucesso!';
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
        // Se chegou aqui, deu certo (status 200)
        console.log('Sucesso:', res);
        this.status = 'Ok';
        this.mensagem = 'Funcionário cadastrado com sucesso!';
        this.novoFuncionario = { id: null, nome: '', departamento: '', endereco: '', email: '' };
      },
      error: (err) => {
        console.error('Erro:', err);
        this.status = 'Erro';
        this.mensagem = 'Falha ao cadastrar.';
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